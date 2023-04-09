import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";

import BottomNav from "~/components/navigation/BottomNav";
import { getUser, requireUserId } from "~/utils/auth.server";
export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request);

  return user;
};

const App = () => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname.split("/")[2]);

  return (
    <div className=" px-4">
      <div className="container max-w-2xl mx-auto">
        <Outlet />
      </div>
      <BottomNav page={page} setPage={setPage} />
    </div>
  );
};

export default App;
