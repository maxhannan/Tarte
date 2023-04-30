import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Image } from "lucide-react";

import LoadingButton from "~/components/buttons/LoadingButton";
import CustomTextInput from "~/components/forms/CustomTextInput";
import AppBar from "~/components/navigation/AppBar";
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
      <Form method="post" encType="multipart/form-data">
        <CustomTextInput
          type="file"
          fieldName="image upload"
          identifier="uploadedImage"
        />
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
