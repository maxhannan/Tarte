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
import IconButton from "~/components/buttons/IconButton";

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
    (navigation.state === "loading" &&
      !navigation.location.pathname.includes("/app/menus")) ||
    (navigation.state === "loading" &&
      navigation.location.pathname === "/app/menus/dishes/add");

  if (pageChangeLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size={14} />
      </div>
    );
  }
  const buttons = [
    {
      Icon: DocumentPlusIcon,
      buttonName: "Add Recipe",
      type: "button" as "button" | "submit" | "reset",
      loading: undefined,
      action: () => navigate(`${activeTab === "Dishes" ? "dishes/" : ""}add`),
    },
    {
      Icon: UserIcon,
      buttonName: "User",
      type: "button" as "button" | "submit" | "reset",
      loading: undefined,
      action: () => submit(null, { action: "/auth/logout", method: "post" }),
    },
  ];
  return (
    <>
      <SlideDownTransition>
        <nav className=" flex py-3  mx-auto max-h-full items-center justify-between  duration-300 bg-neutral-100 dark:bg-neutral-900   w-full top-0 left-0  ">
          <div className="flex flex-2 max-w-md ">
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

          <div className="grow flex justify-end gap-2">
            {buttons &&
              buttons.map((b) => (
                <IconButton
                  key={b.buttonName}
                  Icon={b.Icon}
                  type={b.type}
                  action={b.action}
                  buttonName={b.buttonName}
                  loading={b.loading}
                />
              ))}
          </div>
        </nav>
      </SlideDownTransition>

      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default MenusLayout;
