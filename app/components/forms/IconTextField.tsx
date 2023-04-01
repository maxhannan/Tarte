import type { ElementType } from "react";

interface textFieldProp {
  Icon: ElementType;
  fieldName: string;
  identifier: string;
}
const IconTextField = ({ Icon, fieldName, identifier }: textFieldProp) => {
  return (
    <div className="grow">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {fieldName}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
        </div>
        <input
          id={identifier}
          name={identifier}
          className="block h-12 w-full p-2 pl-10 text-base text-neutral-900  border-neutral-300 border rounded-2xl bg-neutral-100 focus:ring-2 focus:border-neutral-50 focus:outline-none  focus:ring-neutral-400  dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={fieldName}
          required
        />
      </div>
    </div>
  );
};

export default IconTextField;
