import { ArrowLongRightIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Form } from "@remix-run/react";
import CustomTextInput from "~/components/forms/CustomTextInput";

const RegisterPage = () => {
  return (
    <Form className="container max-w-md px-4 mx-auto flex flex-col gap-4">
      <h2 className="text-4xl dark:text-neutral-200 text-neutral-700 flex items-center justify-between">
        Sign Up <UserCircleIcon className="w-10 h-10" />
      </h2>
      <div className="w-full flex gap-2">
        <CustomTextInput identifier="firstName" fieldName="First Name" />
        <CustomTextInput identifier="lastName" fieldName="Last Name" />
      </div>
      <CustomTextInput identifier="username" fieldName="Username" />
      <CustomTextInput identifier="email" fieldName="Email" type="email" />
      <CustomTextInput
        identifier="password"
        fieldName="Password"
        type="password"
      />
      <CustomTextInput
        identifier="password"
        fieldName="Confirm Password"
        type="password"
      />
      <button
        type="submit"
        className="text-neutral-700 inline-flex items-center justify-between px-4 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 h-12 text-xl rounded-xl rounded-tl-md border dark:border-neutral-700 border-neutral-300 hover:bg-green-500"
      >
        Register <ArrowLongRightIcon className="w-6 h-6" />
      </button>
    </Form>
  );
};

export default RegisterPage;
