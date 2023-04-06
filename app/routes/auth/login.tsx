import { ArrowLongRightIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import LoadingButton from "~/components/buttons/LoadingButton";

import CustomTextInput from "~/components/forms/CustomTextInput";
import Spinner from "~/components/status/smallSpinner";

import { getUser, login } from "~/utils/auth.server";
import { validateName, validatePasswordLogin } from "~/utils/validators.server";

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect("/app/recipes") : null;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username") as string;
  const password = form.get("password") as string;

  const errors = {
    username: validateName(username),
    password: validatePasswordLogin(password),
  };
  if (Object.values(errors).some(Boolean))
    return json(
      {
        errors,
        fields: { username, password },
        form: action,
      },
      { status: 400 }
    );

  return await login({ username, password });
};

const LoginPage = () => {
  const navigation = useNavigation();
  const actionData = useActionData();
  console.log(actionData);

  if (navigation.state === "loading") {
    return <Spinner size={14} />;
  }
  return (
    <Form
      method="post"
      className="container max-w-md px-4 mx-auto flex flex-col gap-4"
    >
      <h2 className="text-4xl dark:text-neutral-200 text-neutral-800 flex items-center justify-between">
        Login <UserCircleIcon className="w-10 h-10" />
      </h2>
      <div className="text-xs font-semibold tracking-wide text-red-500 w-full">
        {actionData?.error?.form || ""}
      </div>
      <CustomTextInput
        identifier="username"
        fieldName="Username"
        error={actionData?.errors?.username}
      />
      <CustomTextInput
        identifier="password"
        fieldName="Password"
        type="password"
        error={actionData?.errors?.password}
      />
      <LoadingButton
        loading={navigation.state === "submitting"}
        type="submit"
        buttonName="Login"
        buttonText="Login"
        loadingText="Logging in..."
        Icon={ArrowLongRightIcon}
      />
    </Form>
  );
};

export default LoginPage;
