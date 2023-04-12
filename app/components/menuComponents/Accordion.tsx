import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Accordion() {
  return (
    <div className=" rounded-2xl bg-white p-2 flex flex-col gap-2">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>What is your refund policy?</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
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
