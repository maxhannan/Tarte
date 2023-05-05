import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

import type { ActionFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useFetcher,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import type { FormEventHandler } from "react";
import AppBar from "~/components/navigation/AppBar";
import RecipeForm from "~/components/recipeForm/recipeForm";
import { useRouteData } from "~/hooks/useRouteData";
import { uploadImage } from "~/utils/images";
import { extractRecipe, updateRecipe } from "~/utils/recipes.server";
import type { CompleteRecipe } from "~/utils/recipes.server";

export const action: ActionFunction = async ({ request, params }) => {
  console.log(params.id);
  const recipeId = params.id;
  const form = await request.formData();

  const newRecipe = extractRecipe(form);
  const savedRecipe = await updateRecipe(recipeId!, newRecipe);
  console.log({ savedRecipe });
  return recipeId;
};

const EditRecipePage = () => {
  const recipe = useRouteData("routes/app/recipes/$id") as CompleteRecipe;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const fetcher = useFetcher();
  const data = useActionData();
  const formRef = useRef<HTMLFormElement>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const submit = useSubmit();

  const [imageList, setImageList] = useState<string[]>(
    recipe && recipe.images ? recipe.images : []
  );
  const [deleteImageList, setDeleteImageList] = useState<string[]>([]);
  const loading =
    navigation.state === "submitting" || navigation.state === "loading";

  const handleDeleteImage = (path: string) => {
    setDeleteImageList([...deleteImageList, path]);
    setImageList((imageList) => imageList.filter((image) => image !== path));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setImageLoading(true);
    if (deleteImageList.length > 0) {
      const data = new FormData();
      data.set("deleted", JSON.stringify(deleteImageList));
      fetcher.submit(data, { action: "/app/ImageLink", method: "delete" });
    }
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const Images = formData.getAll("uploadedImage") as File[];
      console.log({ Images });
      if (Images.length > 0 && Images[0].size > 0) {
        const savedImages = await uploadImage(Images);

        formData.set(
          "imageLinks",
          JSON.stringify([...savedImages, ...imageList])
        );
      } else {
        formData.set("imageLinks", JSON.stringify(imageList));
      }

      setImageLoading(false);
      submit(formData, { method: "post" });
    }
  };

  useEffect(() => {
    if (data !== undefined) {
      navigate(`/app/recipes/${data}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="container mx-auto max-w-2xl">
      <Form method="post" ref={formRef} onSubmit={handleSubmit}>
        <AppBar
          page={`Edit Recipe`}
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
              action: () =>
                navigate(`/app/recipes/${recipe!.id}`, { replace: true }),
            },
          ]}
        />

        <RecipeForm
          recipe={recipe}
          imageList={imageList}
          handleDeleteImage={handleDeleteImage}
          formLoading={imageLoading}
        />
      </Form>
    </div>
  );
};

export default EditRecipePage;
