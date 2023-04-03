import { Transition } from "@headlessui/react";
import { DocumentPlusIcon, UserIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import IconButton, { buttonProps } from "../buttons/IconButton";

const AppBar = ({
  page,
  textSize = "text-4xl",
  buttons,
}: {
  page: string;
  textSize?: string;
  buttons?: buttonProps[];
}) => {
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
      <nav className=" flex py-4 max-w-2xl mx-auto max-h-full items-center justify-between  duration-300 bg-neutral-100 dark:bg-neutral-950   w-full z-50 top-0 left-0  ">
        <h1
          className={`${textSize} mr-6 text-neutral-700 dark:text-neutral-100`}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </h1>

        <div className="grow flex justify-end gap-2">
          {buttons &&
            buttons.map((b) => (
              <IconButton
                key={b.buttonName}
                Icon={b.Icon}
                action={b.action}
                buttonName={b.buttonName}
              />
            ))}
        </div>
      </nav>
    </Transition>
  );
};

export default AppBar;
