import { DocumentPlusIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import SlideDownTransition from "~/components/animations/slideDown";

import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";

const MenusLayout = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(
    location.pathname === "/app/menus" ? "Menus" : "Dishes"
  );

  useEffect(() => {
    setActiveTab(location.pathname === "/app/menus" ? "Menus" : "Dishes");
  }, [location]);

  const pageChangeLoading =
    navigation.state === "loading" &&
    !navigation.location.pathname.includes("/app/menus");

  if (pageChangeLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size={14} />
      </div>
    );
  }

  return (
    <>
      <AppBar
        page={activeTab}
        buttons={[
          {
            Icon: DocumentPlusIcon,
            buttonName: "Add Recipe",
            action: () => navigate("/app/recipes/addrecipe"),
          },
          {
            Icon: UserIcon,
            buttonName: "User",
            action: () =>
              submit(null, { action: "/auth/logout", method: "post" }),
          },
        ]}
      />
      <SlideDownTransition>
        <div className="flex flex-2 w-full ">
          <button
            onClick={() => {
              setActiveTab("Menus");
              navigate("/app/menus");
            }}
            className={` bg-neutral-200 border grow border-r-0 border-neutral-300 text-lg justify-center rounded-tl-md rounded-bl-xl  px-4 p-2 inline-flex  h-12 items-center   sm:hover:bg-neutral-300  transition-all duration-200 dark:bg-neutral-800  dark:border-neutral-700  ${
              activeTab === "Menus"
                ? "text-violet-500 dark:bg-neutral-900 "
                : "bg-opacity-50 text-neutral-700 dark:text-neutral-200"
            }`}
          >
            Menus
          </button>
          <button
            onClick={() => {
              setActiveTab("Dishes");
              navigate("/app/menus/dishes");
            }}
            className={` bg-neutral-200 border grow  border-neutral-300 text-lg justify-center rounded-r-xl   px-4 p-2 inline-flex  h-12 items-center   sm:hover:bg-neutral-300  transition-all duration-200 dark:bg-neutral-800  dark:border-neutral-700  ${
              activeTab === "Dishes"
                ? "text-violet-500 dark:bg-neutral-900 "
                : "bg-opacity-50 text-neutral-700   dark:text-neutral-200"
            }`}
          >
            Dishes
          </button>
        </div>
      </SlideDownTransition>
      <div className="mt-2">
        <Outlet />
      </div>
    </>
  );
};

export default MenusLayout;
