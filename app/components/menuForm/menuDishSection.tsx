import { useState } from "react";
import { useRouteData } from "~/hooks/useRouteData";
import LinkRecipeComboBox from "../forms/LinkRecipeBox";
import type { Option } from "../forms/CategoryBox";
import type { FullRecipes } from "~/utils/recipes.server";
import CustomTextInput from "../forms/CustomTextInput";
import { UnitsList } from "~/utils/CodedLists";
import ComboBoxCustom from "../forms/Combobox";
import IconButton from "../buttons/IconButton";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuDish from "./menuDish";
import { v4 } from "uuid";

export interface Dish {
  id: string;
  qty: string | undefined;
  unit: string | undefined;

  linkRecipe: { id: string; value: string } | null;
}

const MenuDishSection = () => {
  const [dishes, setDishes] = useState<Dish[] | []>([]);

  const addDish = () => {
    const newDish = {
      id: v4(),
      qty: undefined,
      unit: undefined,

      linkRecipe: null,
    };
    setDishes([...dishes, newDish]);
  };

  const handleDelete = (id: string) => {
    setDishes((dishes) => dishes.filter((d) => d.id !== id));
  };

  return (
    <div className="grid grid-cols-12 col-span-5 gap-x-2 gap-y-4">
      {dishes.length > 0 &&
        dishes.map((d) => (
          <MenuDish handleDelete={handleDelete} dish={d} key={d.id} />
        ))}

      <button
        onClick={addDish}
        type="button"
        className="col-span-11 col-start-2   h-12 inline-flex border-r-none items-center dark:hover:text-neutral-700 justify-between px-3 dark:bg-neutral-900 bg-neutral-100 hover:bg-neutral-700 border dark:border-neutral-700 border-neutral-300 border-dashed hover:text-neutral-200 hover:dark:bg-neutral-200  transition-all duration-300 rounded-r-2xl   rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  "
      >
        <h4 className="text-xl  ">Add Dish</h4>
        <PlusIcon className="h-7 w-7" />
      </button>
    </div>
  );
};

export default MenuDishSection;