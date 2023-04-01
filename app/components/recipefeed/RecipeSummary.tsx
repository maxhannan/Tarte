interface recipeSummaryProps {
  id?: string;
  name?: string;
  category?: string;
}

const RecipeSummary = ({
  id = "1",
  name = "Saffron Mayo",
  category = "Sauces",
}: recipeSummaryProps) => {
  return (
    <div
      onClick={() => console.log(id)}
      className=" h-20 w-full bg-neutral-200 rounded-2xl  border-l-violet-600 border-l-8  flex justify-start items-center  px-4 hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:border-violet-400"
    >
      <div className=" z-0  inline-flex items-center  justify-center w-12 h-12 overflow-hidden bg-violet-500 rounded-2xl dark:bg-violet-400">
        <span className=" text-2xl text-gray-100 dark:text-gray-300">mh</span>
      </div>
      <div className="ml-6">
        <h5 className="text-xl text-neutral-700 dark:text-neutral-50">
          {name}
        </h5>
        <h6 className="text-sm  text-violet-500 dark:text-violet-400">
          {category}
        </h6>
      </div>
      <div className=" ml-auto ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-neutral-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default RecipeSummary;
