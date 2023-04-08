import type { Ingredient } from "@prisma/client";
import IngredientRow from "./IngredientRow";

const IngredientTable = ({ ingredients }: { ingredients: Ingredient[] }) => {
  return (
    <div className="dark:bg-neutral-800 bg-neutral-200 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-lg text-neutral-700 dark:text-neutral-100 ">
      <table className="w-full max-w-4xl mx-auto overflow-hidden table-fixed   rounded-lg">
        <thead className="bg-neutral-700 text-neutral-200">
          <tr className="text-left ">
            <th className="px-6 py-4 text-lg font-semibold w-7/12 ">
              {" "}
              Ingredient{" "}
            </th>
            <th className="px-3 py-4 text-lg font-semibold "> Qty </th>
          </tr>
        </thead>
        <tbody>
          {ingredients.length > 0 &&
            ingredients.map((i) => (
              <IngredientRow
                key={i.id}
                ingredient={i.ingredient}
                unit={i.unit}
                amt={Number(i.qty)}
                link={i.linkId ? i.linkId : undefined}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientTable;
