import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import PrepListInput from "./PrepListInput";

interface Props {
  name: string;
  unit: string;
}

const PrepListItem = ({ name, unit }: Props) => {
  return (
    <div className="  max-w-full  bg-neutral-100 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-2 px-2 grid grid-cols-10 gap-1   dark:bg-neutral-800 dark:border-neutral-700">
      <div className=" font-light col-span-5 flex gap-2 items-center mr-2">
        <div>
          <h5 className="text-sm text-neutral-700 dark:text-neutral-100 ">
            {name}
          </h5>
          <h6 className="text-sm text-neutral-700 dark:text-neutral-100 ">
            {`(${unit})`}
          </h6>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <PrepListInput padding={2} fieldName="Inv" identifier="inv" />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <PrepListInput padding={2} fieldName="Prep" identifier="prep" />
      </div>
      <div className="col-span-1  flex items-center justify-center ">
        <CheckBadgeIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default PrepListItem;
