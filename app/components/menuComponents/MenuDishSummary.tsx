import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "@remix-run/react";

interface MenuDishSummaryProps {
  id: string;
  name: string;
  category: string;
  user: string;
}

const MenuDishSummary = ({
  id,
  name,
  category,
  user,
}: MenuDishSummaryProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => console.log(`/app/menus/${id}`)}
      className="  w-full max-h-full border-neutral-300 border  bg-neutral-200 rounded-r-2xl rounded-l-md rounded-bl-2xl py-4   flex justify-start items-center  px-4 hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:border-neutral-700"
    >
      <div className=" px-2 ">
        <h5 className="text-xl  text-neutral-700 dark:text-neutral-100">
          {name}
        </h5>
      </div>
      <div className=" ml-auto ">
        <ArrowRightIcon className="text-neutral-800 dark:text-neutral-200 w-6 h-6" />
      </div>
    </div>
  );
};

export default MenuDishSummary;
