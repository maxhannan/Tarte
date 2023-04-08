import { Transition } from "@headlessui/react";
import {
  ArrowUturnLeftIcon,
  LanguageIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import AppBar from "~/components/navigation/AppBar";
import IngredientTable from "~/components/recipePage/ingredientTable/ingredientTable";
import RecipeStep from "~/components/recipePage/RecipeStep";
import Spinner from "~/components/status/smallSpinner";
import { CompleteRecipe, getRecipeById } from "~/utils/recipes.server";

const Allergens = [
  "Not Vegetarian",
  "Not Vegan",
  "Dairy",
  "Eggs",
  "Fish",
  "Shellfish",
];

export const loader: LoaderFunction = async ({ request, params }) => {
  const recipe = await getRecipeById(params.id!);
  return recipe;
};

const RecipePage = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const recipe = useLoaderData() as CompleteRecipe;
  console.log(recipe);
  if (navigation.state === "loading" || recipe === null) {
    return <Spinner size={14} />;
  }
  return (
    <div className="mb-28">
      <AppBar
        page={recipe!.name}
        textSize="text-2xl"
        buttons={[
          {
            Icon: PencilSquareIcon,
            buttonName: "Edit Recipe",
            action: () => console.log("addRecipe"),
          },
          {
            Icon: LanguageIcon,
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
        <IngredientTable ingredients={recipe.ingredients} />

        <div className="flex mt-4 gap-2 flex-wrap">
          {recipe.allergens.length > 0 &&
            recipe.allergens.map((a) => (
              <div
                key={a}
                className=" bg-red-500 p-2 px-3 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-base text-neutral-100 dark:text-neutral-100 "
              >
                {a}
              </div>
            ))}
        </div>
        {recipe.steps.length > 0 &&
          recipe.steps.map((s) => (
            <RecipeStep
              key={s}
              stepNum={recipe.steps.indexOf(s) + 1}
              content={s}
            />
          ))}
      </Transition>
    </div>
  );
};

export default RecipePage;
