import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Carousel = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-xl bg-transparent">
              <div className="carousel rounded-xl  min-w-full h-auto">
                <div
                  id="item1"
                  className="carousel-item w-full bg-neutral-100 dark:bg-neutral-900 "
                >
                  <img
                    src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/805c7a1c-cc08-447e-1f19-6c09211c3700/carousel"
                    className="object-contain "
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div
                  id="item2"
                  className="carousel-item w-full bg-neutral-100 dark:bg-neutral-900"
                >
                  <img
                    src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/a519da05-e2c7-48e7-dd9f-2cf425bf0d00/carousel"
                    className="object-contain "
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div
                  id="item3"
                  className="carousel-item w-full bg-neutral-100 dark:bg-neutral-900 "
                >
                  <img
                    src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/eaedb384-b8ab-4639-bdaf-1c8d3e9efa00/carousel"
                    className="object-contain "
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div
                  id="item4"
                  className="carousel-item w-full  bg-neutral-100 dark:bg-neutral-900"
                >
                  <img
                    src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/26dc6ed7-3023-47cf-4556-6e5c4400cf00/carousel"
                    className="object-contain rounded-xl"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div
                  id="item5"
                  className="carousel-item w-full  bg-neutral-100 dark:bg-neutral-900"
                >
                  <img
                    src="https://imagedelivery.net/0xmRpZUcpgGyk0D6fR-N6A/3bf20fae-aa33-4d66-e761-9a397cc1f200/carousel"
                    className="object-contain rounded-xl"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
              </div>
              <div className="flex justify-center w-full py-2 gap-2  ">
                <a
                  href="#item1"
                  className="btn btn-sm bg-neutral-800 border border-neutral-700 rounded-xl active:bg-red-500 hover:bg-red-500"
                >
                  1
                </a>
                <a
                  href="#item2"
                  className="btn btn-sm bg-neutral-800 border border-neutral-700 rounded-xl"
                >
                  2
                </a>
                <a
                  href="#item3"
                  className="btn btn-sm bg-neutral-800 border border-neutral-700 rounded-xl"
                >
                  3
                </a>
                <a
                  href="#item4"
                  className="btn btn-sm bg-neutral-800 border border-neutral-700 rounded-xl"
                >
                  4
                </a>
                <a
                  href="#item5"
                  className="btn btn-sm bg-neutral-800 border border-neutral-700 rounded-xl"
                >
                  5
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Carousel;
