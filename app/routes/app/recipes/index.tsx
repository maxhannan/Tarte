import { Transition } from "@headlessui/react";

import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  DocumentPlusIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import {
  useNavigate,
  useNavigation,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import ComboBoxCustom from "~/components/forms/Combobox";
import MultiSelectBox from "~/components/forms/MultiSelectBox";

import SearchBar from "~/components/forms/SearchBar";
import SearchAndFilter from "~/components/menus/SearchAndFilter";

import AppBar from "~/components/navigation/AppBar";
import RecipeFeed from "~/components/recipefeed/RecipeFeed";
import Spinner from "~/components/status/smallSpinner";
import { useDebounce } from "~/hooks/useDebounce";
import { useRouteData } from "~/hooks/useRouteData";
import type { FullRecipes } from "~/utils/recipes.server";

const RecipesPage = () => {
  const navigate = useNavigate();
  const submit = useSubmit();
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageChangeLoading =
    navigation.state === "loading" &&
    navigation.location.pathname !== "/app/recipes";

  const { recipes, recipeList, categories } = useRouteData(
    "routes/app/recipes"
  ) as {
    recipes: FullRecipes;
    recipeList: FullRecipes | [];
    categories: string[];
  };

  if (navigation.state === "loading" && pageChangeLoading) {
    return (
      <div className=" mx-auto h-screen  flex items-center justify-center">
        <Spinner size={14} />
      </div>
    );
  }

  console.log(navigation.location);
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
            action: () =>
              submit(null, { action: "/auth/logout", method: "post" }),
          },
        ]}
      />

      <SearchAndFilter
        categories={categories}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      {navigation.state === "loading" && !pageChangeLoading ? (
        <div className="flex h-60 items-center justify-center">
          <Spinner size={12} />
        </div>
      ) : (
        <div className="pb-16  ">
          {recipes && <RecipeFeed recipeList={recipeList} />}
        </div>
      )}
    </>
  );
};

export default RecipesPage;
