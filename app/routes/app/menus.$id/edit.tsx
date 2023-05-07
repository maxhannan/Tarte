import {
  ArrowPathIcon,
  ArrowRightCircleIcon,
  CheckCircleIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  useNavigate,
  useNavigation,
  Form,
  useActionData,
} from "@remix-run/react";
import { useEffect } from "react";
import SlideUpTransition from "~/components/animations/slideUp";
import LoadingButton from "~/components/buttons/LoadingButton";
import NotesSection from "~/components/dishForm/NotesSection";
import ComboBoxCustom from "~/components/forms/Combobox";
import CustomTextInput from "~/components/forms/CustomTextInput";
import MenuSections from "~/components/menuForm/menuSections";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";
import { useRouteData } from "~/hooks/useRouteData";
import { getUser } from "~/utils/auth.server";
import type { DishSummaries, FullMenu } from "~/utils/menus.server";
import { createMenu, deleteMenu, extractMenu } from "~/utils/menus.server";
import { getDishes } from "~/utils/menus.server";

export const loader: LoaderFunction = async ({ params }) => {
  const dishes = await getDishes();
  if (!dishes) return [];
  return dishes as DishSummaries;
};

export const action: ActionFunction = async ({ request, params }) => {
  const data = await request.formData();
  const newMenu = extractMenu(data);

  const user = await getUser(request);
  if (params.id && newMenu && user) {
    await deleteMenu(params.id);
    const savedMenu = await createMenu(newMenu, user?.id);
    if (savedMenu) {
      return savedMenu.id;
    }
    return null;
  }
  return null;
};

const EditMenu = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const menu = useRouteData("routes/app/menus.$id") as FullMenu;
  const data = useActionData();
  console.log(data);

  useEffect(() => {
    if (data !== undefined) {
      navigate(`/app/menus/${data}`, { replace: true });
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
  if (!menu) {
    return navigate("/app/menus");
  }
  return (
    <div className="mb-24 container mx-auto max-w-4xl">
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
              loading: navigation.state === "submitting",
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
            <LoadingButton
              loading={navigation.state === "submitting"}
              type="submit"
              buttonName="createDish"
              buttonText={"Update Menu"}
              loadingText={"Updating..."}
              Icon={ArrowPathIcon}
            />
          </div>
        </SlideUpTransition>
      </Form>
    </div>
  );
};

export default EditMenu;
