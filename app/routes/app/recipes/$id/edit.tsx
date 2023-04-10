import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

import type { ActionFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import { useEffect } from "react";
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

  return recipeId;
};

const EditRecipePage = () => {
  const recipe = useRouteData("routes/app/recipes/$id") as CompleteRecipe;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  console.log(data);
  const loading =
    navigation.state === "submitting" || navigation.state === "loading";

  useEffect(() => {
    if (data !== undefined) {
      navigate(`/app/recipes/${data}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <Form method="post">
        <AppBar
          page={`Edit ${recipe?.name}`}
          textSize="text-3xl"
          buttons={[
            {
              Icon: CheckCircleIcon,
              buttonName: "Submit",
              type: "submit",
              action: () => console.log("Saving..."),
              loading: loading,
            },
            {
              Icon: XMarkIcon,
              buttonName: "User",
              action: () =>
                navigate(`/app/recipes/${recipe!.id}`, { replace: true }),
            },
          ]}
        />

        <RecipeForm recipe={recipe} />
      </Form>
    </div>
  );
};

export default EditRecipePage;
