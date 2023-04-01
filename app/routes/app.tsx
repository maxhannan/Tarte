import { Transition } from "@headlessui/react";
import { Outlet } from "@remix-run/react";
import { useState } from "react";
import AppBar from "~/components/navigation/AppBar";
import BottomNav from "~/components/navigation/BottomNav";

const App = () => {
  const [page, setPage] = useState("recipes");
  return (
    <div className=" px-4">
      <Transition
        enter="transition-all transform  ease-in-out  duration-500"
        enterFrom=" opacity-0 -translate-y-full "
        enterTo=" opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
        show
      >
        <AppBar page={page} />
      </Transition>
      <div className="container max-w-2xl mx-auto">
        <Outlet />
      </div>
      <BottomNav page={page} setPage={setPage} />
    </div>
  );
};

export default App;
