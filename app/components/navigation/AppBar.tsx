import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "../buttons/IconButton";

import type { buttonProps } from "../buttons/IconButton";
import SlideDownTransition from "../animations/slideDown";

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
    <SlideDownTransition>
      <nav className=" flex py-3  mx-auto max-h-full items-center justify-between  duration-300 bg-neutral-100 dark:bg-neutral-900   w-full top-0 left-0  ">
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
                type={b.type}
                action={b.action}
                buttonName={b.buttonName}
                loading={b.loading}
              />
            ))}
        </div>
      </nav>
    </SlideDownTransition>
  );
};

export default AppBar;
