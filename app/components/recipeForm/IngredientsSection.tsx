import { PlusCircleIcon } from "@heroicons/react/24/solid";

import IngredientAdder from "./IngredientAdder";

const IngredientSection = () => {
  return (
    <div className="grid grid-cols-5  gap-y-4 gap-x-2 w-full ">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow h-14 inline-flex items-center  dark:bg-neutral-200 bg-neutral-800 transition-all duration-300 rounded-r-2xl   pl-3 font-light rounded-l-md rounded-bl-2xl text-lg text-neutral-100 dark:text-neutral-800  ">
          <h4 className="text-3xl  "> Ingredients</h4>
        </div>
      </div>
      <IngredientAdder />

      <div className="col-span-5   h-12 inline-flex border-r-none items-center justify-between px-3 dark:bg-neutral-700 bg-neutral-200 transition-all duration-300 rounded-r-2xl   rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  ">
        <h4 className="text-xl dark:text-neutral-100 ">Add Ingredient</h4>
        <PlusCircleIcon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default IngredientSection;
