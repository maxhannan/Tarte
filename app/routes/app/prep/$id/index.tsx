import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { ActionFunction } from "@remix-run/node";
import { Form, useNavigate } from "@remix-run/react";
import { useState } from "react";
import CustomDisclosure from "~/components/displays/customDisclosure";

import SearchBar from "~/components/forms/SearchBar";
import AppBar from "~/components/navigation/AppBar";
import PrepListItem from "~/components/prep/PrepListItem";

export const action: ActionFunction = async ({ request }) => {
  console.log("hello world");
  return null;
};

export type PrepItem = {
  inv: number | undefined;
  prep: number | undefined;
  id: string;
  name: string;
  unit: string;
};

const PrepListPage = () => {
  const navigate = useNavigate();

  const [prepItems, setPrepItems] = useState<PrepItem[]>([
    {
      inv: undefined,
      prep: undefined,
      id: "gfhjdkls",
      name: "Hummus Base",
      unit: "Quarts",
    },
  ]);

  const handleChange = (
    field: string,
    id: string,
    newVal: number | undefined
  ) => {
    const newItems = prepItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [field]: newVal,
        };
      }
      return item;
    });
    console.log({ newItems });
    setPrepItems(newItems);
  };
  return (
    <div className=" container mx-auto mb-28 max-w-4xl ">
      <AppBar
        page={"PM Grill"}
        buttons={[
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "Add Recipe",
            action: () => navigate(-1),
          },
        ]}
      />
      <SearchBar
        handleChange={() => (e: string) => console.log(e)}
        value={""}
      />
      <Form>
        <div className="w-full grid  gap-2 mt-2">
          <div className="flex flex-col gap-2">
            <CustomDisclosure name={"Hummus"}>
              <div className="  max-w-full  bg-neutral-100 border-neutral-300  bg-opacity-50 dark:bg-opacity-50   rounded-xl   px-2 grid grid-cols-10  gap-1   dark:bg-neutral-800 ">
                <div className=" font-light col-span-5 lg:col-span-7 flex gap-2 items-center mr-1">
                  <div>
                    <h5 className="text-lg text-neutral-700 dark:text-neutral-100 ">
                      Task
                    </h5>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center justify-start pl-1   text-lg text-neutral-700 dark:text-neutral-100 font-light">
                  <span>Inv</span>
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center justify-start pl-1  text-lg text-neutral-700 dark:text-neutral-100 font-light">
                  <span>Prep</span>
                </div>
              </div>

              <PrepListItem
                name={"Hummus Base"}
                unit="Quarts"
                prepItem={prepItems[0]}
                handleChange={handleChange}
              />
            </CustomDisclosure>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PrepListPage;
