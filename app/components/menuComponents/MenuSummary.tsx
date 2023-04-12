import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "@remix-run/react";

interface MenuSummaryProps {
  id: string;
  name: string;
  category: string;
  user: string;
}

const MenuSummary = ({ id, name, category, user }: MenuSummaryProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => console.log(id)}
      className="  w-full max-h-full border-neutral-300 border  bg-neutral-200 rounded-r-2xl rounded-l-md rounded-bl-2xl py-4   flex justify-start items-center  px-4 hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:border-neutral-700"
    >
      <div className="inline-flex flex-shrink-0 items-center mr-4 justify-center w-14 h-14 overflow-hidden bg-neutral-500 text-neutral-700 border-neutral-300 rounded-r-2xl rounded-l-md rounded-bl-2xl dark:bg-neutral-800 border dark:border-neutral-700">
        <span className=" text-3xl text-neutral-200 dark:text-neutral-300">
          {user.toLowerCase()}
        </span>
      </div>
      <div className=" px-2 ">
        <h5 className="text-xl  text-neutral-700 dark:text-neutral-100">
          {name}
        </h5>
        <h6 className="text-lg mt-1  text-violet-500 dark:text-violet-300">
          {category}
        </h6>
      </div>
      <div className=" ml-auto ">
        <ArrowRightIcon className="text-neutral-800 dark:text-neutral-200 w-6 h-6" />
      </div>
    </div>
  );
};

export default MenuSummary;