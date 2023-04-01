import { DocumentPlusIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useScroll } from "~/hooks/useScroll";
import IconButton from "../buttons/IconButton";

const AppBar = () => {
  const scrollPosition = useScroll();
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <nav
      className={classNames(
        scrollPosition > 30 ? " shadow-lg" : "border-none  ",
        " transition-all h-16  duration-300 bg-neutral-100 dark:bg-neutral-900 pl-4 pr-3   w-full z-50 top-0 left-0  "
      )}
    >
      <div className="container max-w-2xl  flex flex-wrap h-16 items-center justify-between  mx-auto">
        <h1 className="text-3xl  text-neutral-700 dark:text-neutral-100 ">
          Recipes
        </h1>
        <IconButton Icon={DocumentPlusIcon} buttonName="Add a Recipe" />
      </div>
    </nav>
  );
};

export default AppBar;
