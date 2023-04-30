import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate, useNavigation } from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import Accordion from "~/components/menuComponents/Accordion";
import AppBar from "~/components/navigation/AppBar";
import Spinner from "~/components/status/smallSpinner";
import { useRouteData } from "~/hooks/useRouteData";

import type { FullMenu } from "~/utils/menus.server";

const MenuPage = () => {
  const navigate = useNavigate();
  const menu = useRouteData("routes/app/menus.$id") as FullMenu;
  const navigation = useNavigation();

  console.log({ menu });

  if (navigation.state === "loading")
    return (
      <div className=" mx-auto h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  return (
    <div className=" mb-28 container mx-auto max-w-2xl">
      <AppBar
        page={""}
        buttons={[
          {
            Icon: PencilSquareIcon,
            buttonName: "Edit Recipe",
            action: () => navigate("edit", { replace: true }),
          },
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "goBack",
            action: () => navigate(-1),
          },
        ]}
      />
      <SlideUpTransition>
        <div className="text-2xl border border-neutral-300 dark:border-neutral-700 gap-3 bg-neutral-200 dark:bg-neutral-800 px-4 w-full items-center flex justify-between dark:text-neutral-200 p-4 mb-4 text-neutral-600 rounded-xl font-light ">
          <div>{menu!.name}</div>
        </div>

        {menu && <Accordion menu={menu} />}
      </SlideUpTransition>
    </div>
  );
};

export default MenuPage;
