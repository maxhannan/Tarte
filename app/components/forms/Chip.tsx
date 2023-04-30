export interface Props {
  content: string;
}

const Chip = (props: Props) => {
  return (
    <div
      key={props.content}
      className="border border-violet-500 p-1 px-3 rounded-xl  text-base text-violet-700 dark:text-violet-500 "
    >
      {props.content}
    </div>
  );
};

export default Chip;
