import * as React from "react";
import { format } from "date-fns";
import { CalendarCheck2 } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

import { Dialog, Transition } from "@headlessui/react";
import { Calendar } from "../ui/calendar";

export function PrepCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => setIsOpen(true)}
        className={cn(
          " justify-start text-left text-lg   font-light pl-3 pr-4 border-neutral-300 dark:border-neutral-700 h-12 rounded-xl  text-neutral-700 hover:bg-neutral-200 hover:dark:bg-neutral-700 dark:text-neutral-200 bg-opacity-50 dark:bg-opacity-50 hover:dark:text-neutral-200 max-w-sm bg-neutral-200 dark:bg-neutral-800",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarCheck2 className="w-5 h-5 text-neutral-500 dark:text-neutral-400 mr-2" />
        {date ? format(date, "PP") : <span>Pick a date</span>}
      </Button>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" max-w-xl bg-transparent">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
