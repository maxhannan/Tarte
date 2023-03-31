import {
  DocumentPlusIcon,
  FolderIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import IconButton from "../buttons/IconButton";

const AppBar = () => {
  return (
    <nav className="bg-gray-50 px-4 h-16 dark:bg-neutral-800  fixed w-full z-50 top-0 left-0 border-b border-neutral-200 dark:border-neutral-600">
      <div className="container flex flex-wrap h-16 items-center justify-between mx-auto">
        <h1 className="text-xl text-neutral-800 dark:text-neutral-400 ">
          Recipes
        </h1>
        <div className="flex justify-between ">
          <IconButton Icon={DocumentPlusIcon} buttonName="Add a Recipe" />
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
