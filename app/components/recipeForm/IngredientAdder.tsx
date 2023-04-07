import { XMarkIcon } from "@heroicons/react/24/solid";
import IconButton from "../buttons/IconButton";
import CustomTextInput from "../forms/CustomTextInput";

import ComboBoxCustom from "../forms/Combobox";
import type { Ingredient } from "./IngredientsSection";
import LinkRecipeComboBox from "../forms/LinkRecipeBox";
import { useState } from "react";

interface Props {
  handleDelete: (id: string) => void;
  ingredient: Ingredient;
}

const IngredientAdder = ({ handleDelete, ingredient }: Props) => {
  const linkOption =
    ingredient.linkId && ingredient.linkRecipe
      ? { id: ingredient.linkId, value: ingredient.linkRecipe }
      : null;

  const [selectedLink, setSelectedLink] = useState(linkOption);

  console.log(selectedLink);

  return (
    <div className="grid grid-cols-5  gap-y-4 gap-x-2 w-full col-span-5 ">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow">
          <CustomTextInput
            fieldName="Ingredient Name"
            identifier="ingredientName"
            defaultValue={selectedLink?.value || ingredient.ingredient}
            disabled={selectedLink ? true : false}
          />
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="12"
            buttonName="deleteRecipe"
            action={() => handleDelete(ingredient.id)}
          />
        </div>
      </div>
      <div className="col-span-5 relative">
        <LinkRecipeComboBox
          name="recipeLink"
          placeholder="Link a recipe"
          selected={selectedLink}
          setSelected={setSelectedLink}
          options={[
            { id: "fhjglkjsa", value: "Saffron Aioli" },
            { id: "gfjskl;", value: "Celeriac Soup" },
            { id: "cgdjsa;k", value: "Pita Bread" },
          ]}
        />
      </div>
      <div className="col-span-2 ">
        <CustomTextInput
          fieldName="Amt"
          identifier="ingredientAmt"
          type="number"
          defaultValue={ingredient.qty}
        />
      </div>
      <div className="col-span-3  relative ">
        <ComboBoxCustom
          name="ingredientUnit"
          placeholder="Unit"
          initValue={{ id: ingredient.unit, value: ingredient.unit }}
          allowCustom
          options={[
            { id: "Grams", value: "Grams" },
            { id: "Kilograms", value: "Kilograms" },
            { id: "Cups", value: "Cups" },
          ]}
        />
      </div>
      <div className="col-span-5 border-b-4 rounded-sm dark:border-neutral-700"></div>
    </div>
  );
};

export default IngredientAdder;
