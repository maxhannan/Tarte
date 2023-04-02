import { Transition } from "@headlessui/react";
import { DocumentPlusIcon, UserIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

const AppBar = ({ page }: { page: string }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition-all transform  ease-in-out  duration-300"
      enterFrom=" opacity-0 -translate-y-full "
      enterTo=" opacity-100 translate-y-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      appear
      show
    >
      <nav className=" flex flex-wrap max-w-2xl mx-auto  h-16 items-center justify-between  duration-300 bg-neutral-100 dark:bg-neutral-900   w-full z-50 top-0 left-0  ">
        <h1 className="text-4xl  text-neutral-700 dark:text-neutral-100 ">
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </h1>

        <div className="grow flex justify-end gap-2">
          <button
            type="button"
            className="  text-neutral-700 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-r-2xl rounded-l-md rounded-bl-2xl text-sm p-2.5 text-center inline-flex items-center dark:text-neutral-500  dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500"
          >
            <DocumentPlusIcon className="w-7 h-7" />
            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className="  text-neutral-700 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-r-2xl rounded-l-md rounded-bl-2xl text-sm p-2.5 text-center inline-flex items-center dark:text-neutral-500  dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500"
          >
            <UserIcon className="w-7 h-7 " />
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </nav>
    </Transition>
  );
};

export default AppBar;
