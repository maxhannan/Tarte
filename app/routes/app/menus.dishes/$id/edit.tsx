import {
  CheckCircleIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Form,
  useActionData,
  useFetcher,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import DishForm from "~/components/dishForm/DishForm";
import AppBar from "~/components/navigation/AppBar";
import { useRouteData } from "~/hooks/useRouteData";
import { extractDish, updateDish } from "~/utils/menus.server";
import type { FullDish } from "~/utils/menus.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { getRecipes } from "~/utils/recipes.server";
import type { FullRecipes } from "~/utils/recipes.server";
import { useEffect, useRef, useState } from "react";
import type { FormEventHandler } from "react";
import { uploadImage } from "~/utils/images";

export const loader: LoaderFunction = async () => {
  const recipes = await getRecipes();

  return recipes;
};

export const action: ActionFunction = async ({ request, params }) => {
  const dishId = params.id;
  const form = await request.formData();
  const newDish = extractDish(form);
  const savedDish = await updateDish(dishId!, newDish);
  console.log({ savedDish });

  return dishId;
};

const EditDish = () => {
  const navigate = useNavigate();
  const recipes = useLoaderData() as FullRecipes;
  const dish = useRouteData("routes/app/menus.dishes/$id") as FullDish;
  const navigation = useNavigation();
  const data = useActionData();

  const fetcher = useFetcher();
  const formRef = useRef<HTMLFormElement>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const submit = useSubmit();

  const [imageList, setImageList] = useState<string[]>(
    dish && dish.images ? dish.images : []
  );
  const [deleteImageList, setDeleteImageList] = useState<string[]>([]);

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

  const handleDeleteRecipe = async () => {
    const data = new FormData();
    data.set("id", dish!.id);
    submit(data, { method: "delete", action: "/app/menus/dishes/deletedish" });
  };

  useEffect(() => {
    if (data !== undefined) {
      navigate(`/app/menus/dishes/${data}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  console.log({ dish });
  return (
    <div className="mb-24">
      <Form
        method="post"
        encType="multipart/form-data"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <AppBar
          page="Edit Dish"
          textSize="text-4xl"
          buttons={[
            {
              Icon: TrashIcon,
              buttonName: "Delete",

              action: () => handleDeleteRecipe(),
            },
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
              action: () => navigate(-1),
            },
          ]}
        />
        <DishForm
          recipes={recipes}
          dish={dish}
          imageList={imageList}
          handleDeleteImage={handleDeleteImage}
          formLoading={imageLoading}
        />
      </Form>
    </div>
  );
};

export default EditDish;
