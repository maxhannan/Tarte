import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Chip from "./Chip";

const Allergens = [
  "Gluten",
  "Not Vegetarian",
  "Not Vegan",
  "Dairy",
  "Eggs",
  "Fish",
  "Shellfish",
  "Tree nuts",
  "Peanuts",
  "Soy",
  "Not Halal",
  "Not Kosher",
];

export default function MultiSelectBox({
  name,
  initalValue,
}: {
  name: string;
  initalValue?: string[];
}) {
  const [selected, setSelected] = useState(initalValue || []);

  return (
    <div className="w-full z-30">
      <input type="hidden" value={selected.join(",")} name={name} />
      <Listbox value={selected} onChange={setSelected} multiple>
        <div className="relative ">
          <Listbox.Button className=" relative w-full cursor-default border py-2 px-2 border-gray-300 dark:border-neutral-700 rounded-xl rounded-tl-md bg-neutral-200 dark:bg-neutral-800 pl-3 pr-10 text-left  text-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 ">
            <span className="flex flex-wrap gap-2 items-center ">
              {selected.length > 0 ? (
                selected.map((person) => <Chip key={person} content={person} />)
              ) : (
                <p className=" m-0.5 text-neutral-400  text-md">
                  Select Allergens
                </p>
              )}
            </span>

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-neutral-700"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-300"
            enterFrom="opacity-0  "
            enterTo="opacity-100 "
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" z-40 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-700 py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
              {Allergens.map((allergen, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "dark:bg-neutral-800 bg-neutral-300 text-neutral-900 dark:text-neutral-400"
                        : "text-neutral-900 dark:text-neutral-50"
                    }`
                  }
                  value={allergen}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {allergen}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-500">
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
  );
}
