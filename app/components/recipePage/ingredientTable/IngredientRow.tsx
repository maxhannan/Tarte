import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";

const IngredientRow = ({
  ingredient,
  amt,
  unit,
  link,
}: {
  ingredient: string;
  amt?: number;
  unit: string;
  link?: string;
}) => {
  const navigate = useNavigate();

  return (
    <tr className="max-w-xs break-words ">
      <td style={{ maxWidth: "100px" }} className="px-6 py-4 break-all">
        {link ? (
          <p
            onClick={() => navigate(`/app/recipes/${link}`)}
            className="break-words text-green-500 underline hover:text-green-700 cursor-pointer flex items-center gap-2"
          >
            {ingredient} <ArrowLongRightIcon className="w-6 h-6" />
          </p>
        ) : (
          <p className="break-normal">{ingredient}</p>
        )}
      </td>
      <td className="px-3 py-2">
        <div className="flex  ">
          <p>
            {amt && amt + "  "}
            <b>{unit}</b>
          </p>
        </div>
      </td>
    </tr>
  );
};

export default IngredientRow;
