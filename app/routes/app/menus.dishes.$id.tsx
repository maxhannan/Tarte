import { Transition } from "@headlessui/react";
import {
  ArrowLongRightIcon,
  ArrowUturnLeftIcon,
  PencilSquareIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import type { LoaderFunction } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import MenuDishSummary from "~/components/menuComponents/MenuDishSummary";
import AppBar from "~/components/navigation/AppBar";
import RecipeSummary from "~/components/recipefeed/RecipeSummary";
import Spinner from "~/components/status/smallSpinner";
import { getDishById } from "~/utils/menus.server";
import type { FullDish } from "~/utils/menus.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (params.id) {
    const dish = await getDishById(params.id);
    return dish;
  }
  return null;
};

const DishPage = () => {
  const dish = useLoaderData() as FullDish;
  const navigate = useNavigate();
  const navigation = useNavigation();

  const combinedAllergens = [
    ...new Set(dish?.recipes?.map((r) => r.allergens).flat(1)),
  ];

  if (navigation.state === "loading")
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  console.log({ dish });
  return (
    <div className="mb-24">
      <AppBar
        page={""}
        textSize="text-2xl"
        buttons={[
          {
            Icon: PencilSquareIcon,
            buttonName: "Edit Recipe",
            action: () => console.log("edit", { replace: true }),
          },
          {
            Icon: ScaleIcon,
            buttonName: "Language",
            action: () => console.log("addRecipe"),
          },
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "User",
            action: () => navigate(-1),
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
        <div className="text-2xl  gap-3 bg-neutral-200 dark:bg-neutral-800 px-4 w-full items-center flex justify-between dark:text-neutral-200 p-4 mb-4 text-neutral-600 rounded-r-2xl font-light rounded-l-md rounded-bl-2xl">
          <div>{dish!.name}</div>
        </div>
        <div className="flex mt-4 gap-2 flex-wrap">
          {combinedAllergens.length > 0 &&
            combinedAllergens.map((a) => (
              <div
                key={a}
                className=" bg-violet-500 p-2 px-3 rounded-r-2xl font-light rounded-l-md rounded-bl-2xl text-base text-neutral-100 dark:text-neutral-100 "
              >
                {a}
              </div>
            ))}
        </div>
        <div className="text-xl mt-4  gap-3 bg-neutral-200 dark:bg-neutral-800 px-4 w-full items-center flex justify-between dark:text-neutral-200 p-4 mb-4 text-neutral-600 rounded-r-2xl font-light rounded-l-md rounded-bl-2xl">
          <div>Components</div>
        </div>
        <div className="flex flex-col mt-4 gap-2">
          {dish?.recipes.map((r) => (
            <RecipeSummary
              name={r.name}
              id={r.id}
              key={r.id}
              category={r.category}
              user={r!.author!.firstName[0] + r!.author!.lastName[0]}
            />
          ))}
        </div>
        <div className="text-xl bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200  p-4 mt-4 text-neutral-700 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl ">
          Menus
          <div className="flex gap-3 flex-wrap r mt-2">
            {dish?.Menus.map((m) => (
              <div key={m.id}>
                <Link to={`/app/menus/${m.id}`}>
                  <div className=" flex items-center gap-2  bg-violet-500 hover:bg-violet-600 p-2 px-4 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-base text-neutral-100 dark:text-neutral-100 ">
                    {m.name} <ArrowLongRightIcon className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default DishPage;
