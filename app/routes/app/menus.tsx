import { UserIcon } from "@heroicons/react/24/solid";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { useState } from "react";
import ComboBoxCustom from "~/components/forms/Combobox";
import SearchBar from "~/components/forms/SearchBar";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";

const MenusLayout = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("Menus");

  const pageChangeLoading =
    navigation.state === "loading" &&
    !navigation.location.pathname.includes("/app/menus");

  if (navigation.state === "loading" && pageChangeLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
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
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 justify-start w-full items-center">
          <SearchBar value="" handleChange={(e) => console.log(e)} />
        </div>
        <div>
          <div className="flex gap-2 grow w-full  ">
            <div className="flex flex-2 w-full ">
              <ComboBoxCustom
                name="Category"
                placeholder="Service"
                options={[{ id: "1", value: "Brunch" }]}
              />
            </div>
            <div className="flex flex-2 ">
              <button
                onClick={() => {
                  setActiveTab("Menus");
                  navigate("/app/menus");
                }}
                className={` bg-neutral-200 border border-r-0 border-neutral-300 text-lg justify-center rounded-tl-md rounded-bl-xl  px-4 p-2 inline-flex  h-12 items-center   sm:hover:bg-neutral-300  transition-all duration-200 dark:bg-neutral-800  dark:border-neutral-700  ${
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
                className={` bg-neutral-200 border  border-neutral-300 text-lg justify-center rounded-r-xl   px-4 p-2 inline-flex  h-12 items-center   sm:hover:bg-neutral-300  transition-all duration-200 dark:bg-neutral-800  dark:border-neutral-700  ${
                  activeTab === "Dishes"
                    ? "text-violet-500 dark:bg-neutral-900 "
                    : "bg-opacity-50 text-neutral-700   dark:text-neutral-200"
                }`}
              >
                Dishes
              </button>
            </div>
          </div>
        </div>
        {navigation.state === "loading" ? (
          <div className=" h-32 flex items-center justify-center">
            <Spinner size={14} />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
};

export default MenusLayout;
