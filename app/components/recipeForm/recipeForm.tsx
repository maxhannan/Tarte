import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  PlusCircleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { TextareaAutosize } from "@mui/base";
import { Fragment, useState } from "react";
import IconButton from "../buttons/IconButton";
import IconTextField from "../forms/IconTextField";

import SelectBox from "../forms/SelectBox";
import IngredientSection from "./IngredientsSection";
import StepSection from "./StepSection";

const RecipeForm = () => {
  const [show, setShow] = useState(false);
  return (
    <Transition
      enter="transition-all transform  ease-in-out  duration-500"
      enterFrom=" opacity-0 translate-y-full "
      enterTo=" opacity-100 translate-y-0"
      leave="transition ease-in duration-400"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      appear
      show
      afterEnter={() => setShow(true)}
    >
      <div className="flex flex-col gap-y-4 mb-32">
        <div className="flex flex-col gap-y-4 ">
          <div className="col-span-5">
            <IconTextField Icon={PlusIcon} fieldName="Name" identifier="name" />
          </div>
          <div className="col-span-5 relative">
            <SelectBox />
          </div>
          <div className="flex gap-x-2 col-span-5">
            <div className=" ">
              <IconTextField
                Icon={PlusIcon}
                fieldName="Yield"
                identifier="name"
              />
            </div>
            <div className="">
              <IconTextField
                Icon={PlusIcon}
                fieldName="Qty"
                identifier="name"
              />
            </div>
          </div>
        </div>

        <IngredientSection />

        <StepSection show={show} />
      </div>
    </Transition>
  );
};

export default RecipeForm;
