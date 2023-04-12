import { Transition } from "@headlessui/react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import MenuSummary from "~/components/menuComponents/MenuSummary";
import { getDishes } from "~/utils/menus.server";
import type { DishSummaries } from "~/utils/menus.server";
export const loader: LoaderFunction = async () => {
  const dishes = await getDishes();

  return dishes;
};

const DishesPage = () => {
  const dishes = useLoaderData() as DishSummaries;
  const navigate = useNavigate();
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
    </Transition>
  );
};

export default DishesPage;
