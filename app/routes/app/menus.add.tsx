import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { LoaderFunction } from "@remix-run/node";
import { Form, useNavigate, useNavigation } from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import ComboBoxCustom from "~/components/forms/Combobox";
import CustomTextInput from "~/components/forms/CustomTextInput";
import MenuSections from "~/components/menuForm/menuSections";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";
import { getRecipes } from "~/utils/recipes.server";

export const loader: LoaderFunction = async () => {
  const recipes = await getRecipes();
  return recipes;
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
              type: "button",
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
          </div>
        </SlideUpTransition>
      </Form>
    </div>
  );
};

export default AddMenuPage;
