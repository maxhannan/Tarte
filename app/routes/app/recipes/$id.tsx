import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData, useNavigation } from "@remix-run/react";

import Spinner from "~/components/status/smallSpinner";
import type { CompleteRecipe } from "~/utils/recipes.server";
import { getRecipeById } from "~/utils/recipes.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const recipe = await getRecipeById(params.id!);
  return recipe;
};

const RecipePage = () => {
  const navigation = useNavigation();

  const recipe = useLoaderData() as CompleteRecipe;

  if (navigation.state === "loading" || recipe === null) {
    return (
      <div className="h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  }
  return (
    <div className="mb-28">
      <Outlet />
    </div>
  );
};

export default RecipePage;
