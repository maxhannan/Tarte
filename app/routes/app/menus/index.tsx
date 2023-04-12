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
  );
};

export default MenusPage;
