import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useNavigate, useNavigation } from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import LoadingButton from "~/components/buttons/LoadingButton";
import NotesSection from "~/components/dishForm/NotesSection";
import ComboBoxCustom from "~/components/forms/Combobox";
import CustomTextInput from "~/components/forms/CustomTextInput";
import MenuSections from "~/components/menuForm/menuSections";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";
import { getUser } from "~/utils/auth.server";
import { createMenu, extractMenu, getDishes } from "~/utils/menus.server";

export const loader: LoaderFunction = async () => {
  const dishes = await getDishes();
  return dishes;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const data = await extractMenu(form);
  const user = await getUser(request);
  const savedMenu = await createMenu(data, user!.id);
  if (savedMenu) {
    return redirect(`/app/menus/${savedMenu.id}`);
  }
  return null;
};

const AddMenuPage = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  }
  return (
    <div className="mb-24">
      <Form method="post">
        <AppBar
          page="Add a Menu"
          textSize="text-4xl"
          buttons={[
            {
              Icon: CheckCircleIcon,
              buttonName: "Submit",
              loading: navigation.state === "submitting",
              type: "submit",
              action: () => console.log("Saving..."),
            },
            {
              Icon: XMarkIcon,
              buttonName: "User",
              action: () => navigate("/app/menus", { replace: true }),
            },
          ]}
        />
        <SlideUpTransition>
          <div className="flex flex-col gap-3 mt-2 relative">
            <CustomTextInput
              fieldName="Menu Name"
              identifier="menuName"
              required
            />
            <ComboBoxCustom
              name="service"
              placeholder="Select Service"
              options={[
                { id: "breakfast", value: "Breakfast" },
                { id: "brunch", value: "Brunch" },
                { id: "lunch", value: "Lunch" },
                { id: "dinner", value: "Dinner" },
              ]}
              allowCustom
            />
            <MenuSections />
            <NotesSection show />
            <LoadingButton
              loading={navigation.state === "submitting"}
              type="submit"
              buttonName="addMenu"
              buttonText="Add Menu"
              loadingText="Adding..."
              Icon={PlusCircleIcon}
            />
          </div>
        </SlideUpTransition>
      </Form>
    </div>
  );
};

export default AddMenuPage;
