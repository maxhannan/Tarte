import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Accordion() {
  return (
    <div className=" rounded-2xl bg-neutral-50 dark:bg-neutral-700 p-2 flex flex-col gap-2">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-tl-md rounded-xl font-light bg-neutral-200 dark:bg-neutral-800 px-4 py-3 text-left text-xl  text-neutral-700 dark:text-neutral-200  focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
              <span>Appetizers</span>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-7 w-7 `}
              />
            </Disclosure.Button>

            <Transition
              enter="transition-all ease-linear duration-500  overflow-hidden"
              enterFrom="transform opacity-0 max-h-0"
              enterTo="transform opacity-100 max-h-96"
              leave="transition-all ease-linear duration-200 overflow-hidden"
              leaveFrom="transform opacity-100 max-h-96"
              leaveTo="transform opacity-0 max-h-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
