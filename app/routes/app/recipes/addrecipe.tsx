import { ArrowUturnLeftIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useNavigate, useNavigation } from "@remix-run/react";

import AppBar from "~/components/navigation/AppBar";
import RecipeForm from "~/components/recipeForm/recipeForm";
import Spinner from "~/components/status/smallSpinner";

import { getUser } from "~/utils/auth.server";
import { createRecipe, extractRecipe } from "~/utils/recipes.server";

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request);
  const form = await request.formData();
  const newRecipe = extractRecipe(form);

  if (user) {
    const savedRecipe = await createRecipe(newRecipe, user.id);
    console.log({ savedRecipe });

    return redirect(`/app/recipes/${savedRecipe.id}`);
  }

  return null;
};

const AddRecipe = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
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
