import { useState } from "react";

const CustomTextInput = ({
  identifier,
  fieldName,
}: {
  identifier: string;
  fieldName: string;
}) => {
  const [value, setValue] = useState("");
  return (
    <input
      id={identifier}
      name={identifier}
      type="text"
      className={`${
        value.length > 0
          ? "rounded-r-2xl rounded-l-md rounded-tl-2xl focus:ring-green-500  border-green-500 border-2 "
          : "rounded-r-2xl rounded-l-md rounded-bl-2xl focus:ring-red-500 border-none "
      } transition-all duration-300 block  h-14 w-full p-2 pl-4 text-xl text-neutral-900 appearance-none  focus:ring-2 focus:outline-none focus:border-none bg-neutral-200    placeholder-neutral-600 dark:bg-neutral-800  dark:placeholder-neutral-400 dark:text-neutral-50 `}
      placeholder={fieldName}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    />
  );
};

export default CustomTextInput;
