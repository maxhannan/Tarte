import { Transition } from "@headlessui/react";

import { useState } from "react";

import CustomTextInput from "../forms/CustomTextInput";
import MultiSelectBox from "../forms/MultiSelectBox";
import SelectBox from "../forms/SelectBox";
import IngredientSection from "./IngredientsSection";
import StepSection from "./StepSection";
import ComboBoxCustom from "../forms/Combobox";

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
            <CustomTextInput fieldName="Recipe Name" identifier="name" />
          </div>
          <div className="">
            <ComboBoxCustom
              name="category"
              placeholder="Category"
              allowCustom
              options={[
                { id: "allRecipes", value: "All Recipes" },
                { id: "sauces", value: "Sauces" },
              ]}
            />
          </div>
          <div className="grid grid-cols-6 gap-x-2 gap-y-4">
            <div className="col-span-2">
              <CustomTextInput fieldName="Yield" identifier="name" />
            </div>
            <div className="relative col-span-4">
              <ComboBoxCustom
                name="yieldUnit"
                placeholder="Unit"
                allowCustom
                options={[
                  { id: "g", value: "Grams" },
                  { id: "kg", value: "Kilograms" },
                  { id: "c", value: "Cups" },
                ]}
              />
            </div>
            <div className="relative col-span-6">
              <MultiSelectBox />
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
