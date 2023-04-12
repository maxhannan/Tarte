import { Transition } from "@headlessui/react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MenuSummary from "~/components/menuComponents/MenuSummary";
import { MenuSummaries, getMenus } from "~/utils/menus.server";

export const loader: LoaderFunction = async () => {
  const menus = await getMenus();

  return menus;
};

const MenusPage = () => {
  const menus = useLoaderData() as MenuSummaries;
  console.log({ menus });
  return (
    <Transition
      enter="transition-all transform  ease-in-out  duration-500"
      enterFrom=" opacity-0 translate-y-64 "
      enterTo=" opacity-100 translate-y-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      className="z-0"
      leaveTo="opacity-0"
      appear
      show
    >
      <div className="flex flex-col gap-2">
        {menus?.map((m) => (
          <MenuSummary
            key={m.id}
            category={`${m._count.dishes} Dish${
              m._count.dishes !== 1 ? "es" : ""
            } `}
            user={m.author!.firstName[0] + m.author!.lastName[0]}
            name={m.name}
            id={m.id}
          />
        ))}
      </div>
    </Transition>
  );
};

export default MenusPage;
