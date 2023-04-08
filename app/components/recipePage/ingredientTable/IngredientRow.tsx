import { useState } from "react";

const IngredientRow = ({
  ingredient,
  amt,
  unit,
}: {
  ingredient: string;
  amt?: number;
  unit: string;
}) => {
  return (
    <tr className="max-w-xs break-words ">
      <td style={{ maxWidth: "100px" }} className="px-6 py-4 break-all">
        <p className="break-all">{ingredient}</p>
      </td>
      <td className="px-3 py-2">
        <div className="flex  ">
          <p>
            {amt + "  "}
            <b>{unit}</b>
          </p>
        </div>
      </td>
    </tr>
  );
};

export default IngredientRow;
