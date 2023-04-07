import { XMarkIcon } from "@heroicons/react/24/solid";

import IconButton from "../buttons/IconButton";
import TextAreaCustom from "../forms/TextArea";

const RecipeStep = ({
  show,
  step,
  handleDelete,
}: {
  show: boolean;
  step: { orderNum: number; content: string; id: string };
  handleDelete: (id: string) => void;
}) => {
  return (
    <>
      <div className="flex gap-x-2 col-span-5 ">
        <div className="grow h-12 inline-flex  items-center  dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 rounded-r-xl   pl-3 font-light rounded-l-md rounded-bl-xl text-lg text-neutral-700 dark:text-neutral-100  ">
          <h4 className="text-xl dark:text-neutral-100 ">
            {" "}
            Step {step.orderNum}
          </h4>
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="12"
            buttonName="deleteRecipe"
            action={() => handleDelete(step.id)}
          />
        </div>
      </div>

      {show && <TextAreaCustom initValue={step.content} name="recipeStep" />}
    </>
  );
};

export default RecipeStep;
