import { Listbox, Transition } from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import IconTextField from "~/components/forms/IconTextField";
import SelectBox from "~/components/forms/SelectBox";
import RecipeFeed from "~/components/recipefeed/RecipeFeed";

const RecipesPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
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
              fieldName=""
              identifier="beakers"
            />
          </div>
          <div className=" flex items-center ">
            <button
              type="button"
              onClick={() => setOpenFilter(!openFilter)}
              className={`${
                openFilter
                  ? "rounded-r-2xl rounded-l-md rounded-tl-2xl "
                  : "rounded-r-2xl rounded-l-md rounded-bl-2xl "
              } duration-300 text-neutral-700 transition-all bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium   text-sm p-2.5 text-center inline-flex items-center dark:text-neutral-500  dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500`}
            >
              {openFilter ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <AdjustmentsHorizontalIcon className="w-7 h-7" />
              )}
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </Transition>
      <Transition
        show={openFilter}
        className="z-30 relative "
        enter="transition-all ease-linear duration-500  overflow-hidden"
        enterFrom="transform opacity-0 max-h-0"
        enterTo="transform opacity-100 max-h-96"
        leave="transition-all ease-linear duration-200 overflow-hidden"
        leaveFrom="transform opacity-100 max-h-96"
        leaveTo="transform opacity-0 max-h-0"
      >
        <SelectBox />
        <SelectBox />
      </Transition>

      <div className="pb-16  ">
        <RecipeFeed />
      </div>
    </>
  );
};

export default RecipesPage;