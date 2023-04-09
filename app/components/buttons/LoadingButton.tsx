import type { ElementType } from "react";
import Spinner from "../status/smallSpinner";

interface Props {
  loading: boolean;
  buttonText: string;
  loadingText?: string;
  Icon: ElementType;
  buttonName: string;
  type?: "button" | "submit" | "reset";
  action?: () => void;
}

const LoadingButton = ({
  loading,
  Icon,
  buttonName,
  type = "button",
  action,
  buttonText,
  loadingText = "Loading...",
}: Props) => {
  return (
    <button
      type={type}
      name={buttonName}
      onClick={action ? action : undefined}
      className="text-neutral-700 inline-flex items-center justify-between px-4 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 h-12 text-xl rounded-xl rounded-tl-md border dark:border-neutral-700 border-neutral-300 hover:bg-violet-500"
    >
      {loading ? (
        <>
          {loadingText} <Spinner />
        </>
      ) : (
        <>
          {buttonText} <Icon className="w-6 h-6" />
        </>
      )}
    </button>
  );
};

export default LoadingButton;
