import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import IconButton from "../buttons/IconButton";
import CustomTextInput from "../forms/CustomTextInput";
import IngredientSection from "../recipeForm/IngredientsSection";

import MenuDishSection from "./menuDishSection";
import type { Option } from "../forms/CategoryBox";

interface Props {
  handleDelete: (id: string) => void;
  section: Option;
}

const MenuSection = ({ section, handleDelete }: Props) => {
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
            action={() => handleDelete(section.id)}
          />
        </div>
      </div>
      <MenuDishSection />
    </>
  );
};

export default MenuSection;
