import CustomTextInput from "../forms/CustomTextInput";

interface Props {
  name: string;
  unit: string;
}

const PrepListItem = ({ name, unit }: Props) => {
  return (
    <div className="  w-full max-h-full bg-neutral-100 border-neutral-300 border bg-opacity-50 dark:bg-opacity-50   rounded-xl  py-4  grid grid-cols-12 justify-start items-center  px-4 hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:border-neutral-700">
      <div className=" font-light col-span-6">
        <h5 className="text-lg text-neutral-700 dark:text-neutral-100 ">
          {name}
        </h5>
        <h6 className="text-md text-neutral-700 dark:text-neutral-100 ">
          {`(${unit})`}
        </h6>
      </div>
      <div className=" ml-auto gap-2 pl-2 col-span-6 flex ">
        <CustomTextInput fieldName="Inv" identifier="inv" />
        <CustomTextInput fieldName="Prep" identifier="prep" />
      </div>
    </div>
  );
};

export default PrepListItem;
