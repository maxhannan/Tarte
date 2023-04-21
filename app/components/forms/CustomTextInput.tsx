import { ChangeEvent, useEffect, useState } from "react";

const CustomTextInput = ({
  identifier,
  fieldName,
  type = "text",
  error,
  defaultValue,
  disabled = false,
  required = true,
  changeHandler,
}: {
  identifier: string;
  fieldName: string;
  type?: string;
  error?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(defaultValue);
    } else {
      setValue("");
    }
  }, [defaultValue]);
  return (
    <>
      <div className="w-full flex flex-col justify-start gap-2">
        {/* hidden input allows form submission when primary input is disabled */}
        {disabled && <input type="hidden" name={identifier} value={value} />}
        <input
          id={identifier}
          name={identifier}
          type={type}
          className={`rounded-r-xl rounded-l-md bg-opacity-50 dark:bg-opacity-50  dark:bg-neutral-800 bg-neutral-200 rounded-bl-xl focus:ring-neutral-500  border relative    h-12 w-full p-2 pl-4 text-xl  appearance-none  focus:ring-2 focus:outline-none focus:border-none     placeholder-neutral-500   dark:placeholder-neutral-400   ${
            disabled
              ? "border-2 border-violet-500 text-violet-500 "
              : " text-neutral-800 dark:text-neutral-50 border-neutral-300 dark:border-neutral-700"
          } `}
          placeholder={fieldName}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (changeHandler) {
              changeHandler(e);
            }
          }}
          required={required}
          disabled={disabled}
        />

        {error && (
          <div className="text-xs font-semibold tracking-wide text-red-500 w-full">
            {error || ""}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomTextInput;
