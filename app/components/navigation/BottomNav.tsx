import BottomNavButton from "./BottomNavButton";
import { useLocation } from "@remix-run/react";
import { useState } from "react";
import {
  BeakerIcon,
  FolderIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  PaperClipIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
const BottomNav = () => {
  const location = useLocation().pathname.split("/")[2];
  const [active, setActive] = useState<string>(location);

  const handleNav = (path: string) => {
    setActive(path);
  };
  return (
    <div className="fixed z-50 w-full h-20  rounded-xl   bottom-0 left-0 shadow-opacity shadow-slate-50  bg-neutral-100    dark:bg-neutral-900 border-neutral-200 dark:border-neutral-600">
      <div className="grid h-full max-w-lg    mx-auto grid-cols-5 gap-0">
        <BottomNavButton
          active={active}
          handleNav={handleNav}
          path="prep"
          Icon={ClipboardDocumentCheckIcon}
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
          path="order"
          Icon={PaperClipIcon}
        />
        <BottomNavButton
          active={active}
          handleNav={handleNav}
          path="chat"
          Icon={ChatBubbleBottomCenterIcon}
        />
      </div>
    </div>
  );
};

export default BottomNav;
