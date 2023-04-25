import { XMarkIcon } from "@heroicons/react/24/outline";
import IconButton from "../buttons/IconButton";
import CustomTextInput from "../forms/CustomTextInput";

import MenuDishSection from "./menuDishSection";
import type { Option } from "../forms/CategoryBox";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { DishSummaries } from "~/utils/menus.server";

interface Props {
  handleDelete: (id: string) => void;
  section: Option;
  dishes?: DishSummaries;
}

const MenuSection = ({ section, handleDelete, dishes }: Props) => {
  const [sectionName, setSectionName] = useState(
    section.value ? section.value : ""
  );

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSectionName(e.target.value);
  };

  return (
    <>
      <div className="flex gap-x-2 col-span-5 ">
        <CustomTextInput
          fieldName="Section Name"
          identifier="sectionName"
          defaultValue={section.value}
          changeHandler={changeHandler}
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
      <MenuDishSection section={sectionName} dishesList={dishes} />
    </>
  );
};

export default MenuSection;
