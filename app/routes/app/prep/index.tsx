import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";

import Spinner from "~/components/status/smallSpinner";

import PrepListSummary from "~/components/prep/PrepListSummary";
import { PrepCalendar } from "~/components/prep/PrepCalendar";
import SlideDownTransition from "~/components/animations/slideDown";
import SearchBar from "~/components/forms/SearchBar";
import IconButton from "~/components/buttons/IconButton";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import CustomModal from "~/components/displays/CustomModal";

import ComboBoxCustom from "~/components/forms/Combobox";

import LoadingButton from "~/components/buttons/LoadingButton";
import { add, format, formatRelative, set } from "date-fns";
import { enUS } from "date-fns/locale";
import { LoaderFunction } from "@remix-run/node";
import { PrepListSummaries, getPrepListsByDate } from "~/utils/prepLists";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  console.log(params.get("date"));
  const date = new Date(params.get("date") || new Date());
  const prepLists = await getPrepListsByDate(date);
  return prepLists;
};

const formatRelativeLocale = {
  lastWeek: "'Last' eeee",
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'Tomorrow'",
  nextWeek: "'This' eeee",
  other: "dd.MM.yyyy",
};

const locale = {
  ...enUS,
  // @ts-ignore
  formatRelative: (token) => formatRelativeLocale[token],
};

const PrepPage = () => {
  const navigation = useNavigation();
  const [openDialog, setOpenDialog] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const prepLists = useLoaderData() as PrepListSummaries;

  const handleDateChange = (date: Date) => {
    date.getUTCDate();

    searchParams.set("date", format(date, "yyyy-MM-dd"));
    setSearchParams(searchParams);
    setDate(date);
  };

  return (
    <div className=" container mx-auto max-w-4xl">
      <SlideDownTransition>
        <nav className=" flex py-3  mx-auto max-h-full items-center justify-between  duration-300 bg-neutral-100 dark:bg-neutral-900   w-full top-0 left-0  ">
          <h1
            className={`text-4xl  text-neutral-700 dark:text-neutral-100 font-light`}
          >
            Prep
          </h1>

          <div className="grow flex justify-end gap-2">
            <PrepCalendar
              date={date}
              setDate={setDate}
              handleDateChange={handleDateChange}
            />
            <IconButton
              Icon={PlusCircleIcon}
              action={() => setOpenDialog(true)}
              buttonName="Add list"
            />
          </div>
        </nav>
      </SlideDownTransition>
      {navigation.state !== "loading" && (
        <CustomModal isOpen={openDialog} setIsOpen={setOpenDialog}>
          <div className=" p-4 flex flex-col  gap-2">
            <div className="w-full flex gap-2  ">
              <div className="grow">
                <ComboBoxCustom
                  name="Template"
                  options={[
                    { id: "1", value: "PM Grill" },
                    { id: "1", value: "PM Grill" },
                    { id: "1", value: "PM Grill" },
                    { id: "1", value: "PM Grill" },
                    { id: "1", value: "PM Grill" },
                    { id: "1", value: "PM Grill" },
                    { id: "1", value: "PM Grill" },
                    { id: "1", value: "PM Grill" },
                  ]}
                  placeholder="Template"
                />
              </div>
              <div className="flex-none">
                <IconButton
                  Icon={ArrowRightIcon}
                  buttonName="create"
                  action={() => console.log("hello")}
                />
              </div>
            </div>
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-neutral-700"></div>
              <span className="flex-shrink mx-4 text-neutral-400">Or</span>
              <div className="flex-grow border-t border-neutral-700"></div>
            </div>
            <div className="w-full flex gap-2  ">
              <div className="grow">
                <LoadingButton
                  buttonText="Create Custom List"
                  Icon={ArrowRightIcon}
                  action={() => setOpenDialog(true)}
                  buttonName="Add list"
                />
              </div>
            </div>
          </div>
        </CustomModal>
      )}

      <div className="flex flex-col gap-2 ">
        <SearchBar
          handleChange={() => (e: string) => console.log(e)}
          value={""}
        />
        <div className="flex w-full items-center justify-between bg-neutral-200 rounded-xl border border-neutral-300 p-1 dark:bg-neutral-800 dark:bg-opacity-50 dark:border-neutral-700">
          <button
            onClick={() => date && handleDateChange(add(date, { days: -1 }))}
            className="h-9 w-9 border flex items-center justify-center dark:border-neutral-700 border-neutral-300 rounded-xl"
          >
            <ArrowLeftIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-100" />
          </button>
          <span
            className={`text-xl  text-neutral-700 dark:text-neutral-100 font-light flex items-center justify-center text-center`}
          >
            {date &&
              formatRelative(date, new Date(), { locale, weekStartsOn: 6 })}
          </span>
          <button
            onClick={() => date && handleDateChange(add(date, { days: 1 }))}
            className="h-10 w-10 border flex items-center justify-center dark:border-neutral-700 border-neutral-300 rounded-xl"
          >
            <ArrowRightIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-100" />
          </button>
        </div>
        {navigation.state === "loading" ? (
          <div className="flex justify-center mt-4 ">
            <Spinner size={14} />
          </div>
        ) : (
          <div className="flex flex-col gap-3  ">
            <SlideUpTransition>
              <div className="grid z-0 relative grid-flow-row  auto-rows-max gap-y-2  mx-auto mb-28 ">
                {prepLists && prepLists.length > 0 ? (
                  prepLists.map((prepList) => (
                    <PrepListSummary
                      key={prepList.id}
                      id={prepList.id}
                      prepList={prepList}
                    />
                  ))
                ) : (
                  <h2 className="text-2xl text-neutral-700 dark:text-neutral-100 font-light text-center">
                    Nothing Found
                  </h2>
                )}
              </div>
            </SlideUpTransition>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrepPage;
