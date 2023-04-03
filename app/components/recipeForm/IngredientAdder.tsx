import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import IconButton from "../buttons/IconButton";
import IconTextField from "../forms/IconTextField";
import SelectBox from "../forms/SelectBox";

const IngredientAdder = () => {
  return (
    <>
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
    </>
  );
};

export default IngredientAdder;
