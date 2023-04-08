import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { Form, useNavigate } from "@remix-run/react";
import AppBar from "~/components/navigation/AppBar";
import RecipeForm from "~/components/recipeForm/recipeForm";
import { useRouteData } from "~/hooks/useRouteData";
import { extractRecipe, updateRecipe } from "~/utils/recipes.server";
import type { CompleteRecipe } from "~/utils/recipes.server";

export const action: ActionFunction = async ({ request, params }) => {
  console.log(params.id);
  const recipeId = params.id;
  const form = await request.formData();
  const newRecipe = extractRecipe(form);
  const savedRecipe = await updateRecipe(recipeId!, newRecipe);
  console.log({ savedRecipe });

  return redirect(`/app/recipes/${recipeId}`);
};

const EditRecipePage = () => {
  const recipe = useRouteData("routes/app/recipes/$id") as CompleteRecipe;
  const navigate = useNavigate();
  console.log(recipe);
  return (
    <div>
      <AppBar
        page={`Edit ${recipe?.name}`}
        textSize="text-3xl"
        buttons={[
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "User",
            action: () => navigate(-1),
          },
        ]}
      />
      <Form method="post">
        <RecipeForm recipe={recipe} />
      </Form>
    </div>
  );
};

export default EditRecipePage;
