import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import RecipeStep from "./RecipeStep";
import { v4 } from "uuid";

const StepSection = ({
  show,
  stepsList,
}: {
  show: boolean;
  stepsList: string[];
}) => {
  const [steps, setSteps] = useState(
    stepsList.map((s) => {
      return { content: s, orderNum: stepsList.indexOf(s) + 1, id: v4() };
    }) || [{ orderNum: 1, content: "", id: v4() }]
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
    <div className="grid grid-cols-5  gap-y-4 gap-x-2 w-full  z-20">
      <div className="flex gap-x-2 col-span-5">
        <div className="grow h-14 border-l-8 border-l-neutral-400 inline-flex items-center  dark:bg-neutral-200 bg-neutral-700 transition-all duration-300 rounded-r-2xl   pl-3 font-light rounded-l-md rounded-bl-2xl text-lg text-neutral-100 dark:text-neutral-800  ">
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
        className="col-span-5   h-12 inline-flex border-r-none items-center dark:hover:text-neutral-700 justify-between px-3 dark:bg-neutral-700 bg-neutral-200 hover:bg-neutral-700 hover:text-neutral-200 hover:dark:bg-neutral-200  transition-all duration-300 rounded-r-2xl   rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  "
      >
        <h4 className="text-xl  ">Add Step</h4>
        <PlusCircleIcon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default StepSection;
