import { Transition } from "@headlessui/react";
import RecipeSummary from "./RecipeSummary";

const RecipeFeed = () => {
  return (
    <Transition
      enter="transition-all transform  ease-in-out  duration-500"
      enterFrom=" opacity-0 translate-y-64 "
      enterTo=" opacity-100 translate-y-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      appear
      show
    >
      <div className="grid  grid-flow-row  auto-rows-max gap-y-2 max-w-2xl mx-auto mt-4 mb-16">
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
        <RecipeSummary />
      </div>
    </Transition>
  );
};

export default RecipeFeed;
