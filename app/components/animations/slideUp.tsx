import { Transition } from "@headlessui/react";
import type { ReactNode } from "react";

const SlideUpTransition = ({ children }: { children: ReactNode }) => {
  return (
    <Transition
      enter="transition-all transform  ease-in-out  duration-300"
      enterFrom=" opacity-0 translate-y-64 "
      enterTo=" opacity-100 translate-y-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      className="z-0"
      leaveTo="opacity-0"
      appear
      show
    >
      {children}
    </Transition>
  );
};

export default SlideUpTransition;
