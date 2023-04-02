import { Listbox, Transition } from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import IconTextField from "~/components/forms/IconTextField";
import RecipeFeed from "~/components/recipefeed/RecipeFeed";
const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
const RecipesPage = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <>
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 -translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <div className="container max-w-2xl mx-auto flex  gap-2  mt-2">
          <div className=" grow">
            <IconTextField
              Icon={MagnifyingGlassIcon}
              fieldName="Search For Beakers"
              identifier="beakers"
            />
          </div>
          <div className=" flex items-center">
            <button
              type="button"
              className="  text-neutral-700 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-r-2xl rounded-l-md rounded-bl-2xl  text-sm p-2.5 text-center inline-flex items-center dark:text-neutral-500  dark:hover:text-white dark:focus:ring-neutral-800 dark:hover:bg-neutral-500"
            >
              <AdjustmentsHorizontalIcon className="w-7 h-7" />
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </Transition>
      <div className="z-40 relative">
        <Listbox value={selected} onChange={setSelected}>
          <div className=" mt-4">
            <Listbox.Button className="relative h-12 w-full text-lg cursor-default  rounded-r-2xl rounded-l-md rounded-bl-2xl  bg-neutral-200 focus:ring-2 focus:border-neutral-50  focus:ring-neutral-400  dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-neutral-50 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-neutral-700"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="z-50 absolute mt-2 bg-neutral-100   rounded-r-2xl rounded-l-sm rounded-bl-2xl max-h-60 w-full  overflow-auto rounded-md  dark:bg-neutral-800 py-1 text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ">
                {people.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-neutral-700  text-neutral-100"
                          : "dark:text-neutral-300 text-neutral-700"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-100">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="pb-16 ">
        <RecipeFeed />
      </div>
    </>
  );
};

export default RecipesPage;
