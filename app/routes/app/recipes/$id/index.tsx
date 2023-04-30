import {
  ArrowLongRightIcon,
  ArrowUturnLeftIcon,
  PencilSquareIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "@remix-run/react";
import dayjs from "dayjs";
import SlideUpTransition from "~/components/animations/slideUp";
import CustomDisclosure from "~/components/displays/customDisclosure";
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
            action: () => navigate("edit", { replace: true }),
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
      <SlideUpTransition>
        <div className="text-3xl  gap-3  w-full items-center flex justify-between dark:text-neutral-200 mb-3  text-neutral-600 rounded-r-3xl  rounded-l-md rounded-bl-3xl">
          <div>{recipe!.name}</div>
        </div>

        {recipe!.allergens.length > 0 && (
          <div className="flex pb-3 gap-2 flex-wrap">
            {recipe!.allergens.map((a) => (
              <Chip content={a} key={a} />
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2">
          <div className="flex flex-col gap-3">
            <IngredientTable ingredients={recipe!.ingredients} />
            <div className="text-lg  bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3  items-center flex gap-4 justify-between dark:text-neutral-200 p-4 mb-4 text-neutral-700 rounded-xl font-light ">
              <div>
                {" "}
                <b>Yields: </b>
                {recipe?.yieldAmt + " " + recipe?.yieldUnit}{" "}
              </div>
              <div>
                <div
                  onClick={() =>
                    navigate(`/app/recipes?category=${recipe?.category}`)
                  }
                  className=" flex items-center gap-2 border  border-violet-500 cursor-pointer hover:border-neutral-700 hover:text-neutral-700 hover:dark:border-neutral-200 hover:dark:text-neutral-200 p-2 px-4 rounded-r-2xl font-light rounded-l-md rounded-bl-2xl text-lg text-violet-700 dark:text-violet-500 "
                >
                  {recipe?.category} <ArrowLongRightIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {recipe!.steps.length > 0 && (
              <CustomDisclosure name="Steps">
                {recipe!.steps.map((s) => (
                  <RecipeStep
                    key={s}
                    stepNum={recipe!.steps.indexOf(s) + 1}
                    content={s}
                  />
                ))}
              </CustomDisclosure>
            )}
            {recipe!.linkedIngredients.length > 0 && (
              <div className="text-xl bg-neutral-100 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200  p-4  text-neutral-700 rounded-xl font-light ">
                Component of
                <div className="flex gap-3 flex-wrap r mt-2">
                  {recipe!.linkedIngredients.map((li) => (
                    <div key={li.recipe.id}>
                      <Link
                        to={
                          li.recipe.dish === true
                            ? `/app/menus/dishes/${li.recipe.id}`
                            : `/app/recipes/${li.recipe.id}`
                        }
                      >
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
            <div className="text-2xl bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 p-4  text-neutral-700 rounded-xl font-light  ">
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
          </div>
        </div>
      </SlideUpTransition>
    </>
  );
};

export default RecipeIndex;
