import { Transition } from "@headlessui/react";
import {
  ArrowUturnLeftIcon,
  LanguageIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";
import AppBar from "~/components/navigation/AppBar";
import IngredientTable from "~/components/recipePage/ingredientTable/ingredientTable";
import RecipeStep from "~/components/recipePage/RecipeStep";

const Allergens = [
  "Not Vegetarian",
  "Not Vegan",
  "Dairy",
  "Eggs",
  "Fish",
  "Shellfish",
];
const RecipePage = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-28">
      <AppBar
        page={"Compressed Watermelon"}
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
        <IngredientTable />

        <div className="flex mt-4 gap-2 flex-wrap">
          {Allergens.map((a) => (
            <div
              key={a}
              className=" bg-red-500 p-2 px-3 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-base text-neutral-100 dark:text-neutral-100 "
            >
              {a}
            </div>
          ))}
        </div>

        <RecipeStep
          stepNum="One"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quos est totam voluptates veniam magni fugiat ad. Deleniti fuga ex
            rem? Deleniti alias labore, similique maxime expedita modi quo
            ratione."
        />
        <RecipeStep
          stepNum="Two"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <RecipeStep
          stepNum="Three"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <RecipeStep
          stepNum="Four"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </Transition>
    </div>
  );
};

export default RecipePage;
