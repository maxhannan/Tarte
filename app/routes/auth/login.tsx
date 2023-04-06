import { ArrowLongRightIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

import CustomTextInput from "~/components/forms/CustomTextInput";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  console.log(username, password);
  return null;
};

const LoginPage = () => {
  return (
    <Form
      method="post"
      className="container max-w-md px-4 mx-auto flex flex-col gap-4"
    >
      <h2 className="text-4xl dark:text-neutral-200 text-neutral-800 flex items-center justify-between">
        Login <UserCircleIcon className="w-10 h-10" />
      </h2>
      <CustomTextInput identifier="username" fieldName="Username" />
      <CustomTextInput
        identifier="password"
        fieldName="Password"
        type="password"
      />
      <button
        type="submit"
        className="text-neutral-700 inline-flex items-center justify-between px-4 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 h-12 text-xl rounded-xl rounded-tl-md border dark:border-neutral-700 border-neutral-300 hover:bg-green-500"
      >
        Login <ArrowLongRightIcon className="w-6 h-6" />
      </button>
    </Form>
  );
};

export default LoginPage;
