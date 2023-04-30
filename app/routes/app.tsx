import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import LoadingButton from "~/components/buttons/LoadingButton";

import BottomNav from "~/components/navigation/BottomNav";
import { getUser, requireUserId } from "~/utils/auth.server";
export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request);

  return user;
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname.split("/")[2]);
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <div className=" px-4">
      <div className="container max-w-2xl mx-auto flex justify-center items-center flex-col text-neutral-700 gap-3 dark:text-neutral-200 text-lg h-screen w-full">
        <div className="w-2/3 flex flex-col gap-2">
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
        <div className="w-2/3 flex">
          <LoadingButton
            buttonText="Go Back"
            buttonName="back"
            action={() => navigate("/app/recipes", { replace: true })}
            Icon={ArrowUturnLeftIcon}
            loading={navigation.state === "loading"}
          />
        </div>
      </div>
      <BottomNav page={page} setPage={setPage} />
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname.split("/")[2]);
  useEffect(() => {
    setPage(location.pathname.split("/")[2]);
  }, [location]);
  return (
    <div className=" px-3 ">
      <div className="container  mx-auto">
        <Outlet />
      </div>
      <BottomNav page={page} setPage={setPage} />
    </div>
  );
};

export default App;
