import { Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/solid";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { useState } from "react";
import ComboBoxCustom from "~/components/forms/Combobox";
import SearchBar from "~/components/forms/SearchBar";
import SearchAndFilter from "~/components/menus/SearchAndFilter";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";

const MenusLayout = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ pathname: location.pathname });
  const [activeTab, setActiveTab] = useState(
    location.pathname === "/app/menus" ? "Menus" : "Dishes"
  );

  const pageChangeLoading =
    navigation.state === "loading" &&
    navigation.location.pathname.includes("/app/menus");

  console.log(pageChangeLoading);

  if (navigation.state === "loading" && !pageChangeLoading) {
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
            Icon: UserIcon,
            buttonName: "User",
            action: () =>
              submit(null, { action: "/auth/logout", method: "post" }),
          },
        ]}
      />
      <Transition
        enter="transition-all transform  ease-in-out  duration-700"
        enterFrom=" opacity-0 -translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="z-50 relative"
        appear
        show
      >
        <div className="flex flex-2 w-full mb-3 ">
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
      </Transition>
      <div className="mt-3">
        <Outlet />
      </div>
    </>
  );
};

export default MenusLayout;
