import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useNavigation } from "@remix-run/react";

import Spinner from "~/components/status/smallSpinner";
import { getDishById } from "~/utils/menus.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (params.id) {
    const dish = await getDishById(params.id);
    return dish;
  }
  return null;
};

const DishRoute = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );

  return <Outlet />;
};

export default DishRoute;
