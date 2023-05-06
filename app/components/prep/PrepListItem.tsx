import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import IconButton from "../buttons/IconButton";

import PrepListInput from "./PrepListInput";

interface Props {
  name: string;
  unit: string;
}

const PrepListItem = ({ name, unit }: Props) => {
  return (
    <div className="  w-full  bg-neutral-100 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-2  grid grid-cols-12 justify-start items-center  px-2  dark:bg-neutral-800 dark:border-neutral-700">
      <div className=" font-light col-span-7 flex gap-2 items-center">
        <IconButton
          Icon={CheckBadgeIcon}
          buttonName="complete"
          action={() => console.log("complete")}
        />
        <div>
          <h5 className="text-lg text-neutral-700 dark:text-neutral-100 ">
            {name}
          </h5>
          <h6 className="text-md text-neutral-700 dark:text-neutral-100 ">
            {`(${unit})`}
          </h6>
        </div>
      </div>
      <div className=" gap-2  col-span-5 flex ">
        <PrepListInput padding={2} fieldName="Inv" identifier="inv" />
        <PrepListInput padding={2} fieldName="Prep" identifier="prep" />
      </div>
    </div>
  );
};

export default PrepListItem;
