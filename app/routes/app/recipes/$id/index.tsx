import { Transition } from "@headlessui/react";
import {
  ArrowLongRightIcon,
  ArrowUturnLeftIcon,
  FaceSmileIcon,
  PaperClipIcon,
  PencilSquareIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "@remix-run/react";
import dayjs from "dayjs";
import Chip from "~/components/forms/Chip";
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
        page={""}
        textSize="text-2xl"
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
            action: () => navigate(-1),
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
        <div className="text-2xl  gap-3 bg-neutral-200 dark:bg-neutral-800 px-4 w-full items-center flex justify-between dark:text-neutral-200 p-4 mb-4 text-neutral-600 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl">
          <div>{recipe!.name}</div>
        </div>
        <div className="text-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3  items-center flex justify-between dark:text-neutral-200 p-4 mb-4 text-neutral-700 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl">
          <div>
            {" "}
            <b>Yields: </b>
            {recipe?.yieldAmt + " " + recipe?.yieldUnit}{" "}
          </div>
          <div>
            <div className=" flex items-center gap-2  bg-violet-500 hover:bg-violet-600 p-2 px-4 rounded-r-2xl font-light rounded-l-md rounded-bl-2xl text-lg text-neutral-100 dark:text-neutral-100 ">
              {recipe?.category} <ArrowLongRightIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <IngredientTable ingredients={recipe!.ingredients} />

        <div className="flex mt-4 gap-2 flex-wrap">
          {recipe!.allergens.length > 0 &&
            recipe!.allergens.map((a) => (
              <div
                key={a}
                className=" bg-violet-500 p-2 px-3 rounded-r-2xl font-light rounded-l-md rounded-bl-2xl text-base text-neutral-100 dark:text-neutral-100 "
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
        <div className="text-2xl bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 p-4 mt-4 text-neutral-700 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl ">
          Recipe Info
          <div className="flex gap-3 flex-wrap r mt-2 text-xl ">
            <div>
              <b>Author: </b>
              {recipe?.author?.firstName + " " + recipe?.author?.lastName}
            </div>

            <div>
              <b>Updated At: </b>
              {dayjs(recipe?.updatedAt)
                .format("dddd/MMM/YYYY")
                .split("/")
                .join(" ")}
            </div>
          </div>
        </div>
        {recipe!.linkedIngredients.length > 0 && (
          <div className="text-xl bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200  p-4 mt-4 text-neutral-700 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl ">
            Component of
            <div className="flex gap-3 flex-wrap r mt-2">
              {recipe!.linkedIngredients.map((li) => (
                <div key={li.recipe.id}>
                  <Link to={`/app/recipes/${li.recipe.id}`}>
                    <div className=" flex items-center gap-2  bg-violet-500 hover:bg-violet-600 p-2 px-4 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-base text-neutral-100 dark:text-neutral-100 ">
                      {li.recipe.name}{" "}
                      <ArrowLongRightIcon className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default RecipeIndex;
