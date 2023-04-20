import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import IconButton from "../buttons/IconButton";
import CustomTextInput from "../forms/CustomTextInput";
import IngredientSection from "../recipeForm/IngredientsSection";
import { useMatches } from "@remix-run/react";
import { useRouteData } from "~/hooks/useRouteData";
import MenuDishSection from "./menuDishSection";

const MenuSection = () => {
  return (
    <>
      <div className="flex gap-x-2 col-span-5 ">
        <CustomTextInput
          fieldName="Section Name"
          identifier="sectionName"
          required
        />
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="12"
            buttonName="deleteRecipe"
            action={() => console.log("i")}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-5 gap-x-2 gap-y-4">
        <MenuDishSection />
        <button
          type="button"
          className="col-span-11 col-start-2   h-12 inline-flex border-r-none items-center dark:hover:text-neutral-700 justify-between px-3 dark:bg-neutral-900 bg-neutral-100 hover:bg-neutral-700 border dark:border-neutral-700 border-neutral-300 border-dashed hover:text-neutral-200 hover:dark:bg-neutral-200  transition-all duration-300 rounded-r-2xl   rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  "
        >
          <h4 className="text-xl  ">Add Dish</h4>
          <PlusIcon className="h-7 w-7" />
        </button>
      </div>
    </>
  );
};

export default MenuSection;
