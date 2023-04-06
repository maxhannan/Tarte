import { Outlet } from "@remix-run/react";

const AuthLayout = () => {
  return (
    <div className=" container max-w-2xl mx-auto h-screen w-screen flex justify-center pt-48">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
