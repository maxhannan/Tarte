import type { ElementType } from "react";

interface buttonProps {
  handleNav: (path: string) => void;
  active: string;
  Icon: ElementType;
  path: string;
}
const BottomNavButton = ({ handleNav, active, Icon, path }: buttonProps) => {
  return (
    <button
      data-tooltip-target="tooltip-home"
      type="button"
      name={path}
      onClick={() => handleNav(path)}
      className="inline-flex flex-col items-center justify-center px-5 rounded-l-lg   group"
    >
      <div
        className={
          " transition-all duration-300 w-14 h-14 flex items-center justify-center rounded-lg rounded-r-2xl rounded-l-md rounded-bl-2xl  " +
          (active === path
            ? "dark:bg-neutral-800 bg-neutral-700 text-pink-300 dark:text-pink-400"
            : "dark:bg-neutral-900 bg-neutral-100 text-neutral-700 dark:text-neutral-600")
        }
      >
        <Icon className={"  w-8 h-8 mb-1   "} />
        <span className="sr-only">{path}</span>
      </div>
    </button>
  );
};

export default BottomNavButton;
