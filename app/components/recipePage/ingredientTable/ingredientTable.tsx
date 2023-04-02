import IngredientRow from "./IngredientRow";

const IngredientTable = () => {
  return (
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
          <IngredientRow ingredient="Olive Oil" amt={100} unit="g" />
          <IngredientRow ingredient="Butter" amt={100} unit="g" />
          <IngredientRow ingredient="Milk Sponge" amt={100} unit="g" />
          <IngredientRow
            ingredient="Olive Oil"
            amt={100}
            unit="g"
            last={true}
          />
        </tbody>
      </table>
    </div>
  );
};

export default IngredientTable;
