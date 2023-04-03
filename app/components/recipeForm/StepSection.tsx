import { Transition } from "@headlessui/react";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { TextareaAutosize } from "@mui/base";
import { Fragment } from "react";
import IconButton from "../buttons/IconButton";
import RecipeStep from "./RecipeStep";

const StepSection = ({ show }: { show: boolean }) => {
  return (
    <div className="grid grid-cols-5  gap-y-4 gap-x-2 w-full  z-20">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow h-14 border-l-8 border-l-neutral-400 inline-flex items-center  dark:bg-neutral-200 bg-neutral-700 transition-all duration-300 rounded-r-2xl   pl-3 font-light rounded-l-md rounded-bl-2xl text-lg text-neutral-100 dark:text-neutral-800  ">
          <h4 className="text-3xl  "> Steps</h4>
        </div>
      </div>
      <RecipeStep show={show} />
      <div className="col-span-5   h-12 inline-flex border-r-none items-center justify-between px-3 dark:bg-neutral-700 bg-neutral-200 transition-all duration-300 rounded-r-2xl   rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  ">
        <h4 className="text-xl dark:text-neutral-100 ">Add Step</h4>
        <PlusCircleIcon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default StepSection;
