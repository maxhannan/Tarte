import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

const people = [
  { id: 1, name: "Unit", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const SelectBox = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="">
        <Listbox.Button className="relative border h-12 w-full text-xl cursor-default pl-4 dark:border-neutral-700 rounded-r-xl rounded-l-md rounded-bl-xl  bg-neutral-200 focus:ring-2 focus:border-neutral-50  focus:ring-neutral-400  dark:bg-neutral-800 border-neutral-300 dark:placeholder-neutral-400 dark:text-neutral-50 py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ">
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
          enter="transition ease-out duration-200"
          leave="transition ease-in duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-2 bg-neutral-100 z-50   rounded-r-2xl rounded-l-sm rounded-bl-2xl max-h-48 w-full  overflow-auto rounded-md  dark:bg-neutral-800 py-1 text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ">
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
  );
};

export default SelectBox;
