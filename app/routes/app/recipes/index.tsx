import { Transition } from "@headlessui/react";

import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  DocumentPlusIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";
import { Fragment, useState } from "react";
import ComboBoxCustom from "~/components/forms/Combobox";
import MultiSelectBox from "~/components/forms/MultiSelectBox";

import SearchBar from "~/components/forms/SearchBar";
import SelectBox from "~/components/forms/SelectBox";
import AppBar from "~/components/navigation/AppBar";
import RecipeFeed from "~/components/recipefeed/RecipeFeed";

const RecipesPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        page={"Recipes"}
        buttons={[
          {
            Icon: DocumentPlusIcon,
            buttonName: "Add Recipe",
            action: () => navigate("/app/recipes/addrecipe"),
          },
          {
            Icon: UserIcon,
            buttonName: "User",
            action: () => navigate("/auth"),
          },
        ]}
      />
      <Transition
        enter="transition-all transform  ease-in-out  duration-700"
        enterFrom=" opacity-0 -translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <div className="container max-w-2xl mx-auto flex  gap-2  mt-2">
          <div className=" grow">
            <SearchBar />
          </div>
          <div className=" flex items-center ">
            <button
              type="button"
              onClick={() => setOpenFilter(!openFilter)}
              className={`${
                openFilter
                  ? "rounded-r-2xl rounded-l-md rounded-tl-2xl "
                  : "rounded-r-2xl rounded-l-md rounded-bl-2xl "
              } duration-300 text-neutral-700 border dark:border-neutral-700 border-neutral-300 transition-all h-12 w-12 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium   text-sm p-2.5 text-center inline-flex items-center dark:text-neutral-500  dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500`}
            >
              {openFilter ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <AdjustmentsHorizontalIcon className="w-7 h-7" />
              )}
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </Transition>
      <Transition
        show={openFilter}
        className="z-30 relative flex-col flex gap-4 mt-4 "
        enter="transition-all ease-linear duration-500  overflow-hidden"
        enterFrom="transform opacity-0 max-h-0"
        enterTo="transform opacity-100 max-h-96"
        leave="transition-all ease-linear duration-200 overflow-hidden"
        leaveFrom="transform opacity-100 max-h-96"
        leaveTo="transform opacity-0 max-h-0"
      >
        <ComboBoxCustom
          name="category"
          placeholder="Category"
          options={[
            { id: "allRecipes", value: "All Recipes" },
            { id: "sauces", value: "Sauces" },
          ]}
        />
        <MultiSelectBox />
      </Transition>

      <div className="pb-16  ">
        <RecipeFeed />
      </div>
    </>
  );
};

export default RecipesPage;
