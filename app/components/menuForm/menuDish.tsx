import { XMarkIcon } from "@heroicons/react/24/outline";
import IconButton from "../buttons/IconButton";

import LinkRecipeComboBox from "../forms/LinkRecipeBox";
import { useState } from "react";
import type { Option } from "../forms/CategoryBox";
import { useRouteData } from "~/hooks/useRouteData";
import type { DishSummaries } from "~/utils/menus.server";
import type { Dish } from "./menuDishSection";

interface Props {
  handleDelete: (id: string) => void;
  dish: Dish;
  section: string;
}

const MenuDish = ({ dish, handleDelete, section }: Props) => {
  let dishes = useRouteData("routes/app/menus.add") as DishSummaries;
  const editDishes = useRouteData("routes/app/menus.$id/edit") as DishSummaries;
  console.log({ dishes, editDishes });
  if (!dishes && editDishes) {
    dishes = editDishes;
  }
  const [selectedLink, setSelectedLink] = useState<Option | null>(
    dish.linkRecipe
  );

  return (
    <>
      <div className="flex gap-x-2 col-span-11 col-start-2 relative">
        <div className="grow relative">
          <input type="hidden" name="dishSection" value={section} />
          <LinkRecipeComboBox
            name="dishLink"
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

      <div className="col-span-11 col-start-2 border-b-4 rounded-sm dark:border-neutral-700"></div>
    </>
  );
};

export default MenuDish;
