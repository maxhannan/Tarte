import { useState } from "react";

const IngredientRow = ({
  ingredient,
  amt,
  unit,
  last = false,
}: {
  ingredient: string;
  amt?: number;
  unit: string;
  last?: boolean;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <tr
      onClick={() => setChecked(!checked)}
      className={`${checked && "bg-green-500"} bg-opacity-70  `}
    >
      <th
        scope="row"
        className={`${
          last && "rounded-bl-3xl"
        }  px-6 py-4  font-light text-gray-900 whitespace-nowrap dark:text-white`}
      >
        {ingredient}
      </th>
      <td className={`${last && "rounded-br-3xl"}   px-6 py-4`}>
        {amt ? amt + " " + unit : unit}
      </td>
    </tr>
  );
};

export default IngredientRow;
