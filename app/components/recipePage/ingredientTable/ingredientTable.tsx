import type { Ingredient } from "@prisma/client";
import IngredientRow from "./IngredientRow";

const IngredientTable = ({ ingredients }: { ingredients: Ingredient[] }) => {
  return (
    <div className=" border border-neutral-300 dark:border-neutral-700 rounded-xl font-light   text-lg text-neutral-700 dark:text-neutral-100 ">
      <table className="w-full mx-auto overflow-hidden table-fixed rounded-xl ">
        <thead className="dark:bg-neutral-800 bg-neutral-200 border-b border-neutral-300 dark:border-neutral-700 ">
          <tr className="text-left ">
            <th className="px-6 py-4 text-lg font-semibold w-7/12 ">
              {" "}
              Ingredient{" "}
            </th>
            <th className="px-3 py-4 text-lg font-semibold "> Qty </th>
          </tr>
        </thead>
        <tbody className="">
          {ingredients.length > 0 &&
            ingredients.map((i) => (
              <IngredientRow
                key={i.id}
                ingredient={i.ingredient}
                unit={i.unit}
                amt={i.qty ? Number(i.qty) : undefined}
                link={i.linkId ? i.linkId : undefined}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientTable;
