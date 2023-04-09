import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import IngredientAdder from "./IngredientAdder";
import { v4 } from "uuid";
import type { FullRecipes } from "~/utils/recipes.server";
import { useRouteData } from "~/hooks/useRouteData";

interface Props {
  ingredientList?: Ingredient[];
}
export interface Ingredient {
  id: string;
  ingredient: string;
  qty: string | undefined;
  unit: string | undefined;
  linkId: string | null;
  linkRecipe: { id: string; value: string } | null;
  recipeId?: string;
}

const IngredientSection = ({ ingredientList }: Props) => {
  const { recipes } = useRouteData("routes/app/recipes") as {
    recipes: FullRecipes;
  };
  const recipeList =
    ingredientList && ingredientList.length > 0 && ingredientList[0].recipeId
      ? recipes!.filter((r) => r.id !== ingredientList![0].recipeId)
      : recipes;

  const [ingredients, setIngredients] = useState(
    ingredientList
      ? ingredientList
      : [
          {
            id: v4(),
            ingredient: "Hello",
            qty: "",
            unit: undefined,
            linkId: null,
            linkRecipe: null,
          },
        ]
  );
  const addIngredient = () => {
    const newIngredient = {
      id: v4(),
      ingredient: "",
      qty: "",
      unit: undefined,
      linkId: null,
      linkRecipe: null,
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleDelete = (id: string) => {
    const newIngredients = ingredients.filter((i) => i.id !== id);
    setIngredients(newIngredients);
  };

  return (
    <div className="grid grid-cols-5  gap-y-4 gap-x-2 w-full ">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow h-14 border-l-8 border-l-neutral-400 inline-flex items-center  dark:bg-neutral-200 bg-neutral-700 transition-all duration-300 rounded-r-2xl   pl-3 font-light rounded-l-md rounded-bl-2xl text-lg text-neutral-100 dark:text-neutral-800  ">
          <h4 className="text-3xl  "> Ingredients</h4>
        </div>
      </div>
      {ingredients.map((i) => (
        <IngredientAdder
          key={i.id}
          ingredient={i}
          recipes={recipeList}
          handleDelete={handleDelete}
        />
      ))}

      <div
        onClick={addIngredient}
        className="col-span-5   h-12 inline-flex border-r-none items-center dark:hover:text-neutral-700 justify-between px-3 dark:bg-neutral-900 bg-neutral-100 hover:bg-neutral-700 border dark:border-neutral-700 border-neutral-300 border-dashed hover:text-neutral-200 hover:dark:bg-neutral-200  transition-all duration-300 rounded-r-2xl   rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  "
      >
        <h4 className="text-xl  ">Add Ingredient</h4>
        <PlusIcon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default IngredientSection;
