import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";

interface MenuDishSummaryProps {
  id: string;
  name: string;
}

const MenuDishSummary = ({ id, name }: MenuDishSummaryProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/app/menus/dishes/${id}`)}
      className="  w-full max-h-full border-neutral-300 border bg-opacity-50 dark:bg-opacity-50  bg-neutral-100 rounded-xl  py-4   flex justify-start items-center  pl-4 pr-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:border-neutral-700"
    >
      <div className=" font-light mr-2">
        <h5 className="text-lg  text-neutral-700 dark:text-neutral-100">
          {name}
        </h5>
      </div>
      <div className=" ml-auto ">
        <ArrowRightIcon className="text-neutral-800 dark:text-neutral-200 w-5 h-5" />
      </div>
    </div>
  );
};

export default MenuDishSummary;
