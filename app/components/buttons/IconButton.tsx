import type { ElementType } from "react";
import Spinner from "../status/smallSpinner";

export interface buttonProps {
  Icon: ElementType;
  buttonName: string;
  type?: "button" | "submit" | "reset";
  action: () => void;
  size?: string;
  loading?: boolean;
}

const IconButton = ({
  Icon,
  buttonName,
  type = "button",
  action,
  size = "12",
  loading = false,
}: buttonProps) => {
  return (
    <button
      onClick={action}
      type={type}
      className={`text-neutral-700 h-${size}  w-${size} bg-opacity-50 dark:bg-opacity-50  justify-center bg-neutral-200 border dark:border-neutral-700 border-neutral-300 dark:bg-neutral-800 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-r-xl rounded-l-md rounded-bl-xl text-sm p-2.5 text-center inline-flex items-center dark:text-neutral-500  dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500`}
    >
      {loading ? <Spinner size={8} /> : <Icon className="w-7 h-7" />}
      <span className="sr-only">{buttonName}</span>
    </button>
  );
};

export default IconButton;
