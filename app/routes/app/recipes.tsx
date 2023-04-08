import { Outlet } from "@remix-run/react";
import type { LoaderFunction } from "react-router";
import { getRecipes } from "~/utils/recipes.server";

export const loader: LoaderFunction = async () => {
  const recipes = await getRecipes();
  const categories = [...new Set(recipes!.map((r) => r.category))];
  return { recipes, categories };
};
const RecipesLayout = () => {
  return <Outlet />;
};

export default RecipesLayout;
