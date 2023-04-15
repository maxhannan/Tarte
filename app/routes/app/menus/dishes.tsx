import { Transition } from "@headlessui/react";
import type { LoaderFunction } from "@remix-run/node";
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import MenuSummary from "~/components/menuComponents/MenuSummary";
import SearchAndFilter from "~/components/menus/SearchAndFilter";
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
  const navigate = useNavigate();
  const navigation = useNavigation();
  const pageChangeLoading =
    navigation.state === "loading" &&
    navigation.location.pathname !== "/app/menus/dishes";

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
      {" "}
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
            </Transition>
          )}
        </div>
      </div>
    </Transition>
  );
};

export default DishesPage;
