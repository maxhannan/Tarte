import { Transition } from "@headlessui/react";
import {
  ArrowLongRightIcon,
  ArrowUturnLeftIcon,
  PencilSquareIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import type { LoaderFunction } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import Chip from "~/components/forms/Chip";
import AppBar from "~/components/navigation/AppBar";
import RecipeSummary from "~/components/recipefeed/RecipeSummary";
import Spinner from "~/components/status/smallSpinner";
import { getDishById } from "~/utils/menus.server";
import type { FullDish } from "~/utils/menus.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (params.id) {
    const dish = await getDishById(params.id);
    return dish;
  }
  return null;
};

const DishPage = () => {
  const dish = useLoaderData() as FullDish;
  const navigate = useNavigate();
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  console.log({ dish }, dish?.ingredients);
  return (
    <div className="mb-24">
      <AppBar
        page={""}
        textSize="text-2xl"
        buttons={[
          {
            Icon: PencilSquareIcon,
            buttonName: "Edit Recipe",
            action: () => console.log("edit", { replace: true }),
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
        <div className="text-2xl  gap-3   w-full items-center flex justify-between dark:text-neutral-200  mb-3 text-neutral-600 rounded-r-2xl font-light rounded-l-md rounded-bl-2xl">
          <div>{dish!.name}</div>
        </div>
        <div className="flex  gap-2 flex-wrap">
          {dish?.allergens &&
            dish?.allergens.length > 0 &&
            dish?.allergens.map((a) => <Chip key={a} content={a} />)}
        </div>
        <div className="text-3xl mt-3 border-neutral-300 border dark:border-neutral-700  gap-3  px-4 w-full items-center flex justify-between dark:text-neutral-200 p-4 mb-2 text-neutral-600 rounded-r-2xl font-light rounded-l-md rounded-bl-2xl">
          <div>Components</div>
        </div>
        <div className="flex flex-col gap-2">
          {dish!.ingredients.map((i) => {
            if (i.linkId && i.linkRecipe) {
              return (
                <RecipeSummary
                  category={i.linkRecipe.category}
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
                  className="  w-full max-h-full border-neutral-300 border bg-neutral-200 dark:bg-neutral-800   rounded-2xl rounded-tl-md  py-4   flex justify-start items-center  px-4   dark:border-neutral-700"
                >
                  <div className=" ">
                    <h5 className="text-xl text-neutral-700 dark:text-neutral-100">
                      {i.ingredient}
                    </h5>
                  </div>
                  <div className=" ml-auto ">
                    <PuzzlePieceIcon className="text-neutral-800 dark:text-neutral-200 w-5 h-5" />
                  </div>
                </div>
              );
          })}
        </div>
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

export default DishPage;
