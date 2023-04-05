import { ArrowUturnLeftIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";

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
