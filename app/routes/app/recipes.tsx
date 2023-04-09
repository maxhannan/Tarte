import { Outlet } from "@remix-run/react";
import type { LoaderFunction } from "react-router";
import { getRecipes } from "~/utils/recipes.server";
import type { FullRecipes } from "~/utils/recipes.server";

const filterAndCategorize = (
  recipes: FullRecipes,
  search: string | null,
  category: string | null
) => {
  const categorizedRecipes = category
    ? recipes!.filter((r) => r.category === category)
    : recipes;

  const recipeList = search
    ? categorizedRecipes!.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase())
      )
    : categorizedRecipes;

  return recipeList;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  console.log({ params });
  const recipes = await getRecipes();

  const search = params.get("search");
  const category = params.get("category");

  const recipeList = filterAndCategorize(recipes, search, category);
  const categories = [...new Set(recipes!.map((r) => r.category))];
  return { recipes, recipeList, categories };
};
const RecipesLayout = () => {
  return <Outlet />;
};

export default RecipesLayout;
