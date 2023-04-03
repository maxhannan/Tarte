import { Transition } from "@headlessui/react";
import { PlusIcon, ScaleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import IconButton from "../buttons/IconButton";
import CustomTextInput from "../forms/CustomTextInput";
import IconTextField from "../forms/IconTextField";
import SelectBox from "../forms/SelectBox";

const IngredientAdder = () => {
  return (
    <div className="grid grid-cols-5  gap-y-4 gap-x-2 w-full col-span-5 ">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow">
          <CustomTextInput fieldName="Ingredient Name" identifier="name" />
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
      <div className="col-span-2 ">
        <CustomTextInput fieldName="Amt" identifier="a" />
      </div>
      <div className="col-span-3  relative ">
        <SelectBox />
      </div>
      <div className="col-span-5 border-b-4 rounded-sm dark:border-neutral-700"></div>
    </div>
  );
};

export default IngredientAdder;
