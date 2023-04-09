export interface Props {
  content: string;
}

const Chip = (props: Props) => {
  return (
    <div
      key={props.content}
      className=" bg-violet-500 p-2 px-4 rounded-r-2xl  rounded-l-md rounded-bl-2xl text-base text-neutral-100 dark:text-neutral-100 "
    >
      {props.content}
    </div>
  );
};

export default Chip;
