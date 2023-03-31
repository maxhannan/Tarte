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
      className="inline-flex flex-col items-center justify-center px-5 rounded-l-lg    group"
    >
      <Icon
        className={
          "transition ease-in-out  w-8 h-8 mb-1   group-hover:text-indigo-500 dark:group-hover:text-indigo-500 " +
          (active === path
            ? "text-indigo-500 scale-110"
            : "text-neutral-600 dark:text-gray-400 ")
        }
      />
      <span className="sr-only">{path}</span>
    </button>
  );
};

export default BottomNavButton;
