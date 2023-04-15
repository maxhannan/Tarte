import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

const SlideDownTransition = ({ children }: { children: ReactNode }) => {
  return (
    <Transition
      enter="transition-all transform  ease-in-out  duration-700"
      enterFrom=" opacity-0 -translate-y-full "
      enterTo=" opacity-100 translate-y-0"
      leave="transition ease-in duration-400"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="z-50 relative"
      appear
      show
    >
      {children}
    </Transition>
  );
};

export default SlideDownTransition;
