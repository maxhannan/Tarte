import type { ElementType } from "react";

interface buttonProps {
  Icon: ElementType;
  buttonName: string;
  type?: "button" | "submit" | "reset";
}

const IconButton = ({ Icon, buttonName, type = "button" }: buttonProps) => {
  return (
    <button
      type={type}
      name={buttonName}
      className=" h-10 transition shadow-inner text-xs  justify-center duration-300 bg-neutral-200  dark:bg-neutral-700  text-neutral-700  active:scale-90 focus:ring-2 focus:outline-none  focus:ring-neutral-400 font-medium rounded-lg  p-2.5  inline-flex items-center  dark:border-blue-400 dark:text-neutral-400  dark:focus:ring-blue-800 "
    >
      <Icon className="w-4 h-4 mr-2 " />
      <span className=" text-xs mx-auto">{buttonName}</span>
      <span className="sr-only">{buttonName}</span>
    </button>
  );
};

export default IconButton;
