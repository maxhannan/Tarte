import { useState } from "react";
import { Combobox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export default function ComboBoxCustom() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const checkIfExists = (
    query: string,
    list: { id: number; name: string }[]
  ) => {
    let exists = false;

    list.forEach((element) => {
      element.name.toLowerCase() === query.toLowerCase()
        ? (exists = true)
        : null;
    });
    console.log("EXISTS", exists);
    return exists;
  };

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <div>
        <Combobox.Input
          className="rounded-r-xl rounded-l-md rounded-bl-xl focus:ring-neutral-500  border relative  border-neutral-300 dark:border-neutral-700 h-12 w-full p-2 pl-4 text-xl text-neutral-800 appearance-none  focus:ring-2 focus:outline-none focus:border-none bg-neutral-200    placeholder-neutral-500 dark:bg-neutral-800  dark:placeholder-neutral-400 dark:text-neutral-50   "
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Unit"
          displayValue={
            selectedPerson
              ? (person: { id: number; name: string }) => person.name
              : undefined
          }
        />
        <Combobox.Options className="absolute mt-2 bg-neutral-100 z-50   rounded-r-2xl rounded-l-sm rounded-bl-2xl max-h-48 w-full  overflow-auto rounded-md  dark:bg-neutral-800 py-1 text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ">
          {query.length > 0 && !checkIfExists(query, people) && (
            <Combobox.Option
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active
                    ? "bg-neutral-700  text-neutral-100"
                    : "dark:text-neutral-300 text-neutral-700"
                }`
              }
              value={{ id: null, name: query }}
            >
              Create "{query}"
            </Combobox.Option>
          )}
          {filteredPeople.map((person) => (
            <Combobox.Option
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active
                    ? "bg-neutral-700  text-neutral-100"
                    : "dark:text-neutral-300 text-neutral-700"
                }`
              }
              key={person.id}
              value={person}
            >
              {person.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
