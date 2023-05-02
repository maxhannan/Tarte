import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ActionFunction, json } from "@remix-run/node";

import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { FormEventHandler, useEffect, useRef, useState } from "react";

import AppBar from "~/components/navigation/AppBar";
import RecipeForm from "~/components/recipeForm/recipeForm";
import Spinner from "~/components/status/smallSpinner";

import { getUser } from "~/utils/auth.server";
import { getUrl, singleUpload, uploadImage } from "~/utils/images";
import { createRecipe, extractRecipe } from "~/utils/recipes.server";

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request);
  const form = await request.formData();

  const newRecipe = await extractRecipe(form);

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
  const formRef = useRef<HTMLFormElement>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const submit = useSubmit();
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (formRef.current) {
      setImageLoading(true);
      const formData = new FormData(formRef.current);
      const Images = formData.getAll("uploadedImage") as File[];
      console.log({ Images });
      if (Images.length > 0 && Images[0].size > 0) {
        const SavedImages = await uploadImage(Images);

        formData.set("imageLinks", JSON.stringify(SavedImages));
      }

      setImageLoading(false);
      submit(formData, { method: "post" });
    }
  };

  return (
    <div className="container mx-auto max-w-2xl">
      <Form
        ref={formRef}
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <AppBar
          page="Add a Recipe"
          textSize="text-3xl"
          buttons={[
            {
              Icon: CheckCircleIcon,
              buttonName: "Submit",
              type: "submit",
              action: () => console.log("Saving..."),
              loading: loading || imageLoading,
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
