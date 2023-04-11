import { UserIcon } from "@heroicons/react/24/solid";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import ComboBoxCustom from "~/components/forms/Combobox";
import SearchBar from "~/components/forms/SearchBar";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";

const MenusLayout = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();

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
        page={location.pathname === "/app/menus/dishes" ? "Dishes" : "Menus"}
        buttons={[
          {
            Icon: UserIcon,
            buttonName: "User",
            action: () =>
              submit(null, { action: "/auth/logout", method: "post" }),
          },
        ]}
      />
      <div className="flex flex-col gap-2">
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
                onClick={() => navigate("/app/menus")}
                className="bg-neutral-200 border border-r-0 border-neutral-300 text-lg justify-center rounded-tl-md rounded-bl-xl  px-4 p-2 inline-flex  h-12 items-center  text-violet-700 hover:bg-violet-400 hover:text-neutral-100 transition-all duration-200"
              >
                Menus
              </button>
              <button
                onClick={() => navigate("/app/menus/dishes")}
                className="bg-neutral-200 bg-opacity-50 border border-neutral-300 text-lg justify-center  px-4 p-2 rounded-r-xl inline-flex  h-12 items-center  text-neutral-700 hover:bg-violet-400 hover:text-neutral-100 transition-all duration-200"
              >
                Dishes
              </button>
            </div>
          </div>
        </div>
        {navigation.state === "loading" ? (
          <div className="h-screen flex items-center justify-center">
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
