import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useMatches,
  useNavigate,
  useNavigation,
} from "@remix-run/react";

import DishForm from "~/components/dishForm/DishForm";

import AppBar from "~/components/navigation/AppBar";

import Spinner from "~/components/status/smallSpinner";
import { getUser } from "~/utils/auth.server";
import { createDish, extractDish } from "~/utils/menus.server";
import { getRecipes } from "~/utils/recipes.server";
import type { FullRecipes } from "~/utils/recipes.server";

export const loader: LoaderFunction = async () => {
  const recipes = await getRecipes();

  return { recipes };
};

export const action: ActionFunction = async ({ request }) => {
  const dishForm = await request.formData();
  const data = await extractDish(dishForm);
  const user = await getUser(request);

  const savedDish = await createDish(data, user!.id);

  if (savedDish) {
    return redirect(`/app/menus/dishes/${savedDish.id}`);
  }
  return null;
};

const AddDishPage = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const { recipes } = useLoaderData() as {
    recipes: FullRecipes;
  };
  console.log(useMatches());

  if (navigation.state === "loading") {
    return (
      <div className="h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  }

  return (
    <div className="mb-24">
      <Form method="post">
        <AppBar
          page="Add a Dish"
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
              action: () => navigate("/app/menus/dishes"),
            },
          ]}
        />
        <DishForm recipes={recipes} />
      </Form>
    </div>
  );
};

export default AddDishPage;
