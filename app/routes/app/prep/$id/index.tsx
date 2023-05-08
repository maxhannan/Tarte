import {
  ArrowUturnLeftIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "@remix-run/react";
import CustomDisclosure from "~/components/displays/customDisclosure";

import SearchBar from "~/components/forms/SearchBar";
import AppBar from "~/components/navigation/AppBar";
import PrepListItem from "~/components/prep/PrepListItem";

const PrepListPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" container mx-auto mb-28">
      <AppBar
        page={"PM Grill"}
        buttons={[
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "Add Recipe",
            action: () => navigate(-1),
          },
        ]}
      />
      <SearchBar
        handleChange={() => (e: string) => console.log(e)}
        value={""}
      />
      <div className="w-full grid lg:grid-cols-2 gap-2 mt-2">
        <div className="flex flex-col gap-2">
          <CustomDisclosure name={"Hummus"}>
            <div className="  max-w-full  bg-neutral-200 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-1 px-2 grid grid-cols-12  gap-2   dark:bg-neutral-800 dark:border-neutral-700">
              <div className=" font-light col-span-5 flex gap-2 items-center mr-1">
                <div>
                  <h5 className="text-lg text-neutral-700 dark:text-neutral-100 ">
                    Task
                  </h5>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1   text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Inv</span>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1  text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Prep</span>
              </div>
            </div>

            <PrepListItem name={"Hummus Base"} unit="Quarts" />
            <PrepListItem name={"Crispy Chickpeas"} unit="Quarts" />
            <PrepListItem name={"Tahini Puree"} unit="Quarts" />
            <PrepListItem name={"Pita Bread / Socca Wraps"} unit="EA" />
            <PrepListItem name={"Chopped Parsely"} unit="Pints" />
            <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
          </CustomDisclosure>
          <CustomDisclosure name={"Labneh"}>
            <div className="  max-w-full  bg-neutral-200 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-1 px-2 grid grid-cols-12  gap-1   dark:bg-neutral-800 dark:border-neutral-700">
              <div className=" font-light col-span-5 flex gap-2 items-center mr-1">
                <div>
                  <h5 className="text-lg text-neutral-700 dark:text-neutral-100 ">
                    Task
                  </h5>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1   text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Inv</span>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1  text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Prep</span>
              </div>
            </div>

            <PrepListItem name={"Labneh"} unit="Quarts" />
            <PrepListItem name={"Rehydrated Raisins"} unit="Quarts" />
            <PrepListItem name={"Roasted Carrots"} unit="Quarts" />

            <PrepListItem name={"Chopped Cilantro"} unit="Pints" />
            <PrepListItem name={"Agrumato Oil"} unit="Squeeze Bottle" />
          </CustomDisclosure>
          <CustomDisclosure name={"Baba Ghanoush"}>
            <div className="  max-w-full  bg-neutral-200 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-1 px-2 grid grid-cols-12  gap-1   dark:bg-neutral-800 dark:border-neutral-700">
              <div className=" font-light col-span-5 flex gap-2 items-center mr-1">
                <div>
                  <h5 className="text-lg text-neutral-700 dark:text-neutral-100 ">
                    Task
                  </h5>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1   text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Inv</span>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1  text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Prep</span>
              </div>
            </div>

            <PrepListItem name={"Baba Ghanoush"} unit="Quarts" />
            <PrepListItem name={"Olive Pinenut Tapenade"} unit="Quarts" />
            <PrepListItem name={"Tahini Puree"} unit="Quarts" />
            <PrepListItem name={"Crushed Ice"} unit="EA" />
            <PrepListItem name={"Chopped Parsely"} unit="Pints" />
            <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
            <PrepListItem name={"Radishes for Crudite"} unit="Quarts" />
            <PrepListItem name={"Turnips for Crudite"} unit="Quarts" />
            <PrepListItem name={"Carrots for Crudite"} unit="Quarts" />
            <PrepListItem name={"Endives for Crudite"} unit="Quarts" />
            <PrepListItem name={"Lemon Water Spritz"} unit="Quarts" />
          </CustomDisclosure>
        </div>
        <div className="flex flex-col gap-2">
          <CustomDisclosure name={"Hummus"}>
            <div className="  max-w-full  bg-neutral-200 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-1 px-2 grid grid-cols-12  gap-1   dark:bg-neutral-800 dark:border-neutral-700">
              <div className=" font-light col-span-5 flex gap-2 items-center mr-1">
                <div>
                  <h5 className="text-lg text-neutral-700 dark:text-neutral-100 ">
                    Task
                  </h5>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1   text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Inv</span>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1  text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Prep</span>
              </div>
            </div>

            <PrepListItem name={"Hummus Base"} unit="Quarts" />
            <PrepListItem name={"Crispy Chickpeas"} unit="Quarts" />
            <PrepListItem name={"Tahini Puree"} unit="Quarts" />
            <PrepListItem name={"Pita Bread / Socca Wraps"} unit="EA" />
            <PrepListItem name={"Chopped Parsely"} unit="Pints" />
            <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
          </CustomDisclosure>
          <CustomDisclosure name={"Hummus"}>
            <div className="  max-w-full  bg-neutral-200 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-1 px-2 grid grid-cols-12  gap-1   dark:bg-neutral-800 dark:border-neutral-700">
              <div className=" font-light col-span-5 flex gap-2 items-center mr-1">
                <div>
                  <h5 className="text-lg text-neutral-700 dark:text-neutral-100 ">
                    Task
                  </h5>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1   text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Inv</span>
              </div>
              <div className="col-span-3 flex items-center justify-start pl-1  text-lg text-neutral-700 dark:text-neutral-100 font-light">
                <span>Prep</span>
              </div>
            </div>

            <PrepListItem name={"Hummus Base"} unit="Quarts" />
            <PrepListItem name={"Crispy Chickpeas"} unit="Quarts" />
            <PrepListItem name={"Tahini Puree"} unit="Quarts" />
            <PrepListItem name={"Pita Bread / Socca Wraps"} unit="EA" />
            <PrepListItem name={"Chopped Parsely"} unit="Pints" />
            <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
          </CustomDisclosure>
        </div>
      </div>
    </div>
  );
};

export default PrepListPage;
