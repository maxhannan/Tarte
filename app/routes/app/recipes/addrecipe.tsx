import { ArrowUturnLeftIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useMatches,
  useNavigate,
  useNavigation,
} from "@remix-run/react";

import AppBar from "~/components/navigation/AppBar";
import RecipeForm from "~/components/recipeForm/recipeForm";
import Spinner from "~/components/status/smallSpinner";
import { useRouteData } from "~/hooks/useRouteData";
import { getUser } from "~/utils/auth.server";
import {
  createRecipe,
  extractRecipe,
  getRecipes,
} from "~/utils/recipes.server";

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request);
  const form = await request.formData();
  const newRecipe = extractRecipe(form);

  if (user) {
    const savedRecipe = await createRecipe(newRecipe, user.id);
    console.log({ savedRecipe });
    return redirect("/app/recipes");
  }

  return null;
};

const AddRecipe = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner size={14} />;
  }
  return (
    <div>
      <AppBar
        page="Add a Recipe"
        textSize="text-3xl"
        buttons={[
          {
            Icon: CheckCircleIcon,
            buttonName: "Submit",
            action: () => console.log("Save"),
          },
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "User",
            action: () => navigate("/app/recipes"),
          },
        ]}
      />
      <Form method="post">
        <RecipeForm />
      </Form>
    </div>
  );
};

export default AddRecipe;
