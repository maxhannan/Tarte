import { PlusCircleIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import IconButton from "../buttons/IconButton";
import IconTextField from "../forms/IconTextField";
import SelectBox from "../forms/SelectBox";

const IngredientSection = () => {
  return (
    <div className="grid grid-cols-5  gap-y-4 gap-x-2 w-full">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow border-l-8 h-14 inline-flex items-center border-l-red-500   dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 rounded-r-2xl   pl-3 font-light rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  ">
          <h4 className="text-3xl dark:text-neutral-100 "> Ingredients</h4>
        </div>
      </div>
      <div className="flex gap-x-2 col-span-5">
        <div className="grow">
          <IconTextField Icon={PlusIcon} fieldName="Name" identifier="name" />
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="14"
            buttonName="deleteRecipe"
            action={() => console.log("delete")}
          />
        </div>
      </div>
      <div className="col-span-5 relative">
        <SelectBox />
      </div>
      <div className="col-span-3 relative">
        <IconTextField Icon={PlusIcon} fieldName="Amt" identifier="name" />
      </div>
      <div className="col-span-2 relative">
        <SelectBox />
      </div>
      <div className="col-span-5 border-b-4 rounded-sm dark:border-neutral-700"></div>
      <div className="flex gap-x-2 col-span-5">
        <div className="grow">
          <IconTextField Icon={PlusIcon} fieldName="Name" identifier="name" />
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="14"
            buttonName="deleteRecipe"
            action={() => console.log("delete")}
          />
        </div>
      </div>
      <div className="col-span-5 relative">
        <SelectBox />
      </div>
      <div className="col-span-3 relative">
        <IconTextField Icon={PlusIcon} fieldName="Amt" identifier="name" />
      </div>
      <div className="col-span-2 relative">
        <SelectBox />
      </div>
      <div className="col-span-5 border-b-4 rounded-sm dark:border-neutral-700"></div>
      <div className="flex gap-x-2 col-span-5">
        <div className="grow">
          <IconTextField Icon={PlusIcon} fieldName="Name" identifier="name" />
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="14"
            buttonName="deleteRecipe"
            action={() => console.log("delete")}
          />
        </div>
      </div>
      <div className="col-span-5 relative">
        <SelectBox />
      </div>
      <div className="col-span-3 relative">
        <IconTextField Icon={PlusIcon} fieldName="Amt" identifier="name" />
      </div>
      <div className="col-span-2 relative">
        <SelectBox />
      </div>
      <div className="col-span-5 border-b-4 rounded-sm dark:border-neutral-700"></div>
      <div className="flex gap-x-2 col-span-5">
        <div className="grow">
          <IconTextField Icon={PlusIcon} fieldName="Name" identifier="name" />
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="14"
            buttonName="deleteRecipe"
            action={() => console.log("delete")}
          />
        </div>
      </div>
      <div className="col-span-5 relative">
        <SelectBox />
      </div>
      <div className="col-span-3 relative">
        <IconTextField Icon={PlusIcon} fieldName="Amt" identifier="name" />
      </div>
      <div className="col-span-2 relative">
        <SelectBox />
      </div>
      <div className="col-span-5 border-b-4 rounded-sm dark:border-neutral-700"></div>
      <div className="col-span-5   h-12 inline-flex border-r-none items-center justify-between px-3 dark:bg-neutral-700 bg-neutral-200 transition-all duration-300 rounded-r-2xl   rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  ">
        <h4 className="text-xl dark:text-neutral-100 ">Add Ingredient</h4>
        <PlusCircleIcon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default IngredientSection;
