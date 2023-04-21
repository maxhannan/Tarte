import { Disclosure, Transition } from "@headlessui/react";
import {
  ArrowLongRightIcon,
  ArrowUturnLeftIcon,
  ChevronUpIcon,
  PencilSquareIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import type { LoaderFunction } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  useMatches,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import Chip from "~/components/forms/Chip";
import AppBar from "~/components/navigation/AppBar";
import RecipeStep from "~/components/recipePage/RecipeStep";

import RecipeSummary from "~/components/recipefeed/RecipeSummary";
import Spinner from "~/components/status/smallSpinner";
import { useRouteData } from "~/hooks/useRouteData";
import { getDishById } from "~/utils/menus.server";
import type { FullDish } from "~/utils/menus.server";

const DishIndex = () => {
  const dish = useRouteData("routes/app/menus.dishes/$id") as FullDish;
  const navigate = useNavigate();

  return (
    <div className="mb-24">
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
      <SlideUpTransition>
        <div className="text-3xl  gap-3   w-full items-center flex justify-between dark:text-neutral-200  mb-3 text-neutral-600 rounded-r-2xl rounded-l-md rounded-bl-2xl">
          <div>{dish!.name}</div>
        </div>
        <div className="flex  gap-2 flex-wrap mb-4">
          {dish?.allergens &&
            dish?.allergens.length > 0 &&
            dish?.allergens.map((a) => <Chip key={a} content={a} />)}
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="dark:bg-opacity-50 transition-all duration-300 flex w-full items-center justify-between rounded-tl-md rounded-xl  bg-neutral-200 font-normal dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-left text-xl  text-neutral-700 dark:text-neutral-200  focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
                <span>Components</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-7 w-7 `}
                />
              </Disclosure.Button>

              <Transition
                enter="transition-all ease-linear  duration-300  overflow-hidden"
                enterFrom="transform opacity-0 "
                enterTo="transform opacity-100  "
                leave="transition-all ease-linear duration-200 overflow-hidden"
                leaveFrom="transform opacity-100 "
                leaveTo="transform opacity-0 "
              >
                <Disclosure.Panel className=" pb-2 flex mt-2 flex-col gap-2 text-sm text-gray-500">
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
                          className="  w-full max-h-full border-neutral-300 border bg-opacity-50 dark:bg-opacity-50 bg-neutral-200 dark:bg-neutral-800   rounded-2xl rounded-tl-md  py-4   flex justify-start items-center  px-4   dark:border-neutral-700"
                        >
                          <div className=" ">
                            <h5 className="text-xl text-neutral-700 dark:text-neutral-100">
                              {i.ingredient}
                            </h5>
                            <h6 className="text-md mt-1  text-violet-500 dark:text-violet-300">
                              {i.qty && i.qty} {i.unit && i.unit}
                            </h6>
                          </div>

                          <div className=" ml-auto ">
                            <PuzzlePieceIcon className="text-neutral-800 dark:text-neutral-200 w-5 h-5" />
                          </div>
                        </div>
                      );
                  })}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        {dish!.steps.length > 0 &&
          dish!.steps.map((s, i) => (
            <RecipeStep key={s} stepNum={i + 1} content={s} />
          ))}
        <div className="text-xl bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200  p-4 mt-4 text-neutral-700 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl ">
          Menus
          <div className="flex gap-3 flex-wrap r mt-2">
            {dish?.menu.map((m) => (
              <div key={m.id}>
                <Link to={`/app/menus/${m.id}`}>
                  <div className=" flex items-center gap-2  bg-violet-500 hover:bg-violet-600 p-2 px-4 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-base text-neutral-100 dark:text-neutral-100 ">
                    {m.name} <ArrowLongRightIcon className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SlideUpTransition>
    </div>
  );
};

export default DishIndex;
