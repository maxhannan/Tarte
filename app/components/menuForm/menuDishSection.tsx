import { useState } from "react";
import { useRouteData } from "~/hooks/useRouteData";
import LinkRecipeComboBox from "../forms/LinkRecipeBox";
import type { Option } from "../forms/CategoryBox";
import type { FullRecipes } from "~/utils/recipes.server";
import CustomTextInput from "../forms/CustomTextInput";
import { UnitsList } from "~/utils/CodedLists";
import ComboBoxCustom from "../forms/Combobox";
import IconButton from "../buttons/IconButton";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MenuDishSection = () => {
  const recipes = useRouteData("routes/app/menus.add") as FullRecipes;
  const [selectedLink, setSelectedLink] = useState<Option | null>(null);
  return (
    <>
      <div className="flex gap-x-2 col-span-11 col-start-2">
        <div className="grow">
          <LinkRecipeComboBox
            name="recipeLink"
            placeholder="Link a Dish"
            selected={selectedLink}
            setSelected={setSelectedLink}
            options={recipes!.map((r) => ({ id: r.id, value: r.name }))}
          />
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="12"
            buttonName="deleteRecipe"
            action={() => console.log(1)}
          />
        </div>
      </div>

      <div className="col-span-5  col-start-2">
        <CustomTextInput
          fieldName="Amt"
          identifier="ingredientAmt"
          type="number"
          required={false}
        />
      </div>
      <div className="col-span-6 relative ">
        <ComboBoxCustom
          name="ingredientUnit"
          placeholder="Unit"
          allowCustom
          options={UnitsList}
        />
      </div>
    </>
  );
};

export default MenuDishSection;
