import { Transition } from "@headlessui/react";
import { TextareaAutosize } from "@mui/base";

const TextAreaCustom = () => {
  return (
    <TextareaAutosize
      minRows={2}
      placeholder="Add A Step...."
      className="col-span-5 transition-all text-xl p-4 focus:ring-2 focus:ring-neutral-500 focus:border-none focus:outline-none  dark:placeholder:text-neutral-500 rounded-r-2xl h-16 bg-neutral-200 dark:bg-neutral-800 active:outline-none text-neutral-800 dark:text-neutral-100 text-light  rounded-l-md rounded-bl-2xl "
    />
  );
};

export default TextAreaCustom;
