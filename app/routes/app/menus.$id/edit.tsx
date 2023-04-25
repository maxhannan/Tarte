import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { LoaderFunction } from "@remix-run/node";
import { useNavigate, useNavigation, Form } from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import NotesSection from "~/components/dishForm/NotesSection";
import ComboBoxCustom from "~/components/forms/Combobox";
import CustomTextInput from "~/components/forms/CustomTextInput";
import MenuSections from "~/components/menuForm/menuSections";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";
import { useRouteData } from "~/hooks/useRouteData";
import type { DishSummaries, FullMenu } from "~/utils/menus.server";
import { getDishes } from "~/utils/menus.server";
export const loader: LoaderFunction = async ({ params }) => {
  const dishes = await getDishes();
  if (!dishes) return [];
  return dishes as DishSummaries;
};

const EditMenu = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const menu = useRouteData("routes/app/menus.$id") as FullMenu;
  if (navigation.state === "loading") {
    return (
      <div className="h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  }
  if (!menu) {
    return navigate("/app/menus");
  }
  return (
    <div className="mb-24">
      <Form method="post">
        <AppBar
          page="Edit Menu"
          textSize="text-4xl"
          buttons={[
            {
              Icon: CheckCircleIcon,
              buttonName: "Submit",
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
              defaultValue={menu.name}
              required
            />
            <ComboBoxCustom
              name="service"
              placeholder="Select Service"
              initValue={
                menu.service
                  ? { id: menu.service, value: menu.service }
                  : undefined
              }
              options={[
                { id: "breakfast", value: "Breakfast" },
                { id: "brunch", value: "Brunch" },
                { id: "lunch", value: "Lunch" },
                { id: "dinner", value: "Dinner" },
              ]}
              allowCustom
            />
            <MenuSections menuSections={menu.sections} />
            <NotesSection show />
          </div>
        </SlideUpTransition>
      </Form>
    </div>
  );
};

export default EditMenu;
