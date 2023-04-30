import * as React from "react";
import { format } from "date-fns";
import { CalendarCheck2 } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

export function PrepCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            " justify-start text-left text-lg   font-light pl-3 pr-4 border-neutral-300 dark:border-neutral-700 h-12 rounded-xl  text-neutral-700 hover:bg-neutral-200 hover:dark:bg-neutral-700 dark:text-neutral-200 bg-opacity-50 dark:bg-opacity-50 hover:dark:text-neutral-200 max-w-sm bg-neutral-200 dark:bg-neutral-800",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarCheck2 className="w-5 h-5 text-neutral-500 dark:text-neutral-400 mr-2" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-full bg-transparent p-0 border-none rounded-lg  "
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
