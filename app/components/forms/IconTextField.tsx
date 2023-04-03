import { useState } from "react";
import type { ElementType } from "react";

interface textFieldProp {
  Icon: ElementType;
  fieldName: string;
  identifier: string;
}
const IconTextField = ({ Icon, fieldName, identifier }: textFieldProp) => {
  const [value, setValue] = useState("");
  return (
    <div className="grow">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {fieldName}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon className="w-7 h-7 text-neutral-500 dark:text-neutral-400" />
        </div>
        <input
          id={identifier}
          name={identifier}
          className={`${
            value.length > 0
              ? "rounded-r-2xl rounded-l-md rounded-tl-2xl "
              : "rounded-r-2xl rounded-l-md rounded-bl-2xl "
          } transition-all duration-300 block  h-14 w-full p-2 pl-12 text-xl text-neutral-900  bg-neutral-200 focus:ring-2 focus:border-neutral-50 focus:outline-none  focus:ring-neutral-400 placeholder-neutral-600 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder={fieldName}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default IconTextField;
