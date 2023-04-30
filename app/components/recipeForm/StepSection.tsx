import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import RecipeStep from "./RecipeStep";
import { v4 } from "uuid";

const StepSection = ({
  show,
  stepsList,
}: {
  show: boolean;
  stepsList: string[] | undefined;
}) => {
  const [steps, setSteps] = useState(
    stepsList?.map((s) => {
      return { content: s, orderNum: stepsList.indexOf(s) + 1, id: v4() };
    }) || []
  );

  const handleAddStep = () => {
    const stepNum = steps.length > 0 ? steps.slice(-1)[0].orderNum + 1 : 1;
    const newStep = {
      orderNum: stepNum,
      content: "",
      id: v4(),
    };
    setSteps([...steps, newStep]);
  };
  const handleDelete = (id: string) => {
    const newSteps = steps.filter((i) => i.id !== id);
    const newNumSteps = newSteps.map((s) => {
      return { ...s, orderNum: newSteps.indexOf(s) + 1 };
    });
    setSteps(newNumSteps);
  };

  return (
    <div className="grid grid-cols-5  gap-y-2 gap-x-2 w-full  z-20">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow h-14   inline-flex items-center border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 rounded-2xl   pl-3 font-light text-lg text-neutral-800 dark:text-neutral-200  ">
          <h4 className="text-3xl  "> Steps</h4>
        </div>
      </div>
      {steps.map((s) => (
        <RecipeStep
          key={s.id}
          show={show}
          step={s}
          handleDelete={handleDelete}
        />
      ))}

      <div
        onClick={handleAddStep}
        className="col-span-5   h-12 inline-flex border-r-none items-center dark:hover:text-neutral-700 justify-between px-3 dark:bg-neutral-900 bg-neutral-100 hover:bg-neutral-700 border dark:border-neutral-700 border-neutral-300 border-dashed hover:text-neutral-200 hover:dark:bg-neutral-200  transition-all duration-300 rounded-xl text-lg text-neutral-700 dark:text-neutral-100  "
      >
        <h4 className="text-xl  ">Add Step</h4>
        <PlusIcon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default StepSection;
