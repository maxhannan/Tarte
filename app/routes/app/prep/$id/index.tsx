import { Dialog, Transition } from "@headlessui/react";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { Label } from "@radix-ui/react-label";
import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Image, ImageIcon } from "lucide-react";
import { Fragment, useState } from "react";
import IconButton from "~/components/buttons/IconButton";

import LoadingButton from "~/components/buttons/LoadingButton";
import Carousel from "~/components/displays/Carousel";
import CustomTextInput from "~/components/forms/CustomTextInput";
import AppBar from "~/components/navigation/AppBar";
import { Input } from "~/components/ui/input";
import { uploadImage } from "~/utils/images.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const response = await uploadImage(formData);
  console.log(response);
  return response;
};
const PrepListPage = () => {
  const navigation = useNavigation();
  const response = useActionData();
  const [isOpen, setIsOpen] = useState(false);
  console.log(response);
  return (
    <div>
      <AppBar
        page={"Prep"}
        buttons={[
          {
            Icon: DocumentPlusIcon,
            buttonName: "Add Recipe",
            action: () => console.log("addRecipe"),
          },
        ]}
      />
      <Carousel isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>
        <IconButton
          Icon={ImageIcon}
          buttonName="openModa"
          action={() => setIsOpen(!isOpen)}
        />
      </div>

      <Form method="post" encType="multipart/form-data">
        <div className="grid w-full max-w-sm items-center gap-1 text-neutral-200 mb-2">
          <Label htmlFor="picture" className="text-neutral-200">
            Picture
          </Label>
          <Input
            id="picture"
            type="file"
            accept="image/png, image/jpeg"
            name="uploadedImage"
            className="file:text-neutral-200  p-0 file:text-base inline-flex file:h-full text-base border-neutral-700 file:bg-neutral-800 file:hover:bg-neutral-700 file:mr-2 rounded-xl file:rounded-l-xl"
          />
          <p
            className=" text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>

        <LoadingButton
          Icon={Image}
          buttonName="Upload"
          buttonText="Upload"
          type="submit"
          loading={navigation.state === "submitting"}
          loadingText="uploading..."
        />
      </Form>
    </div>
  );
};

export default PrepListPage;
