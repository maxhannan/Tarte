import { XMarkIcon } from "@heroicons/react/24/outline";
import IconButton from "../buttons/IconButton";
import CustomTextInput from "../forms/CustomTextInput";
import IngredientSection from "../recipeForm/IngredientsSection";

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
      <div className="col-span-5"></div>
    </>
  );
};

export default MenuSection;
