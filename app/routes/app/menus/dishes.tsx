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
import { getDishes } from "~/utils/menus.server";
import type { DishSummaries } from "~/utils/menus.server";

export const loader: LoaderFunction = async ({ request }) => {
  const dishes = await getDishes();
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const search = params.get("search");
  if (search && dishes) {
    return dishes.filter((d) =>
      d.name.toLowerCase().includes(search?.toLowerCase())
    );
  }
  return dishes;
};

const DishesPage = () => {
  const dishes = useLoaderData() as DishSummaries;
  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ dishes });
  const navigation = useNavigation();
  const pageChangeLoading =
    navigation.state === "loading" &&
    navigation.location.pathname !== "/app/menus/dishes";

  console.log(navigation.location?.pathname);

  if (pageChangeLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <Spinner size={14} />
      </div>
    );
  }
  return (
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
          <SlideUpTransition>
            {dishes?.map((d) => (
              <RecipeSummary
                key={d.id}
                category={`${d._count.ingredients} Component${
                  d._count.ingredients !== 1 ? "s" : ""
                } `}
                user={d.author!.firstName[0] + d.author!.lastName[0]}
                name={d.name}
                id={d.id}
              />
            ))}
          </SlideUpTransition>
        )}
      </div>
    </div>
  );
};

export default DishesPage;
