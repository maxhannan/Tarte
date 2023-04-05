import { Outlet } from "@remix-run/react";
import { useState } from "react";

import BottomNav from "~/components/navigation/BottomNav";

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
