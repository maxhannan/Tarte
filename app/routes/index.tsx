import { Transition } from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import IconTextField from "~/components/forms/IconTextField";
import AppBar from "~/components/navigation/AppBar";
import BottomNav from "~/components/navigation/BottomNav";
import RecipeFeed from "~/components/recipefeed/RecipeFeed";
export const loader = () => {
  return redirect("/app/recipes");
};
export default function Index() {
  return <div className=" px-4"></div>;
}
