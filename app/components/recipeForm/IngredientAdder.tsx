import { XMarkIcon } from "@heroicons/react/24/solid";
import IconButton from "../buttons/IconButton";
import CustomTextInput from "../forms/CustomTextInput";

import SelectBox from "../forms/SelectBox";
import ComboBoxCustom from "../forms/Combobox";

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
            size="12"
            buttonName="deleteRecipe"
            action={() => console.log("delete")}
          />
        </div>
      </div>
      <div className="col-span-5 relative">
        <ComboBoxCustom />
      </div>
      <div className="col-span-2 ">
        <CustomTextInput fieldName="Amt" identifier="a" />
      </div>
      <div className="col-span-3  relative ">
        <ComboBoxCustom />
      </div>
      <div className="col-span-5 border-b-4 rounded-sm dark:border-neutral-700"></div>
    </div>
  );
};

export default IngredientAdder;
