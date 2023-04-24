import type { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getMenuById } from "~/utils/menus.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (params.id) {
    const menu = await getMenuById(params.id);
    return menu;
  } else {
    return null;
  }
};

const MenuParent = () => {
  return <Outlet />;
};

export default MenuParent;
