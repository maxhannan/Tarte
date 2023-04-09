import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface ComboBoxProps {
  options: Option[];
  placeholder: string;
  name: string;
  allowCustom?: boolean;
  initValue?: Option;
  changeHandler?: (value: Option | null) => void;
}

export interface Option {
  id: string;
  value: string;
}

export default function CategoryBox({
  options,
  placeholder,
  name,
  allowCustom = false,
  initValue,
  changeHandler,
}: ComboBoxProps) {
  const [selected, setSelected] = useState(initValue || null);
  const [query, setQuery] = useState("");

  const filteredList =
    query === ""
      ? options
      : options.filter((o) => {
          return o.value.toLowerCase().includes(query.toLowerCase());
        });

  const checkIfExists = (query: string, list: Option[]) => {
    let exists = false;

    list.forEach((option) => {
      if (option.value.toLowerCase() === query.toLowerCase()) {
        exists = true;
      }
    });
    return exists;
  };

  return (
    <Combobox
      value={selected}
      onChange={
        changeHandler
          ? (value) => {
              console.log({ value });
              changeHandler(value);
              setSelected(value);
            }
          : setSelected
      }
    >
      <div className="relative">
        <Combobox.Input
          autoComplete="off"
          name={name}
          className="rounded-r-xl rounded-l-md rounded-bl-xl focus:ring-neutral-500  border relative  border-neutral-300 dark:border-neutral-700 h-12 w-full p-2 pl-4 text-xl text-neutral-800 appearance-none  focus:ring-2 focus:outline-none focus:border-none bg-neutral-200    placeholder-neutral-500 dark:bg-neutral-800  dark:placeholder-neutral-400 dark:text-neutral-50   "
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          displayValue={selected ? (option: Option) => option.value : undefined}
        />
        {selected !== null && (
          <XCircleIcon
            onClick={
              changeHandler
                ? () => {
                    changeHandler(null);
                    setSelected(null);
                  }
                : setSelected(null)
            }
            className="w-6 h-6 absolute top-3 right-2 text-violet-500 dark:text-violet-500 hover:text-violet-600 "
          />
        )}
        <Combobox.Options className="absolute mt-2 bg-neutral-100 z-50   rounded-r-2xl rounded-l-sm rounded-bl-2xl max-h-48 w-full  overflow-auto rounded-md  dark:bg-neutral-800 py-1 text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ">
          {allowCustom && query.length > 0 && !checkIfExists(query, options) && (
            <Combobox.Option
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active
                    ? "bg-neutral-700  text-neutral-100"
                    : "dark:text-neutral-300 text-neutral-700"
                }`
              }
              value={{ id: null, value: query }}
            >
              Create "{query}"
            </Combobox.Option>
          )}
          {!allowCustom && filteredList.length === 0 && query !== "" && (
            <div className="relative cursor-default select-none py-2 px-4 text-neutral-200">
              Nothing found.
            </div>
          )}
          {filteredList.map((option) => (
            <Combobox.Option
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active
                    ? "bg-neutral-700  text-neutral-100"
                    : "dark:text-neutral-300 text-neutral-700"
                }`
              }
              key={option.id}
              value={option}
            >
              {option.value}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
