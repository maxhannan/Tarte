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
    <div>
      <AppBar
        page={"Prep"}
        buttons={[
          {
            Icon: DocumentPlusIcon,
            buttonName: "Add Recipe",
            action: () => console.log("addRecipe"),
          },
        ]}
      />
      <div className="flex flex-col gap-3 ">
        <SearchAndAllergens
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <div className="">
          <PrepCalendar />
        </div>

        <div className="flex flex-col gap-3 ">
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
