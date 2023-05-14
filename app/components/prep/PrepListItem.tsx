import {
  ArrowLongRightIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

import PrepListInput from "./PrepListInput";
import { PrepItem } from "~/routes/app/prep/$id";
import { Form, NavLink, useFetcher } from "@remix-run/react";
import { useRef } from "react";

interface Props {
  prepItem: PrepItem;
}

const PrepListItem = ({ prepItem }: Props) => {
  const fetcher = useFetcher();

  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit() {
    fetcher.submit(formRef.current!);
  }
  return (
    <fetcher.Form method="POST" ref={formRef}>
      <div className="  max-w-full  bg-neutral-100 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-2 px-2 grid grid-cols-10 gap-1   dark:bg-neutral-800 dark:border-neutral-700">
        <div className=" font-light col-span-5 lg:col-span-7 flex gap-2 items-center mr-2">
          <div>
            {prepItem.linkRecipeId ? (
              <NavLink
                to={`/app/recipes/${prepItem.linkRecipeId}`}
                className="flex gap-2 items-center cursor-pointer hover:opacity-80"
              >
                <h5 className="text-sm lg:text-lg text-violet-500 dark:text-violet-400 ">
                  {prepItem.name}
                </h5>
                <ArrowLongRightIcon className="text-violet-500 dark:text-violet-400  w-5 h-5" />
              </NavLink>
            ) : (
              <h5 className="text-sm lg:text-lg text-neutral-700 dark:text-neutral-100 ">
                {prepItem.name}
              </h5>
            )}

            <h6 className="text-sm text-neutral-700 dark:text-neutral-100 ">
              {`(${prepItem.prepUnit})`}
            </h6>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
          <input type="hidden" name={"id"} value={prepItem.id} />
          <input
            name={"inv"}
            type="number"
            inputMode="numeric"
            className={`rounded-xl bg-opacity-50 dark:bg-opacity-50  text-neutral-800 dark:text-neutral-50 border-neutral-300 dark:border-neutral-700  dark:bg-neutral-800 bg-neutral-200 rounded-bl-xl focus:ring-neutral-500  border relative    h-10 w-full p-2 pl-2 text-base font-light appearance-none  focus:ring-2 focus:outline-none focus:border-none     placeholder-neutral-500   dark:placeholder-neutral-400 `}
            placeholder={"Inv"}
            defaultValue={prepItem.onHand ? prepItem.onHand : ""}
            onBlur={(e) => {
              handleSubmit();
            }}
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
          <input
            name={"prep"}
            type="number"
            inputMode="numeric"
            className={`rounded-xl bg-opacity-50 dark:bg-opacity-50  text-neutral-800 dark:text-neutral-50 border-neutral-300 dark:border-neutral-700  dark:bg-neutral-800 bg-neutral-200 rounded-bl-xl focus:ring-neutral-500  border relative    h-10 w-full p-2 pl-2 text-base font-light appearance-none  focus:ring-2 focus:outline-none focus:border-none     placeholder-neutral-500   dark:placeholder-neutral-400 `}
            placeholder={"Prep"}
            defaultValue={prepItem.prepQty ? prepItem.prepQty : ""}
            onChange={(e) => {
              handleSubmit();
            }}
          />
        </div>
        <div className="col-span-1  flex items-center justify-center text-green-500 dark:text-green-400">
          <CheckBadgeIcon className="w-8 h-8" />
        </div>
      </div>
    </fetcher.Form>
  );
};

export default PrepListItem;
