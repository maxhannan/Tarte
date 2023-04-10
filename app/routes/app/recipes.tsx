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

  const recipes = await getRecipes();

  const search = params.get("search");
  const category = params.get("category");
  const allergies = params.get("allergies");
  const alergyList = allergies && allergies.split(",");

  let recipeList = filterAndCategorize(recipes, search, category);
  let allergyRecipes;
  if (recipeList!.length > 0 && alergyList) {
    allergyRecipes = recipeList!.filter((r) => {
      let combinedAllergies = [...r.allergens];
      r.ingredients.forEach((i) => {
        if (i.linkRecipe && i.linkRecipe.allergens) {
          combinedAllergies = [...combinedAllergies, ...i.linkRecipe.allergens];
        }
      });

      let allergyFree = true;
      alergyList.forEach((a) => {
        if (combinedAllergies.includes(a)) {
          allergyFree = false;
        }
      });

      return allergyFree;
    });
    recipeList = allergyRecipes;
  }
  const categories = [...new Set(recipes!.map((r) => r.category))];
  return { recipes, recipeList, categories };
};
const RecipesLayout = () => {
  return <Outlet />;
};

export default RecipesLayout;
