import { PlusCircleIcon } from "@heroicons/react/24/outline";

import LoadingButton from "../buttons/LoadingButton";
import CustomTextInput from "../forms/CustomTextInput";
import MultiSelectBox from "../forms/MultiSelectBox";
import IngredientSection from "../recipeForm/IngredientsSection";
import StepSection from "../recipeForm/StepSection";
import NotesSection from "./NotesSection";
import type { FullRecipes } from "~/utils/recipes.server";
import { useNavigation } from "@remix-run/react";
import type { FullDish } from "~/utils/menus.server";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import ImageInput from "../forms/ImageInput";

interface Props {
  recipes: FullRecipes;
  dish?: FullDish;
  formLoading?: boolean;
}

const DishForm = ({ recipes, dish, formLoading = false }: Props) => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  console.log({ dish });

  const formatDish = (dish: FullDish) => {
    const ingredients = dish?.ingredients.map((i) => ({
      ...i,
      linkRecipe: i.linkRecipe
        ? { id: i.linkRecipe.id, value: i.linkRecipe.name }
        : null,
    }));
    return { ...dish, ingredients };
  };

  const dishValues = dish
    ? formatDish(dish)
    : {
        name: "",
        allergens: [],
        ingredients: [],
        steps: [],
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
      <div className="flex flex-col gap-3 mt-2 relative">
        <CustomTextInput
          fieldName="Dish Name"
          identifier="dishName"
          required
          defaultValue={dishValues.name}
        />

        <MultiSelectBox
          name="allergies"
          placeholder="Select Allergens"
          initalValue={dishValues.allergens}
        />
        <ImageInput />
        <IngredientSection
          recipesProp={recipes}
          ingredientList={dishValues.ingredients}
          sectionName={"Component"}
        />
        <StepSection show={show} stepsList={dishValues.steps} />
        <NotesSection show={true} />
        <LoadingButton
          loading={navigation.state === "submitting" || formLoading}
          type="submit"
          buttonName="createDish"
          buttonText={dish ? "Update Dish" : "Create Dish"}
          loadingText={dish ? "Updating..." : "Creating..."}
          Icon={PlusCircleIcon}
        />
      </div>
    </Transition>
  );
};

export default DishForm;
