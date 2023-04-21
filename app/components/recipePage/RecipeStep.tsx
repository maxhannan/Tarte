import { useState } from "react";

const RecipeStep = ({
  stepNum,
  content,
}: {
  stepNum: number;
  content: string;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className={`${
        checked ? "dark:bg-neutral-700 bg-neutral-300" : "dark:bg-neutral-800 "
      }  border border-neutral-300 dark:border-neutral-700 bg-neutral-200 bg-opacity-50 dark:bg-opacity-50 transition-all duration-300 rounded-r-3xl p-4 rounded-l-md rounded-bl-3xl text-lg text-neutral-700 dark:text-neutral-100 mt-4`}
    >
      <h5 className="text-xl mb-2">Step {stepNum}</h5>
      <p className="text-lg font-light ">{content}</p>
    </div>
  );
};

export default RecipeStep;
