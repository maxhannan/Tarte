import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import MenuSummary from "~/components/menuComponents/MenuSummary";
import { DishSummaries, getDishes } from "~/utils/menus.server";

export const loader: LoaderFunction = async () => {
  const dishes = await getDishes();

  return dishes;
};

const DishesPage = () => {
  const dishes = useLoaderData() as DishSummaries;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      {dishes?.map((d) => (
        <MenuSummary
          key={d.id}
          category={`${d._count.recipes} Recipe${
            d._count.recipes !== 1 ? "s" : ""
          } `}
          user={d.author!.firstName[0] + d.author!.lastName[0]}
          name={d.name}
          id={d.id}
        />
      ))}
    </div>
  );
};

export default DishesPage;
