import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
import { IMAGE_URL } from "~/utils/images";

interface Props {
  recipes: FullRecipes;
  dish?: FullDish;
  formLoading?: boolean;
  imageList?: string[];
  handleDeleteImage?: (path: string) => void;
}

const DishForm = ({
  recipes,
  dish,
  formLoading = false,
  imageList,
  handleDeleteImage = () => undefined,
}: Props) => {
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
        {imageList && imageList.length > 0 && (
          <div className="w-full flex flex-wrap  items-center justify-start gap-2 py-2 ">
            {imageList.map((image) => (
              <div key={image} className="relative ">
                <div className="relative  w-[80px] h-[56px] overflow-hidden  rounded-xl ">
                  <img
                    className=" object-cover"
                    src={[IMAGE_URL, image, "icon"].join("/")}
                    alt="Default avatar"
                  />
                </div>
                <span
                  onClick={() => handleDeleteImage(image)}
                  className="-top-1 -right-1 absolute  w-5 h-5 bg-red-500 rounded-full flex justify-center items-center hover:bg-red-700 hover:text-neutral-100 transition-all duration-200"
                >
                  <XMarkIcon className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        )}
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
