import type { LoaderFunction } from "@remix-run/node";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";

import SearchAndFilter from "~/components/menus/SearchAndFilter";
import RecipeSummary from "~/components/recipefeed/RecipeSummary";
import Spinner from "~/components/status/smallSpinner";
import { getMenus } from "~/utils/menus.server";
import type { MenuSummaries } from "~/utils/menus.server";

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

  if (pageChangeLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <Spinner size={14} />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 mb-24">
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
          <SlideUpTransition>
            <div className="grid z-0 relative grid-flow-row  auto-rows-max gap-y-2 max-w-2xl mx-auto  ">
              {menus?.map((m) => (
                <RecipeSummary
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
          </SlideUpTransition>
        )}
      </div>
    </div>
  );
};

export default MenusPage;
