import { Transition } from "@headlessui/react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import Accordion from "~/components/menuComponents/Accordion";
import AppBar from "~/components/navigation/AppBar";
import { FullMenu, getMenuById } from "~/utils/menus.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (params.id) {
    const menu = await getMenuById(params.id);
    return menu;
  } else {
    return null;
  }
};

const MenuPage = () => {
  const navigate = useNavigate();
  const menu = useLoaderData() as FullMenu;
  const navigation = useNavigation();
  console.log({ menu });
  return (
    <div className=" mb-24">
      <AppBar
        page={""}
        buttons={[
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "Add Recipe",
            action: () => navigate(-1),
            loading: navigation.state === "loading",
          },
        ]}
      />
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <div className="text-2xl border border-neutral-300 dark:border-neutral-700 gap-3 bg-neutral-200 dark:bg-neutral-800 px-4 w-full items-center flex justify-between dark:text-neutral-200 p-4 mb-4 text-neutral-600 rounded-r-2xl font-light rounded-l-md rounded-bl-3xl">
          <div>{menu!.name}</div>
        </div>

        <Accordion />
      </Transition>
    </div>
  );
};

export default MenuPage;
