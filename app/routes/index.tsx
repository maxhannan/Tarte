import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import IconTextField from "~/components/forms/IconTextField";
import AppBar from "~/components/navigation/AppBar";
import BottomNav from "~/components/navigation/BottomNav";

export default function Index() {
  return (
    <div className="h-screen bg-neutral-200 dark:bg-neutral-800 py-20 px-3">
      <AppBar />
      <div className="container max-w-2xl mx-auto flex  gap-2 ">
        <div className=" grow">
          <IconTextField
            Icon={MagnifyingGlassIcon}
            fieldName="Search For Beakers"
            identifier="beakers"
          />
        </div>
        <div className=" flex items-center">
          <button
            type="button"
            className="  text-neutral-700 border border-neutral-400 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:neutral-blue-500 dark:neutral-blue-500 dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500"
          >
            <AdjustmentsHorizontalIcon className="w-6 h-6" />
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
