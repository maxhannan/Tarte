import { Disclosure, Transition } from "@headlessui/react";
import {
  ArrowLongRightIcon,
  ArrowUturnLeftIcon,
  ChevronUpIcon,
  PencilSquareIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import type { LoaderFunction } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import Chip from "~/components/forms/Chip";
import AppBar from "~/components/navigation/AppBar";
import RecipeStep from "~/components/recipePage/RecipeStep";

import RecipeSummary from "~/components/recipefeed/RecipeSummary";
import Spinner from "~/components/status/smallSpinner";
import { getDishById } from "~/utils/menus.server";
import type { FullDish } from "~/utils/menus.server";

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
