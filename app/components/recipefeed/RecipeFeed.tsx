import RecipeSummary from "./RecipeSummary";
import type { FullRecipes } from "~/utils/recipes.server";
import SlideUpTransition from "../animations/slideUp";

const RecipeFeed = ({ recipeList }: { recipeList: FullRecipes }) => {
  return (
    <SlideUpTransition>
      <div className="grid z-0 relative grid-flow-row  auto-rows-max gap-y-2 max-w-2xl mx-auto mt-3 mb-16">
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
          <div className="w-full  text-xl dark:text-neutral-200 text-neutral-700 ">
            Nothing Found
          </div>
        )}
      </div>
    </SlideUpTransition>
  );
};

export default RecipeFeed;
