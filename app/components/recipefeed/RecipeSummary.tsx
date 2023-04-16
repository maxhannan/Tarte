import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "@remix-run/react";

interface recipeSummaryProps {
  id: string;
  name: string;
  category: string;
  user: string;
  link?: string;
}

const RecipeSummary = ({
  id,
  name,
  category,
  user,
  link = "/app/recipes/",
}: recipeSummaryProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${id}`)}
      className="w-full max-h-full border-neutral-300 border  bg-neutral-200 rounded-r-2xl rounded-l-md rounded-bl-2xl py-3   flex justify-start items-center  px-4 hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:border-neutral-700"
    >
      <div className=" pl-2 pr-4 ">
        <h5 className="text-xl  text-neutral-700 dark:text-neutral-100">
          {name}
        </h5>
        <h6 className="text-md mt-1  text-violet-500 dark:text-violet-300">
          {category}
        </h6>
      </div>
      <div className=" ml-auto ">
        <ArrowRightIcon className="text-neutral-800 dark:text-neutral-200 w-5 h-5" />
      </div>
    </div>
  );
};

export default RecipeSummary;
