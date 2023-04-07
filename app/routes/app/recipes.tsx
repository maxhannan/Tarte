import { Outlet } from "@remix-run/react";
import { LoaderFunction } from "react-router";
import { getRecipes } from "~/utils/recipes.server";

export const loader: LoaderFunction = async () => {
  const recipes = await getRecipes();

  return recipes;
};
const RecipesLayout = () => {
  return <Outlet />;
};

export default RecipesLayout;
