import BottomNavButton from "./BottomNavButton";
import { useLocation } from "@remix-run/react";
import { useState } from "react";
import {
  BeakerIcon,
  FolderIcon,
  CalculatorIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
const BottomNav = () => {
  const location = useLocation().pathname.split("/")[2];
  const [active, setActive] = useState<string>(location);

  const handleNav = (path: string) => {
    setActive(path);
  };
  return (
    <div className="fixed z-50 w-80 h-16 max-w-md -translate-x-1/2 rounded-lg  bottom-6 left-1/2 border shadow-md  bg-neutral-50   dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600">
      <div className="grid h-full max-w-lg   mx-auto grid-cols-4">
        <BottomNavButton
          active={active}
          handleNav={handleNav}
          path="prep"
          Icon={BeakerIcon}
        />
        <BottomNavButton
          active={active}
          handleNav={handleNav}
          path="recipes"
          Icon={FolderIcon}
        />
        <BottomNavButton
          active={active}
          handleNav={handleNav}
          path="convert"
          Icon={CalculatorIcon}
        />
        <BottomNavButton
          active={active}
          handleNav={handleNav}
          path="profile"
          Icon={UserCircleIcon}
        />
      </div>
    </div>
  );
};

export default BottomNav;
