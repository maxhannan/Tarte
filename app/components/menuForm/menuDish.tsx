import { XMarkIcon } from "@heroicons/react/24/outline";
import recipes from "~/routes/app/recipes";
import { UnitsList } from "~/utils/CodedLists";
import IconButton from "../buttons/IconButton";
import ComboBoxCustom from "../forms/Combobox";
import CustomTextInput from "../forms/CustomTextInput";
import LinkRecipeComboBox from "../forms/LinkRecipeBox";
import { useState } from "react";
import { Option } from "../forms/CategoryBox";
import { useRouteData } from "~/hooks/useRouteData";
import { FullRecipes } from "~/utils/recipes.server";
import { DishSummaries } from "~/utils/menus.server";
import { Dish } from "./menuDishSection";

interface Props {
  handleDelete: (id: string) => void;
  dish: Dish;
}

const MenuDish = ({ dish, handleDelete }: Props) => {
  const dishes = useRouteData("routes/app/menus.add") as DishSummaries;

  const [selectedLink, setSelectedLink] = useState<Option | null>(
    dish.linkRecipe
  );
  console.log({ selectedLink });

  return (
    <>
      <div className="flex gap-x-2 col-span-11 col-start-2">
        <div className="grow">
          <LinkRecipeComboBox
            name="recipeLink"
            placeholder="Link a Dish"
            selected={selectedLink}
            setSelected={setSelectedLink}
            options={dishes!.map((d) => ({ id: d.id, value: d.name }))}
          />
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="12"
            buttonName="deleteRecipe"
            action={() => handleDelete(dish.id)}
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
      </div>{" "}
      <div className="col-span-11 col-start-2 border-b-4 rounded-sm dark:border-neutral-700"></div>
    </>
  );
};

export default MenuDish;
