import { XMarkIcon } from "@heroicons/react/24/outline";
import IconButton from "../buttons/IconButton";
import CustomTextInput from "../forms/CustomTextInput";

import MenuDishSection from "./menuDishSection";
import type { Option } from "../forms/CategoryBox";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useMatches } from "@remix-run/react";
interface Props {
  handleDelete: (id: string) => void;
  section: Option;
}

const MenuSection = ({ section, handleDelete }: Props) => {
  const [sectionName, setSectionName] = useState("");
  console.log(useMatches());
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
      <MenuDishSection section={sectionName} />
    </>
  );
};

export default MenuSection;
