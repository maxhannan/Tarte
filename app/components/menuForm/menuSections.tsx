import { PlusIcon } from "@heroicons/react/24/solid";
import MenuSection from "./menuSection";
import { useState } from "react";
import type { Option } from "../forms/CategoryBox";
import { v4 } from "uuid";

import type { FullSection } from "~/utils/menus.server";

interface Props {
  menuSections?: FullSection[];
}

const MenuSections = ({ menuSections }: Props) => {
  const [sections, setSections] = useState<Option[]>(
    menuSections ? menuSections.map((s) => ({ id: s!.id, value: s!.name })) : []
  );

  const addSection = () => {
    setSections([...sections, { id: v4(), value: "" }]);
  };

  const handleDelete = (id: string) => {
    setSections((sections) => sections.filter((s) => s.id !== id));
  };

  return (
    <div className="grid grid-cols-5  gap-y-4 gap-x-2 w-full  z-20">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow h-14   inline-flex items-center border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 rounded-r-2xl   pl-3 font-light rounded-l-md rounded-bl-2xl text-lg text-neutral-800 dark:text-neutral-200  ">
          <h4 className="text-3xl  ">Sections</h4>
        </div>
      </div>
      {sections.length > 0 &&
        sections.map((s) => (
          <MenuSection
            section={s}
            handleDelete={handleDelete}
            key={s.id}
            dishes={
              menuSections
                ? menuSections.filter((section) => section!.id === s.id)[0]
                    ?.dishes
                : null
            }
          />
        ))}

      <button
        onClick={addSection}
        type="button"
        className="col-span-5   h-12 inline-flex border-r-none items-center dark:hover:text-neutral-700 justify-between px-3 dark:bg-neutral-900 bg-neutral-100 hover:bg-neutral-700 border dark:border-neutral-700 border-neutral-300 border-dashed hover:text-neutral-200 hover:dark:bg-neutral-200  transition-all duration-300 rounded-r-2xl   rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  "
      >
        <h4 className="text-xl  ">Add Section</h4>
        <PlusIcon className="h-7 w-7" />
      </button>
    </div>
  );
};

export default MenuSections;
