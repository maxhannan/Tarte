import type { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useState } from "react";

import BottomNav from "~/components/navigation/BottomNav";
import { getUser, requireUserId } from "~/utils/auth.server";
export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request);

  return user;
};

const App = () => {
  const [page, setPage] = useState("recipes");
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
