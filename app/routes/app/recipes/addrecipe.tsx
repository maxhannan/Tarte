import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  PlusCircleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { TextareaAutosize } from "@mui/base";
import { Fragment } from "react";
import IconButton from "~/components/buttons/IconButton";
import IconTextField from "~/components/forms/IconTextField";
import SelectBox from "~/components/forms/SelectBox";
import AppBar from "~/components/navigation/AppBar";
import RecipeForm from "~/components/recipeForm/recipeForm";

const AddRecipe = () => {
  return (
    <div>
      <AppBar
        page="Add a Recipe"
        buttons={[
          {
            Icon: CheckCircleIcon,
            buttonName: "Submit",
            action: () => console.log("Save"),
          },
        ]}
      />

      <RecipeForm />
    </div>
  );
};

export default AddRecipe;
