import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Form, useLoaderData, useMatches, useNavigate } from "@remix-run/react";
import DishForm from "~/components/dishForm/DishForm";
import AppBar from "~/components/navigation/AppBar";
import recipes from "../../recipes";
import { useRouteData } from "~/hooks/useRouteData";
import type { FullDish } from "~/utils/menus.server";
import type { LoaderFunction } from "@remix-run/node";
import { FullRecipes, getRecipes } from "~/utils/recipes.server";

export const loader: LoaderFunction = async () => {
  const recipes = await getRecipes();

  return recipes;
};

const EditDish = () => {
  const navigate = useNavigate();
  const recipes = useLoaderData() as FullRecipes;
  const dish = useRouteData("routes/app/menus.dishes/$id") as FullDish;
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
