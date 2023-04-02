import { Transition } from "@headlessui/react";
import AppBar from "~/components/navigation/AppBar";
import RecipeStep from "~/components/recipePage/RecipeStep";

const Allergens = [
  "Not Vegetarian",
  "Not Vegan",
  "Dairy",
  "Eggs",
  "Fish",
  "Shellfish",
];
const RecipePage = () => {
  return (
    <div className="mb-28">
      <AppBar page={"Compressed Watermelon"} textSize="text-2xl" />
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <div className="dark:bg-neutral-800 bg-neutral-200 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-lg text-neutral-700 dark:text-neutral-100 ">
          <table className="w-full text-base  text-left ">
            <thead className="text-lg  bg-neutral-700 text-neutral-100  border-none   ">
              <tr>
                <th
                  scope="col"
                  className="px-6  font-light py-3 border-none  rounded-tl-md"
                >
                  Ingredient
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  font-light border-none  rounded-tr-3xl"
                >
                  Qty
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4  font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Olive Oil
                </th>
                <td className="px-6 py-4">TT</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4  font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Butter
                </th>
                <td className="px-6 py-4">2000g</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4  font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Milk Sponge
                </th>
                <td className="px-6 py-4">792g</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4  font-light  text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Chorizo Oil
                </th>
                <td className="px-6 py-4 ">200g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Transition>
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <div className="flex mt-4 gap-2 flex-wrap">
          {Allergens.map((a) => (
            <div
              key={a}
              className=" bg-red-500 p-2 px-3 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-base text-neutral-100 dark:text-neutral-100 "
            >
              {a}
            </div>
          ))}
        </div>
      </Transition>
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <RecipeStep
          stepNum="One"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quos est totam voluptates veniam magni fugiat ad. Deleniti fuga ex
            rem? Deleniti alias labore, similique maxime expedita modi quo
            ratione."
        />
        <RecipeStep
          stepNum="Two"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <RecipeStep
          stepNum="Three"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <RecipeStep
          stepNum="Four"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </Transition>
    </div>
  );
};

export default RecipePage;
