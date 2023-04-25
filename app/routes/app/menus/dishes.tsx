import type { LoaderFunction } from "@remix-run/node";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import SearchAndAllergens from "~/components/menus/SearchAndAllergens";

import RecipeSummary from "~/components/recipefeed/RecipeSummary";
import Spinner from "~/components/status/smallSpinner";
import { getDishes } from "~/utils/menus.server";
import type { DishSummaries } from "~/utils/menus.server";

function filterDishes(
  dishes: DishSummaries,
  search?: string | null,
  allergies?: string[] | null
) {
  if (!search && !allergies) return dishes;
  let filteredDishes = dishes;
  if (search && filteredDishes) {
    filteredDishes = filteredDishes.filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (allergies && filteredDishes) {
    filteredDishes = filteredDishes.filter(
      (d) => d.allergens.filter((a) => allergies.includes(a)).length === 0
    );
  }
  return filteredDishes;
}

export const loader: LoaderFunction = async ({ request }) => {
  const dishes = await getDishes();
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const search = params.get("search");
  const allergies = params.get("allergies")?.split(",");
  let dishList = filterDishes(dishes, search, allergies);
  return dishList;
};

const DishesPage = () => {
  const dishes = useLoaderData() as DishSummaries;
  const [searchParams, setSearchParams] = useSearchParams();

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
    <div className="flex flex-col gap-3">
      <SearchAndAllergens
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div className="flex flex-col gap-3 ">
        {navigation.state === "loading" && !pageChangeLoading ? (
          <div className="flex items-center justify-center">
            <Spinner size={14} />
          </div>
        ) : (
          <SlideUpTransition>
            <div className="grid z-0 relative grid-flow-row  auto-rows-max gap-y-2  mx-auto  ">
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
            </div>
          </SlideUpTransition>
        )}
      </div>
    </div>
  );
};

export default DishesPage;
