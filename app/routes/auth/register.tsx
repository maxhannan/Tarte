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
import { Register, getUser } from "~/utils/auth.server";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "~/utils/validators.server";

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect("/app/recipes") : null;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const confirmPassword = form.get("confirmPassword") as string;
  const username = form.get("username") as string;
  const firstName = form.get("firstName") as string;
  const lastName = form.get("lastName") as string;

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password, confirmPassword),
    firstName: validateName(firstName || ""),
    lastName: validateName(lastName || ""),
  };
  if (Object.values(errors).some(Boolean)) {
    console.log(errors);
    return json(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action,
      },
      { status: 400 }
    );
  }
  console.log({
    email,
    password,
    confirmPassword,
    username,
    firstName,
    lastName,
  });
  return await Register({ email, password, username, firstName, lastName });
};

const RegisterPage = () => {
  const actionData = useActionData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner size={14} />;
  }
  return (
    <Form
      method="post"
      className="container max-w-md px-4 mx-auto flex flex-col gap-4"
    >
      <h2 className="text-4xl dark:text-neutral-200 text-neutral-700 flex items-center justify-between">
        Sign Up <UserCircleIcon className="w-10 h-10" />
      </h2>
      <div className="w-full flex gap-2">
        <CustomTextInput
          identifier="firstName"
          fieldName="First Name"
          error={actionData?.errors?.firstName}
        />
        <CustomTextInput
          identifier="lastName"
          fieldName="Last Name"
          error={actionData?.errors?.lastName}
        />
      </div>
      <CustomTextInput
        identifier="username"
        fieldName="Username"
        error={actionData?.errors?.username}
      />
      <CustomTextInput
        identifier="email"
        fieldName="Email"
        type="email"
        error={actionData?.errors?.email}
      />
      <CustomTextInput
        identifier="password"
        fieldName="Password"
        type="password"
        error={actionData?.errors?.password}
      />
      <CustomTextInput
        identifier="confirmPassword"
        fieldName="Confirm Password"
        type="password"
        error={actionData?.errors?.password}
      />
      <LoadingButton
        loading={navigation.state === "submitting"}
        type="submit"
        buttonName="register"
        buttonText="Sign Up"
        loadingText="Signing up..."
        Icon={ArrowLongRightIcon}
      />
    </Form>
  );
};

export default RegisterPage;
