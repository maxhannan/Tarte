import { Dialog } from "@headlessui/react";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { Label } from "@radix-ui/react-label";
import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Image, ImageIcon } from "lucide-react";
import { useState } from "react";
import IconButton from "~/components/buttons/IconButton";

import LoadingButton from "~/components/buttons/LoadingButton";
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

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {" "}
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="w-full max-w-md bg-neutral-100   rounded-xl p-4">
            <div className="  carousel rounded-box  border border-neutral-200 dark:border-neutral-700  ">
              <div id="item1" className="carousel-item w-full ">
                <img
                  src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/805c7a1c-cc08-447e-1f19-6c09211c3700/carousel"
                  className="w-full object-scale-down"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div id="item2" className="carousel-item w-full ">
                <img
                  src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/a519da05-e2c7-48e7-dd9f-2cf425bf0d00/carousel"
                  className="w-full object-scale-down"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div id="item3" className="carousel-item w-full ">
                <img
                  src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/26dc6ed7-3023-47cf-4556-6e5c4400cf00/carousel"
                  className="max-w-full h-auto object-scale-down"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div id="item4" className="carousel-item w-full bg-im">
                <img
                  src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/eaedb384-b8ab-4639-bdaf-1c8d3e9efa00/carousel"
                  className="max-w-full h-auto object-scale-down "
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2  ">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
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
