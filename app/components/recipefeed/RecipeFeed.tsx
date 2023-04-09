import { Transition } from "@headlessui/react";
import RecipeSummary from "./RecipeSummary";
import type { FullRecipes } from "~/utils/recipes.server";

const RecipeFeed = ({ recipeList }: { recipeList: FullRecipes }) => {
  return (
    <Transition
      enter="transition-all transform  ease-in-out  duration-500"
      enterFrom=" opacity-0 translate-y-64 "
      enterTo=" opacity-100 translate-y-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      className="z-0"
      leaveTo="opacity-0"
      appear
      show
    >
      <div className="grid z-0 relative grid-flow-row  auto-rows-max gap-y-2 max-w-2xl mx-auto mt-4 mb-16">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((r) => (
            <RecipeSummary
              key={r.id}
              id={r.id}
              name={r.name}
              category={r.category}
              user={r.author!.firstName[0] + r.author!.lastName[0]}
            />
          ))
        ) : (
          <div className="w-full  text-lg ">Nothing Found</div>
        )}
      </div>
    </Transition>
  );
};

export default RecipeFeed;
