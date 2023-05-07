import { useNavigation } from "@remix-run/react";
import SlideUpTransition from "~/components/animations/slideUp";

import Spinner from "~/components/status/smallSpinner";

import PrepListSummary from "~/components/prep/PrepListSummary";
import { PrepCalendar } from "~/components/prep/PrepCalendar";
import SlideDownTransition from "~/components/animations/slideDown";
import SearchBar from "~/components/forms/SearchBar";
import IconButton from "~/components/buttons/IconButton";
import { ArrowRightIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CustomModal from "~/components/displays/CustomModal";
import SelectBox from "~/components/forms/SelectBox";
import { Dialog } from "@headlessui/react";
import ComboBoxCustom from "~/components/forms/Combobox";
import { ArrowBigRight } from "lucide-react";
import LoadingButton from "~/components/buttons/LoadingButton";

const PrepPage = () => {
  const navigation = useNavigation();
  const [openDialog, setOpenDialog] = useState(false);
  if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size={14} />
      </div>
    );
  }
  return (
    <div className=" container mx-auto max-w-4xl">
      <SlideDownTransition>
        <nav className=" flex py-3  mx-auto max-h-full items-center justify-between  duration-300 bg-neutral-100 dark:bg-neutral-900   w-full top-0 left-0  ">
          <h1
            className={`text-4xl mr-6 text-neutral-700 dark:text-neutral-100`}
          >
            Prep
          </h1>

          <div className="grow flex justify-end gap-2">
            <PrepCalendar />
            <IconButton
              Icon={PlusCircleIcon}
              action={() => setOpenDialog(true)}
              buttonName="Add list"
            />
          </div>
        </nav>
      </SlideDownTransition>
      <CustomModal isOpen={openDialog} setIsOpen={setOpenDialog}>
        <div className=" p-4 flex flex-col  gap-2">
          <div className="w-full flex gap-2  ">
            <div className="grow">
              <ComboBoxCustom
                name="Select Template"
                options={[{ id: "1", value: "PM Grill" }]}
                placeholder="Select Template"
              />
            </div>
            <div className="flex-none">
              <LoadingButton
                buttonText="Create"
                Icon={ArrowRightIcon}
                action={() => setOpenDialog(true)}
                buttonName="Add list"
              />
            </div>
          </div>
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-neutral-700"></div>
            <span className="flex-shrink mx-4 text-neutral-400">Or</span>
            <div className="flex-grow border-t border-neutral-700"></div>
          </div>
          <div className="w-full flex gap-2  ">
            <div className="grow">
              <LoadingButton
                buttonText="Create Custom List"
                Icon={ArrowRightIcon}
                action={() => setOpenDialog(true)}
                buttonName="Add list"
              />
            </div>
          </div>
        </div>
      </CustomModal>
      <div className="flex flex-col gap-3 ">
        <SearchBar
          handleChange={() => (e: string) => console.log(e)}
          value={""}
        />

        <div className="flex flex-col gap-3  ">
          <SlideUpTransition>
            <div className="grid z-0 relative grid-flow-row  auto-rows-max gap-y-2  mx-auto mb-28 ">
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
              <PrepListSummary id="1" name="Pm Grill" />
            </div>
          </SlideUpTransition>
        </div>
      </div>
    </div>
  );
};

export default PrepPage;
