import { Transition } from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import IconTextField from "~/components/forms/IconTextField";
import AppBar from "~/components/navigation/AppBar";
import BottomNav from "~/components/navigation/BottomNav";
import RecipeFeed from "~/components/recipefeed/RecipeFeed";

export default function Index() {
  return (
    <div className=" px-4">
      <AppBar />
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 -translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <div className="container max-w-2xl mx-auto flex  gap-2  mt-2">
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
              className="  text-neutral-700 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-r-2xl rounded-l-md rounded-bl-2xl  text-sm p-2.5 text-center inline-flex items-center dark:text-neutral-500  dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500"
            >
              <AdjustmentsHorizontalIcon className="w-7 h-7" />
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </Transition>
      <div className="pb-16 ">
        <RecipeFeed />
      </div>

      <BottomNav />
    </div>
  );
}
