import { UserIcon } from "@heroicons/react/24/solid";
import {
  Outlet,
  useLocation,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";

const MenusLayout = () => {
  const submit = useSubmit();
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
      {navigation.state === "loading" ? (
        <div className="h-screen flex items-center justify-center">
          <Spinner size={14} />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default MenusLayout;
