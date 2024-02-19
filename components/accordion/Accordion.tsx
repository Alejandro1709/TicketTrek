"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DatePickerDemo from "../date-picker";
import { useDateStore } from "@/stores/date-store";

export default function AccordionDemo() {
  const selectedFromDate = useDateStore((state) => state.selectedFromDate);
  const selectedToDate = useDateStore((state) => state.selectedToDate);
  const changeSelectedFromDate = useDateStore(
    (state) => state.changeSelectedFromDate
  );
  const changeSelectedtoDate = useDateStore(
    (state) => state.changeSelectedToDate
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Fechas del viaje</AccordionTrigger>
        <AccordionContent className="flex flex-row gap-3">
          <DatePickerDemo
            date={selectedFromDate}
            onDateChange={changeSelectedFromDate}
          />
          <DatePickerDemo
            date={selectedToDate}
            onDateChange={changeSelectedtoDate}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pasajeros</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Asientos</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
