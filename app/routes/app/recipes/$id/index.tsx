import { Transition } from "@headlessui/react";
import {
  ArrowUturnLeftIcon,
  PencilSquareIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";
import AppBar from "~/components/navigation/AppBar";
import IngredientTable from "~/components/recipePage/ingredientTable/ingredientTable";
import RecipeStep from "~/components/recipePage/RecipeStep";
import { useRouteData } from "~/hooks/useRouteData";

import type { CompleteRecipe } from "~/utils/recipes.server";

const RecipeIndex = () => {
  const recipe = useRouteData("routes/app/recipes/$id") as CompleteRecipe;
  const navigate = useNavigate();
  console.log(recipe);
  return (
    <>
      <AppBar
        page={recipe!.name}
        textSize="text-3xl"
        buttons={[
          {
            Icon: PencilSquareIcon,
            buttonName: "Edit Recipe",
            action: () => navigate("edit"),
          },
          {
            Icon: ScaleIcon,
            buttonName: "Language",
            action: () => console.log("addRecipe"),
          },
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "User",
            action: () => navigate("/app/recipes"),
          },
        ]}
      />
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <IngredientTable ingredients={recipe!.ingredients} />

        <div className="flex mt-4 gap-2 flex-wrap">
          {recipe!.allergens.length > 0 &&
            recipe!.allergens.map((a) => (
              <div
                key={a}
                className=" bg-red-500 p-2 px-3 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-base text-neutral-100 dark:text-neutral-100 "
              >
                {a}
              </div>
            ))}
        </div>
        {recipe!.steps.length > 0 &&
          recipe!.steps.map((s) => (
            <RecipeStep
              key={s}
              stepNum={recipe!.steps.indexOf(s) + 1}
              content={s}
            />
          ))}
      </Transition>
    </>
  );
};

export default RecipeIndex;
