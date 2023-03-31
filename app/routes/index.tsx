import {
  ArrowUturnLeftIcon,
  UserGroupIcon,
  CalculatorIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import IconButton from "~/components/buttons/IconButton";
import IconTextField from "~/components/forms/IconTextField";
import AppBar from "~/components/navigation/AppBar";
import BottomNav from "~/components/navigation/BottomNav";

export default function Index() {
  return (
    <div className="h-screen container mx-auto max-w-2xl py-20  px-3  ">
      <AppBar />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
        <IconTextField
          Icon={ArrowUturnLeftIcon}
          fieldName="Search For Beakers"
          identifier="beakers"
        />
        <IconTextField
          Icon={UserGroupIcon}
          fieldName="Search For Beakers"
          identifier="beakers"
        />
        <IconTextField
          Icon={CalculatorIcon}
          fieldName="Search For Beakers"
          identifier="beakers"
        />
        <IconTextField
          Icon={CalendarDaysIcon}
          fieldName="Search For Beakers"
          identifier="beakers"
        />
        <div>
          <IconButton Icon={ArrowUturnLeftIcon} buttonName={"Go Back"} />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
