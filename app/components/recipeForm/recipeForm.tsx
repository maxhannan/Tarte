import { Transition } from "@headlessui/react";

import { useState } from "react";

import CustomTextInput from "../forms/CustomTextInput";
import MultiSelectBox from "../forms/MultiSelectBox";
import IngredientSection from "./IngredientsSection";
import StepSection from "./StepSection";
import ComboBoxCustom from "../forms/Combobox";
import LoadingButton from "../buttons/LoadingButton";
import { ArrowPathIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { useRouteData } from "~/hooks/useRouteData";
import { useNavigation } from "@remix-run/react";
import type { CompleteRecipe } from "~/utils/recipes.server";
import { UnitsList } from "~/utils/CodedLists";
import ImageInput from "../forms/ImageInput";
import { XMarkIcon } from "@heroicons/react/24/outline";

const RecipeForm = ({
  recipe,
  formLoading = false,
}: {
  recipe?: CompleteRecipe;
  formLoading?: boolean;
}) => {
  const [show, setShow] = useState(false);
  const { categories } = useRouteData("routes/app/recipes") as {
    categories: string[];
  };

  const formatRecipe = (recipe: CompleteRecipe) => {
    const category = { id: recipe!.category, value: recipe!.category };
    const yieldUnit = { id: recipe!.yieldUnit, value: recipe!.yieldUnit };
    const ingredients = recipe?.ingredients.map((i) => ({
      ...i,
      linkRecipe: i.linkRecipe
        ? { id: i.linkRecipe.id, value: i.linkRecipe.name }
        : null,
    }));
    return { ...recipe, category, yieldUnit, ingredients };
  };
  const recipeValues = recipe
    ? formatRecipe(recipe)
    : {
        name: "",
        category: undefined,
        allergens: undefined,
        yieldAmt: "",
        yieldUnit: undefined,
        ingredients: [],
        steps: [],
      };
  const navigation = useNavigation();
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
      <div className="flex flex-col gap-y-2 mb-32 ">
        <div className="flex flex-col gap-y-2 ">
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
              options={categories.map((c) => ({
                id: c,
                value: c,
              }))}
            />
          </div>
          <ImageInput />
          {recipe && recipe.images.length > 0 && (
            <div className="w-full flex flex-wrap  items-center justify-start gap-2 py-2 ">
              {recipe?.images.map((image) => (
                <div key={image} className="relative ">
                  <div className="relative  w-[80px] h-[56px] overflow-hidden  rounded-xl ">
                    <img
                      className=" object-cover"
                      src={image.replace("carousel", "icon")}
                      alt="Default avatar"
                    />
                  </div>
                  <span className="-top-1 -right-1 absolute  w-5 h-5 bg-red-500 rounded-full flex justify-center items-center">
                    <XMarkIcon className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          )}
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
                options={UnitsList}
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
        {recipe ? (
          <LoadingButton
            loading={
              navigation.state === "submitting" ||
              navigation.state === "loading"
            }
            type="submit"
            buttonName="updateRecipe"
            buttonText="Update Recipe"
            loadingText="Updating..."
            Icon={ArrowPathIcon}
          />
        ) : (
          <LoadingButton
            loading={
              navigation.state === "submitting" ||
              navigation.state === "loading" ||
              formLoading
            }
            type="submit"
            buttonName="addRecipe"
            buttonText="Add Recipe"
            loadingText="Adding..."
            Icon={PlusCircleIcon}
          />
        )}
      </div>
    </Transition>
  );
};

export default RecipeForm;
