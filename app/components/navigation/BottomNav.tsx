import BottomNavButton from "./BottomNavButton";
import { useLocation, useNavigate } from "@remix-run/react";

import { BiDish } from "react-icons/bi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import {
  FolderIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  PaperClipIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
import { useEffect } from "react";
const BottomNav = ({
  page,
  setPage,
}: {
  page: string;
  setPage: (path: string) => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string) => {
    const pathString = `/app/${path}`;
    if (location.pathname === pathString) {
      setPage(path);
      return;
    }
    setPage(path);
    navigate(pathString);
  };
  return (
    <div className="fixed z-50 w-full h-24  rounded-xl   bottom-0 left-0 bg-neutral-100    dark:bg-neutral-900 border-neutral-200 dark:border-neutral-600">
      <div className="grid h-full max-w-lg pb-6   mx-auto grid-cols-5 gap-0">
        <BottomNavButton
          active={page}
          handleNav={handleNav}
          path="prep"
          Icon={ClipboardDocumentCheckIcon}
        />
        <BottomNavButton
          active={page}
          handleNav={handleNav}
          path="recipes"
          Icon={GiForkKnifeSpoon}
        />
        <BottomNavButton
          active={page}
          handleNav={handleNav}
          path="convert"
          Icon={BiDish}
        />

        <BottomNavButton
          active={page}
          handleNav={handleNav}
          path="order"
          Icon={PaperClipIcon}
        />
        <BottomNavButton
          active={page}
          handleNav={handleNav}
          path="chat"
          Icon={ChatBubbleBottomCenterIcon}
        />
      </div>
    </div>
  );
};

export default BottomNav;
