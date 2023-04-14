import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { ActionFunction } from "@remix-run/node";

import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import { useEffect } from "react";

import AppBar from "~/components/navigation/AppBar";
import RecipeForm from "~/components/recipeForm/recipeForm";
import Spinner from "~/components/status/smallSpinner";

import { getUser } from "~/utils/auth.server";
import { createRecipe, extractRecipe } from "~/utils/recipes.server";

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request);
  const form = await request.formData();
  const newRecipe = extractRecipe(form);

  if (user) {
    const savedRecipe = await createRecipe(newRecipe, user.id);
    console.log({ savedRecipe });

    return savedRecipe.id;
  }

  return undefined;
};

const AddRecipe = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const loading =
    navigation.state === "submitting" || navigation.state === "loading";

  useEffect(() => {
    if (data !== undefined) {
      navigate(`/app/recipes/${data}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (navigation.state === "loading") {
    return (
      <div className="h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  }

  return (
    <div>
      <Form method="post">
        <AppBar
          page="Add a Recipe"
          textSize="text-3xl"
          buttons={[
            {
              Icon: CheckCircleIcon,
              buttonName: "Submit",
              type: "submit",
              action: () => console.log("Saving..."),
              loading: loading,
            },
            {
              Icon: XMarkIcon,
              buttonName: "User",
              action: () => navigate("/app/recipes"),
            },
          ]}
        />

        <RecipeForm />
      </Form>
    </div>
  );
};

export default AddRecipe;
