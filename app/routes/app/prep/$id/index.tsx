import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import { useState } from "react";

import CustomDisclosure from "~/components/displays/customDisclosure";

import SearchBar from "~/components/forms/SearchBar";
import AppBar from "~/components/navigation/AppBar";
import PrepListItem from "~/components/prep/PrepListItem";
import Spinner from "~/components/status/smallSpinner";
import {
  PrepListSummary,
  getPrepListById,
  updateTask,
} from "~/utils/prepLists";

export const loader: LoaderFunction = async ({ request, params }) => {
  const id = params.id;
  if (id) {
    const prepList = await getPrepListById(id);
    return prepList;
  } else {
    return redirect("/app/prep");
  }
};

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id") as string;
  const inv = data.get("inv") as string;
  const prep = data.get("prep") as string;
  const updatedTask = await updateTask(id, { onHand: inv, prepQty: prep });
  console.log({ id, inv, prep });
  return updatedTask;
};

export type PrepItem = {
  completed: boolean;
  id: string;
  onHand: string | null;
  prepQty: string | null;
  prepUnit: string | null;
  linkRecipeId: string | null;
  name: string;
};

const PrepListPage = () => {
  const navigate = useNavigate();

  const navigation = useNavigation();
  const prepList = useLoaderData() as PrepListSummary;
  console.log({ prepList });
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size={14} />
      </div>
    );
  }
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
            {prepList?.taskGroups.map((tg) => (
              <CustomDisclosure key={tg.id} name={tg.name}>
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

                {tg.tasks.map((item) => (
                  <PrepListItem key={item.id} prepItem={item} />
                ))}
              </CustomDisclosure>
            ))}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PrepListPage;
