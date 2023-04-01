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
      className=" h-10 transition shadow-inner text-xs  justify-center duration-300 bg-violet-500  dark:bg-violet-400  text-neutral-100  active:scale-90 focus:ring-2 focus:outline-none  focus:ring-neutral-400 font-medium rounded-xl  p-2.5  inline-flex items-center  dark:border-blue-400 dark:text-neutral-100  dark:focus:ring-blue-800 "
    >
      <Icon className="w-4 h-4 mr-2 " />
      <span className=" text-xs mx-auto">{buttonName}</span>
      <span className="sr-only">{buttonName}</span>
    </button>
  );
};

export default IconButton;
