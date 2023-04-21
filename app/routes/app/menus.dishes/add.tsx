import {
  CheckCircleIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import { useState } from "react";
import SlideUpTransition from "~/components/animations/slideUp";
import LoadingButton from "~/components/buttons/LoadingButton";
import NotesSection from "~/components/dishForm/NotesSection";
import type { Option } from "~/components/forms/CategoryBox";
import CustomTextInput from "~/components/forms/CustomTextInput";
import LinkRecipeComboBox from "~/components/forms/LinkRecipeBox";
import MultiSelectBox from "~/components/forms/MultiSelectBox";
import AppBar from "~/components/navigation/AppBar";
import IngredientSection from "~/components/recipeForm/IngredientsSection";
import StepSection from "~/components/recipeForm/StepSection";
import Spinner from "~/components/status/smallSpinner";
import { extractDish, getMenus } from "~/utils/menus.server";
import type { MenuSummaries } from "~/utils/menus.server";
import { getRecipes } from "~/utils/recipes.server";
import type { FullRecipes } from "~/utils/recipes.server";

export const loader: LoaderFunction = async () => {
  const menus = await getMenus();
  const recipes = await getRecipes();

  return { menus, recipes };
};

export const action: ActionFunction = async ({ request }) => {
  const dishForm = await request.formData();
  const dishSaved = await extractDish(dishForm);
  return dishSaved;
};

const AddDishPage = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const { recipes } = useLoaderData() as {
    recipes: FullRecipes;
  };

  const dishSaved = useActionData();
  console.log({ dishSaved });

  if (navigation.state === "loading") {
    return (
      <div className="h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  }

  return (
    <div className="mb-24">
      <Form method="post">
        <AppBar
          page="Add a Dish"
          textSize="text-4xl"
          buttons={[
            {
              Icon: CheckCircleIcon,
              buttonName: "Submit",
              type: "button",
              action: () => console.log("Saving..."),
            },
            {
              Icon: XMarkIcon,
              buttonName: "User",
              action: () => navigate("/app/menus/dishes"),
            },
          ]}
        />
        <SlideUpTransition>
          <div className="flex flex-col gap-3 mt-2 relative">
            <CustomTextInput
              fieldName="Dish Name"
              identifier="dishName"
              required
            />

            <MultiSelectBox name="allergies" placeholder="Select Allergens" />
            <IngredientSection
              recipesProp={recipes}
              sectionName={"Component"}
            />
            <StepSection show={true} stepsList={[]} />
            <NotesSection show={true} />
            <LoadingButton
              loading={navigation.state === "submitting"}
              type="submit"
              buttonName="createDish"
              buttonText="Create Dish"
              loadingText="Creating..."
              Icon={PlusCircleIcon}
            />
          </div>
        </SlideUpTransition>
      </Form>
    </div>
  );
};

export default AddDishPage;