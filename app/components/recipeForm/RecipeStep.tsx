import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { TextareaAutosize } from "@mui/base";
import IconButton from "../buttons/IconButton";

const RecipeStep = () => {
  return (
    <>
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
        className="flex gap-x-2 col-span-5"
      >
        <div className="grow border-l-8 h-14 inline-flex border-r-none items-center border-l-neutral-300 dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 rounded-r-2xl   pl-3 font-light rounded-l-md rounded-bl-2xl text-lg text-neutral-700 dark:text-neutral-100  ">
          <h4 className="text-xl dark:text-neutral-100 "> Step One</h4>
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IconButton
            Icon={XMarkIcon}
            size="14"
            buttonName="deleteRecipe"
            action={() => console.log("delete")}
          />
        </div>
      </Transition>
      <TextareaAutosize
        minRows={2}
        placeholder="Add A Step...."
        className="col-span-5 transition-all text-xl p-4 focus:ring-2 focus:ring-neutral-500 focus:border-none focus:outline-none  dark:placeholder:text-neutral-500 rounded-r-2xl h-16 bg-neutral-200 dark:bg-neutral-800 active:outline-none text-neutral-800 dark:text-neutral-100 text-light  rounded-l-md rounded-bl-2xl "
      />
    </>
  );
};

export default RecipeStep;
