import BottomNavButton from "./BottomNavButton";
import { useNavigate } from "@remix-run/react";

import {
  FolderIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  PaperClipIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
const BottomNav = ({
  page,
  setPage,
}: {
  page: string;
  setPage: (path: string) => void;
}) => {
  const navigate = useNavigate();
  const handleNav = (path: string) => {
    setPage(path);
    navigate(`/app/${path}`);
  };
  return (
    <div className="fixed z-50 w-full h-24  rounded-xl   bottom-0 left-0 bg-neutral-100    dark:bg-neutral-950 border-neutral-200 dark:border-neutral-600">
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
          Icon={FolderIcon}
        />
        <BottomNavButton
          active={page}
          handleNav={handleNav}
          path="convert"
          Icon={CalculatorIcon}
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
