import { Transition } from "@headlessui/react";

import { useState } from "react";

import CustomTextInput from "../forms/CustomTextInput";
import MultiSelectBox from "../forms/MultiSelectBox";
import IngredientSection from "./IngredientsSection";
import StepSection from "./StepSection";
import ComboBoxCustom from "../forms/Combobox";
import LoadingButton from "../buttons/LoadingButton";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { v4 } from "uuid";

const RecipeForm = () => {
  const [show, setShow] = useState(false);
  const recipeValues = {
    name: "",
    category: { id: "Sauces", value: "Sauces" },
    allergens: undefined,
    yieldAmt: "",
    yieldUnit: { id: "g", value: "Grams" },
    ingredients: [
      {
        id: v4(),
        ingredient: "",
        qty: "",
        unit: "",
        linkId: "",
        linkRecipe: "",
      },
    ],
    steps: [""],
  };

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
            <CustomTextInput
              fieldName="Recipe Name"
              identifier="recipeName"
              defaultValue={recipeValues.name}
            />
          </div>
          <div>
            <ComboBoxCustom
              name="category"
              placeholder="Category"
              allowCustom
              initValue={recipeValues.category}
              options={[
                { id: "allRecipes", value: "All Recipes" },
                { id: "sauces", value: "Sauces" },
              ]}
            />
          </div>
          <div className="grid grid-cols-6 gap-x-2  ">
            <div className="col-span-2">
              <CustomTextInput
                fieldName="Yield"
                type="number"
                identifier="yieldAmt"
                defaultValue={recipeValues.yieldAmt}
              />
            </div>
            <div className="relative col-span-4">
              <ComboBoxCustom
                name="yieldUnit"
                placeholder="Unit"
                allowCustom
                initValue={recipeValues.yieldUnit}
                options={[
                  { id: "g", value: "Grams" },
                  { id: "kg", value: "Kilograms" },
                  { id: "c", value: "Cups" },
                ]}
              />
            </div>
          </div>
          <div className="relative col-span-6">
            <MultiSelectBox
              name="allergies"
              initalValue={recipeValues.allergens}
            />
          </div>
        </div>
        <IngredientSection ingredientList={recipeValues.ingredients} />
        <StepSection show={show} stepsList={recipeValues.steps} />
        <LoadingButton
          loading={false}
          type="submit"
          buttonName="addRecipe"
          buttonText="Add Recipe"
          loadingText="Adding..."
          Icon={PlusCircleIcon}
        />
      </div>
    </Transition>
  );
};

export default RecipeForm;
