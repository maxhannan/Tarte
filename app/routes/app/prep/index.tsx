import { DocumentPlusIcon, UserIcon } from "@heroicons/react/24/solid";
import { useNavigation, useSearchParams } from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";
import SearchAndAllergens from "~/components/menus/SearchAndAllergens";
import AppBar from "~/components/navigation/AppBar";
import RecipeSummary from "~/components/recipefeed/RecipeSummary";
import Spinner from "~/components/status/smallSpinner";
import dishes from "../menus/dishes";
import PrepListSummary from "~/components/prep/PrepListSummary";
import { PrepCalendar } from "~/components/prep/PrepCalendar";
import SlideDownTransition from "~/components/animations/slideDown";
import SearchBar from "~/components/forms/SearchBar";

const PrepPage = () => {
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();
  if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size={14} />
      </div>
    );
  }
  return (
    <div className=" container mx-auto max-w-4xl">
      <SlideDownTransition>
        <nav className=" flex py-3  mx-auto max-h-full items-center justify-between  duration-300 bg-neutral-100 dark:bg-neutral-900   w-full top-0 left-0  ">
          <h1
            className={`text-4xl mr-6 text-neutral-700 dark:text-neutral-100`}
          >
            Prep
          </h1>

          <div className="grow flex justify-end gap-2">
            <PrepCalendar />
          </div>
        </nav>
      </SlideDownTransition>
      <div className="flex flex-col gap-3 ">
        <SearchBar
          handleChange={() => (e: string) => console.log(e)}
          value={""}
        />

        <div className="flex flex-col gap-3  ">
          <SlideUpTransition>
            <div className="grid z-0 relative grid-flow-row  auto-rows-max gap-y-2  mx-auto mb-28 ">
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
            </div>
          </SlideUpTransition>
        </div>
      </div>
    </div>
  );
};

export default PrepPage;
