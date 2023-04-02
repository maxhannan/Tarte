import { DocumentPlusIcon } from "@heroicons/react/24/solid";
import type { ElementType } from "react";

export interface buttonProps {
  Icon: ElementType;
  buttonName: string;
  type?: "button" | "submit" | "reset";
  action: () => void;
}

const IconButton = ({
  Icon,
  buttonName,
  type = "button",
  action,
}: buttonProps) => {
  return (
    <button
      onClick={action}
      type="button"
      className="  text-neutral-700 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-r-2xl rounded-l-md rounded-bl-2xl text-sm p-2.5 text-center inline-flex items-center dark:text-neutral-500  dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500"
    >
      <Icon className="w-7 h-7" />
      <span className="sr-only">buttonName</span>
    </button>
  );
};

export default IconButton;
