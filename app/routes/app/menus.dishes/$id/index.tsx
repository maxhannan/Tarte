import {
  ArrowLongRightIcon,
  ArrowUturnLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";

import { Link, useNavigate } from "@remix-run/react";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import SlideUpTransition from "~/components/animations/slideUp";
import Carousel from "~/components/displays/Carousel";
import CustomDisclosure from "~/components/displays/customDisclosure";
import Chip from "~/components/forms/Chip";
import AppBar from "~/components/navigation/AppBar";
import RecipeStep from "~/components/recipePage/RecipeStep";

import RecipeSummary from "~/components/recipefeed/RecipeSummary";

import { useRouteData } from "~/hooks/useRouteData";

import type { FullDish } from "~/utils/menus.server";

const DishIndex = () => {
  const dish = useRouteData("routes/app/menus.dishes/$id") as FullDish;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  if (!dish) {
    return navigate("/app/menus/dishes");
  }

  return (
    <div className="mb-28">
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
            Icon: ImageIcon,
            buttonName: "openModa",
            action: () => setIsOpen(!isOpen),
          },
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "User",
            action: () => navigate(-1),
          },
        ]}
      />
      {dish!.images.length > 0 && (
        <Carousel
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          imgSrcs={dish!.images}
        />
      )}
      <SlideUpTransition>
        <div className="flex flex-col gap-2 mb-2">
          <div className="text-2xl lg:text-3xl border border-neutral-300 dark:border-neutral-700 gap-2 bg-neutral-200 dark:bg-neutral-800 px-4 w-full items-center flex justify-between dark:text-neutral-200 p-4  text-neutral-600 rounded-xl font-light ">
            <div>{dish!.name}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex  gap-2 flex-wrap rounded-xl bg-neutral-100 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700 p-2  ">
              {dish?.allergens &&
                dish?.allergens.length > 0 &&
                dish?.allergens.map((a) => <Chip key={a} content={a} />)}
            </div>
            <CustomDisclosure name={"Components"}>
              {dish!.ingredients.map((i) => {
                if (i.linkId && i.linkRecipe) {
                  return (
                    <RecipeSummary
                      category={i.qty + " " + i.unit}
                      name={i.linkRecipe.name}
                      user={
                        i.linkRecipe.author!.firstName[0].toLowerCase() +
                        i.linkRecipe.author!.lastName[0].toLowerCase()
                      }
                      id={i.linkId}
                      link={`/app/recipes/`}
                      key={i.linkId}
                    />
                  );
                } else
                  return (
                    <div
                      key={i.id}
                      className="  w-full max-h-full border-neutral-300 border bg-opacity-50 dark:bg-opacity-50 bg-neutral-200 dark:bg-neutral-800   rounded-xl  pl-4 pr-2 font-light py-4   flex justify-start items-center  px-4   dark:border-neutral-700"
                    >
                      <div className=" ">
                        <h5 className="text-xl lg:text-2xl text-neutral-700 dark:text-neutral-100">
                          {i.ingredient}
                        </h5>
                        {(i.qty || i.unit) && (
                          <h6 className="text-md lg:text-lg mt-1  text-violet-500 dark:text-violet-300">
                            {i.qty && i.qty} {i.unit && i.unit}
                          </h6>
                        )}
                      </div>
                      <div className=" ml-auto ">
                        <PuzzlePieceIcon className="text-neutral-800 dark:text-neutral-200 w-5 h-5" />
                      </div>
                    </div>
                  );
              })}
            </CustomDisclosure>
          </div>
          <div className="flex flex-col gap-2">
            {dish!.steps.length > 0 && (
              <CustomDisclosure name="Steps">
                {dish!.steps.map((s, i) => (
                  <RecipeStep key={s} stepNum={i + 1} content={s} />
                ))}
              </CustomDisclosure>
            )}
            {dish.menu && dish.menu.length > 0 && (
              <div className="text-xl bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200  p-4  text-neutral-700 rounded-xl font-light  ">
                Menus
                <div className="flex gap-3 flex-wrap r mt-2">
                  {dish?.menu.map((m) => (
                    <div key={m.id}>
                      <Link to={`/app/menus/${m.id}`}>
                        <div className=" flex items-center gap-2  bg-violet-500 hover:bg-violet-600 p-2 px-4  font-light rounded-xl text-base text-neutral-100 dark:text-neutral-100 ">
                          {m.name} <ArrowLongRightIcon className="w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </SlideUpTransition>
    </div>
  );
};

export default DishIndex;
