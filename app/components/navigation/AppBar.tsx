import { DocumentPlusIcon } from "@heroicons/react/24/solid";
import IconButton from "../buttons/IconButton";

const AppBar = () => {
  return (
    <nav className="bg-neutral-100 pl-4 pr-3 h-16 dark:bg-neutral-800  fixed w-full z-50 top-0 left-0 border-b border-neutral-300 dark:border-neutral-600">
      <div className="container max-w-2xl  flex flex-wrap h-16 items-center justify-between  mx-auto">
        <h1 className="text-xl  text-violet-500 dark:text-violet-400 ">
          Recipes
        </h1>
        <IconButton Icon={DocumentPlusIcon} buttonName="Add a Recipe" />
      </div>
    </nav>
  );
};

export default AppBar;
