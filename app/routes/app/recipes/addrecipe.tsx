import { Transition } from "@headlessui/react";
import {
  ArrowUturnLeftIcon,
  CheckCircleIcon,
  PlusCircleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { TextareaAutosize } from "@mui/base";
import { useNavigate } from "@remix-run/react";
import { Fragment } from "react";
import IconButton from "~/components/buttons/IconButton";
import IconTextField from "~/components/forms/IconTextField";
import SelectBox from "~/components/forms/SelectBox";
import AppBar from "~/components/navigation/AppBar";
import RecipeForm from "~/components/recipeForm/recipeForm";

const AddRecipe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar
        page="Add a Recipe"
        textSize="text-3xl"
        buttons={[
          {
            Icon: CheckCircleIcon,
            buttonName: "Submit",
            action: () => console.log("Save"),
          },
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "User",
            action: () => navigate("/app/recipes"),
          },
        ]}
      />

      <RecipeForm />
    </div>
  );
};

export default AddRecipe;
