import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import DishForm from "~/components/dishForm/DishForm";
import AppBar from "~/components/navigation/AppBar";
import { useRouteData } from "~/hooks/useRouteData";
import { extractDish, updateDish } from "~/utils/menus.server";
import type { FullDish } from "~/utils/menus.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { getRecipes } from "~/utils/recipes.server";
import type { FullRecipes } from "~/utils/recipes.server";
import { useEffect } from "react";

export const loader: LoaderFunction = async () => {
  const recipes = await getRecipes();

  return recipes;
};

export const action: ActionFunction = async ({ request, params }) => {
  const dishId = params.id;
  const form = await request.formData();
  const newDish = extractDish(form);
  const savedDish = await updateDish(dishId!, newDish);
  console.log({ savedDish });

  return dishId;
};

const EditDish = () => {
  const navigate = useNavigate();
  const recipes = useLoaderData() as FullRecipes;
  const dish = useRouteData("routes/app/menus.dishes/$id") as FullDish;

  const data = useActionData();
  console.log(data);

  useEffect(() => {
    if (data !== undefined) {
      navigate(`/app/menus/dishes/${data}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  console.log({ dish });
  return (
    <div className="mb-24">
      <Form method="post">
        <AppBar
          page="Edit Dish"
          textSize="text-4xl"
          buttons={[
            {
              Icon: CheckCircleIcon,
              buttonName: "Submit",
              type: "button",
              action: () => console.log("Saving..."),
            },
            {
              Icon: XMarkIcon,
              buttonName: "User",
              action: () => navigate(-1),
            },
          ]}
        />
        <DishForm recipes={recipes} dish={dish} />
      </Form>
    </div>
  );
};

export default EditDish;
