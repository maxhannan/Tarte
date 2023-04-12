import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import MenuSummary from "./MenuSummary";
import MenuDishSummary from "./MenuDishSummary";

export default function Accordion() {
  return (
    <div className=" rounded-tl-md rounded-2xl   border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-2 flex flex-col gap-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-tl-md rounded-xl  bg-neutral-200 font-normal dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-left text-xl  text-neutral-700 dark:text-neutral-200  focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
              <span>Appetizers</span>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-7 w-7 `}
              />
            </Disclosure.Button>

            <Transition
              enter="transition-all ease-linear duration-300  overflow-hidden"
              enterFrom="transform opacity-0 max-h-0"
              enterTo="transform opacity-100 max-h-96"
              leave="transition-all ease-linear duration-200 overflow-hidden"
              leaveFrom="transform opacity-100 max-h-96"
              leaveTo="transform opacity-0 max-h-0"
            >
              <Disclosure.Panel className=" pb-2 flex flex-col gap-2 text-sm text-gray-500">
                <MenuDishSummary
                  id="1"
                  name="Celeriac Soup, Hazelnut gremolata, Roasted Apple, Freekeh"
                  category="4"
                  user="MH"
                />
                <MenuDishSummary id="1" name="Test" category="4" user="MH" />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-tl-md rounded-xl  bg-neutral-200 font-normal dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-left text-xl  text-neutral-700 dark:text-neutral-200  focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
              <span>Appetizers</span>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-7 w-7 `}
              />
            </Disclosure.Button>

            <Transition
              enter="transition-all ease-linear duration-300  overflow-hidden"
              enterFrom="transform opacity-0 max-h-0"
              enterTo="transform opacity-100 max-h-96"
              leave="transition-all ease-linear duration-200 overflow-hidden"
              leaveFrom="transform opacity-100 max-h-96"
              leaveTo="transform opacity-0 max-h-0"
            >
              <Disclosure.Panel className=" pb-2 flex flex-col gap-2 text-sm text-gray-500">
                <MenuDishSummary
                  id="1"
                  name="Celeriac Soup, Hazelnut gremolata, Roasted Apple, Freekeh"
                  category="4"
                  user="MH"
                />
                <MenuDishSummary id="1" name="Test" category="4" user="MH" />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-tl-md rounded-xl  bg-neutral-200 font-normal dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-left text-xl  text-neutral-700 dark:text-neutral-200  focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
              <span>Appetizers</span>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-7 w-7 `}
              />
            </Disclosure.Button>

            <Transition
              enter="transition-all ease-linear duration-300  overflow-hidden"
              enterFrom="transform opacity-0 max-h-0"
              enterTo="transform opacity-100 max-h-96"
              leave="transition-all ease-linear duration-200 overflow-hidden"
              leaveFrom="transform opacity-100 max-h-96"
              leaveTo="transform opacity-0 max-h-0"
            >
              <Disclosure.Panel className=" pb-2 flex flex-col gap-2 text-sm text-gray-500">
                <MenuDishSummary
                  id="1"
                  name="Celeriac Soup, Hazelnut gremolata, Roasted Apple, Freekeh"
                  category="4"
                  user="MH"
                />
                <MenuDishSummary id="1" name="Test" category="4" user="MH" />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-tl-md rounded-xl  bg-neutral-200 font-normal dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-left text-xl  text-neutral-700 dark:text-neutral-200  focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
              <span>Appetizers</span>
              <ChevronUpIcon
                className={`${open ? "rotate-180 transform" : ""} h-7 w-7 `}
              />
            </Disclosure.Button>

            <Transition
              enter="transition-all ease-linear duration-300  overflow-hidden"
              enterFrom="transform opacity-0 max-h-0"
              enterTo="transform opacity-100 max-h-96"
              leave="transition-all ease-linear duration-200 overflow-hidden"
              leaveFrom="transform opacity-100 max-h-96"
              leaveTo="transform opacity-0 max-h-0"
            >
              <Disclosure.Panel className=" pb-2 flex flex-col gap-2 text-sm text-gray-500">
                <MenuDishSummary
                  id="1"
                  name="Celeriac Soup, Hazelnut gremolata, Roasted Apple, Freekeh"
                  category="4"
                  user="MH"
                />
                <MenuDishSummary id="1" name="Test" category="4" user="MH" />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
