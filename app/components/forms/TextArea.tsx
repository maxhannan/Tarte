import { TextareaAutosize } from "@mui/base";
import { useState } from "react";

const TextAreaCustom = ({
  initValue,
  name,
  placeholder = "Add A Step....",
}: {
  initValue?: string;
  name: string;
  placeholder?: string;
}) => {
  const [value, setValue] = useState(initValue || "");
  return (
    <TextareaAutosize
      minRows={2}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="col-span-5 transition-all text-xl p-4 focus:ring-2 focus:ring-neutral-500 focus:border-none focus:outline-none  dark:placeholder:text-neutral-500 rounded-r-2xl h-16 bg-neutral-200 dark:bg-neutral-800 active:outline-none text-neutral-800 dark:text-neutral-100 text-light border-0 rounded-l-md rounded-bl-2xl "
    />
  );
};

export default TextAreaCustom;
