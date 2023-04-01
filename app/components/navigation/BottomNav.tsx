import BottomNavButton from "./BottomNavButton";
import { useLocation } from "@remix-run/react";
import { useState } from "react";
import {
  BeakerIcon,
  FolderIcon,
  CalculatorIcon,
} from "@heroicons/react/24/solid";
const BottomNav = () => {
  const location = useLocation().pathname.split("/")[2];
  const [active, setActive] = useState<string>(location);

  const handleNav = (path: string) => {
    setActive(path);
  };
  return (
    <div className="fixed z-50 w-52 h-16 max-w-md -translate-x-1/2 rounded-3xl  bottom-6 left-1/2  shadow-md  bg-neutral-100  border  dark:bg-neutral-900 border-neutral-200 dark:border-neutral-600">
      <div className="grid h-full max-w-lg   mx-auto grid-cols-3">
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
      </div>
    </div>
  );
};

export default BottomNav;
