import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";

interface recipeSummaryProps {
  id?: string;
  name?: string;
  category?: string;
}

const RecipeSummary = ({
  id = "1",
  name = "Saffron Mayo ",
  category = "Sauces",
}: recipeSummaryProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/app/recipes/${id}`)}
      className="  w-full max-h-full  bg-neutral-200 rounded-r-2xl rounded-l-md rounded-bl-2xl py-4   flex justify-start items-center  px-4 hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:border-l-pink-400"
    >
      <div className="inline-flex flex-shrink-0 items-center mr-4 justify-center w-14 h-14 overflow-hidden bg-neutral-700 rounded-r-2xl rounded-l-md rounded-bl-2xl dark:bg-neutral-700">
        <span className=" text-3xl text-gray-100 dark:text-gray-300">mh</span>
      </div>
      <div className=" px-2 ">
        <h5 className="text-xl  text-neutral-700 dark:text-neutral-100">
          {name}
        </h5>
        <h6 className="text-md mt-1  text-neutral-500 dark:text-neutral-400">
          {category}
        </h6>
      </div>
      <div className=" ml-auto ">
        <ArrowRightIcon className="text-neutral-800 dark:text-neutral-200 w-6 h-6" />
      </div>
    </div>
  );
};

export default RecipeSummary;
