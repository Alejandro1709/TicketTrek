'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import DateRangePicker from '../range-picker';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { PassengerList } from '../passenger';

export default function AccordionDemo() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Fechas del viaje</AccordionTrigger>
        <AccordionContent className='flex flex-row gap-3'>
          <DateRangePicker />
          <Button className='w-full'>Apply</Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Pasajeros</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-3'>
          <PassengerList />

          <Button className='w-full' variant='outline'>
            Add Passenger
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Asientos</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
