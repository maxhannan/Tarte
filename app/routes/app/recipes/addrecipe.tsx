import { CheckCircleIcon, PlusIcon } from "@heroicons/react/24/solid";
import IconTextField from "~/components/forms/IconTextField";
import SelectBox from "~/components/forms/SelectBox";
import AppBar from "~/components/navigation/AppBar";

const AddRecipe = () => {
  return (
    <div>
      <AppBar
        page="Add a Recipe"
        buttons={[
          {
            Icon: CheckCircleIcon,
            buttonName: "Submit",
            action: () => console.log("Save"),
          },
        ]}
      />
      <div className="grid grid-cols-2 mt-2 gap-y-4 gap-x-2">
        <div className="col-span-2">
          <IconTextField Icon={PlusIcon} fieldName="Name" identifier="name" />
        </div>
        <div className="col-span-2 relative">
          <SelectBox />
        </div>
        <IconTextField Icon={PlusIcon} fieldName="Name" identifier="name" />
        <IconTextField Icon={PlusIcon} fieldName="Name" identifier="name" />
      </div>
    </div>
  );
};

export default AddRecipe;
