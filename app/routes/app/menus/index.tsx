import { Transition } from "@headlessui/react";
import type { LoaderFunction } from "@remix-run/node";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import MenuSummary from "~/components/menuComponents/MenuSummary";
import SearchAndFilter from "~/components/menus/SearchAndFilter";
import Spinner from "~/components/status/smallSpinner";
import { MenuSummaries, getMenus } from "~/utils/menus.server";

export const loader: LoaderFunction = async () => {
  const menus = await getMenus();

  return menus;
};

const MenusPage = () => {
  const menus = useLoaderData() as MenuSummaries;
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageChangeLoading =
    navigation.state === "loading" &&
    navigation.location.pathname !== "/app/menus";

  console.log(pageChangeLoading);

  if (navigation.state === "loading" && pageChangeLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  }
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
      <div className="flex flex-col gap-4">
        <SearchAndFilter
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          categories={["Breakfast", "Lunch"]}
        />
        <div className="flex flex-col gap-2">
          {navigation.state === "loading" && !pageChangeLoading ? (
            <div className="flex items-center justify-center">
              <Spinner size={14} />
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </Transition>
  );
};

export default MenusPage;
