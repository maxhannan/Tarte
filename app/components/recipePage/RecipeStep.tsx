import { useState } from "react";

const RecipeStep = ({
  stepNum,
  content,
}: {
  stepNum: string;
  content: string;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className={`${
        checked
          ? "dark:bg-neutral-700 bg-neutral-300 border-l-8 border-l-green-500"
          : "dark:bg-neutral-800 border-l-8 border-l-red-500"
      }  bg-neutral-200 rounded-r-3xl p-6 font-light rounded-l-md rounded-bl-3xl text-lg text-neutral-700 dark:text-neutral-100 mt-4`}
    >
      <h5 className="text-2xl mb-2">Step {stepNum}</h5>
      <p className="text-base">{content}</p>
    </div>
  );
};

export default RecipeStep;
