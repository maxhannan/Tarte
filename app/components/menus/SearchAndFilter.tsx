import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SearchBar from "../forms/SearchBar";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import type { Option } from "../forms/Combobox";
import MultiSelectBox from "../forms/MultiSelectBox";

import { useDebounce } from "~/hooks/useDebounce";
import CategoryBox from "../forms/CategoryBox";
import { useNavigation } from "@remix-run/react";

interface Props {
  categories: string[];
  searchParams: URLSearchParams;
  setSearchParams: (searchParams: URLSearchParams) => void;
}

const SearchAndFilter = ({
  categories,
  searchParams,
  setSearchParams,
}: Props) => {
  const category = searchParams.get("category");
  const allergies = searchParams.get("allergies");
  const [openFilter, setOpenFilter] = useState(
    category !== null || allergies !== null ? true : false
  );
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  let [debouncedQuery] = useDebounce(searchValue, 300);

  const handleSearch: (search: string) => void = (search: string) => {
    console.log({ search });
    setSearchValue(search);
  };

  const handleCategorize = (category: Option | null) => {
    console.log({ category });
    if (category) {
      searchParams.set("category", category.value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
  };

  const handleAllergies = (value: string[]) => {
    console.log(value.join(","));
    if (value.length > 0) {
      searchParams.set("allergies", value.join(","));
      setSearchParams(searchParams);
    } else {
      searchParams.delete("allergies");
      setSearchParams(searchParams);
    }
  };
  useEffect(() => {
    let searchParams = new URLSearchParams(location.search);
    if (debouncedQuery.length > 0) {
      searchParams.set("search", debouncedQuery);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return (
    <>
      <Transition
        enter="transition-all transform  ease-in-out  duration-700"
        enterFrom=" opacity-0 -translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="z-50 relative"
        appear
        show
      >
        <div className="container max-w-2xl mx-auto flex  gap-2  mt-2">
          <div className=" grow">
            <SearchBar handleChange={handleSearch} value={searchValue} />
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
          <CategoryBox
            name="category"
            placeholder="Category"
            changeHandler={handleCategorize}
            initValue={
              category!
                ? {
                    id: category,
                    value: category,
                  }
                : undefined
            }
            options={categories.map((c) => ({
              id: c,
              value: c,
            }))}
          />
          <MultiSelectBox
            name="allergens"
            changeHandler={handleAllergies}
            initalValue={allergies ? allergies.split(",") : []}
            placeholder="Filter Out Allergens"
          />
        </Transition>
      </Transition>
    </>
  );
};

export default SearchAndFilter;
