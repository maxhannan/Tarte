import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import PrepListInput from "./PrepListInput";
import { PrepItem } from "~/routes/app/prep/$id";

interface Props {
  name: string;
  unit: string;
  prepItem: PrepItem;
  handleChange: (field: string, id: string, newVal: number | undefined) => void;
}

const PrepListItem = ({ name, unit, handleChange, prepItem }: Props) => {
  return (
    <div className="  max-w-full  bg-neutral-100 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-2 px-2 grid grid-cols-10 gap-1   dark:bg-neutral-800 dark:border-neutral-700">
      <div className=" font-light col-span-5 lg:col-span-7 flex gap-2 items-center mr-2">
        <div>
          <h5 className="text-sm lg:text-lg text-neutral-700 dark:text-neutral-100 ">
            {prepItem.name}
          </h5>
          <h6 className="text-sm text-neutral-700 dark:text-neutral-100 ">
            {`(${prepItem.unit})`}
          </h6>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
        <input
          name={"inv"}
          type="number"
          className={`rounded-xl bg-opacity-50 dark:bg-opacity-50  text-neutral-800 dark:text-neutral-50 border-neutral-300 dark:border-neutral-700  dark:bg-neutral-800 bg-neutral-200 rounded-bl-xl focus:ring-neutral-500  border relative    h-10 w-full p-2 pl-2 text-base font-light appearance-none  focus:ring-2 focus:outline-none focus:border-none     placeholder-neutral-500   dark:placeholder-neutral-400 `}
          placeholder={"Inv"}
          value={prepItem.inv?.toString()}
          onChange={(e) => {
            handleChange("inv", prepItem.id, parseInt(e.target.value));
          }}
        />
      </div>
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
        <input
          name={"prep"}
          type="number"
          className={`rounded-xl bg-opacity-50 dark:bg-opacity-50  text-neutral-800 dark:text-neutral-50 border-neutral-300 dark:border-neutral-700  dark:bg-neutral-800 bg-neutral-200 rounded-bl-xl focus:ring-neutral-500  border relative    h-10 w-full p-2 pl-2 text-base font-light appearance-none  focus:ring-2 focus:outline-none focus:border-none     placeholder-neutral-500   dark:placeholder-neutral-400 `}
          placeholder={"Prep"}
          value={prepItem.prep?.toString()}
          onChange={(e) => {
            handleChange("prep", prepItem.id, parseInt(e.target.value));
          }}
        />
      </div>
      <div className="col-span-1  flex items-center justify-center text-green-500 dark:text-green-400">
        <CheckBadgeIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default PrepListItem;
