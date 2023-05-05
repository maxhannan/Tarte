import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import type { FormEventHandler } from "react";
import DishForm from "~/components/dishForm/DishForm";

import AppBar from "~/components/navigation/AppBar";

import Spinner from "~/components/status/smallSpinner";
import { getUser } from "~/utils/auth.server";
import { uploadImage } from "~/utils/images";
import { createDish, extractDish } from "~/utils/menus.server";
import { getRecipes } from "~/utils/recipes.server";
import type { FullRecipes } from "~/utils/recipes.server";

export const loader: LoaderFunction = async () => {
  const recipes = await getRecipes();

  return { recipes };
};

export const action: ActionFunction = async ({ request }) => {
  const dishForm = await request.formData();
  const data = await extractDish(dishForm);
  const user = await getUser(request);

  const savedDish = await createDish(data, user!.id);

  if (savedDish) {
    return savedDish;
  }
  return null;
};

const AddDishPage = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();
  const [imageLoading, setImageLoading] = useState(false);
  const { recipes } = useLoaderData() as {
    recipes: FullRecipes;
  };
  const savedDish = useActionData();

  useEffect(() => {
    if (savedDish !== undefined) {
      navigate(`/app/menus/dishes/${savedDish.id}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedDish]);
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
    <div className="mb-24">
      <Form
        ref={formRef}
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <AppBar
          page="Add a Dish"
          textSize="text-4xl"
          buttons={[
            {
              Icon: CheckCircleIcon,
              buttonName: "Submit",
              type: "submit",
              loading: navigation.state === "submitting" || imageLoading,
              action: () => console.log("Saving..."),
            },
            {
              Icon: XMarkIcon,
              buttonName: "User",
              action: () => navigate("/app/menus/dishes"),
            },
          ]}
        />
        <DishForm recipes={recipes} formLoading={imageLoading} />
      </Form>
    </div>
  );
};

export default AddDishPage;
