'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import DateRangePicker from '../range-picker';
import { Button } from '../ui/button';
import { PassengerList } from '../passenger';
import { Card, CardContent, CardHeader } from '../ui/card';

const seats = [
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
];

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
          <Card>
            <CardHeader>Seats Selected:</CardHeader>
            <CardContent className='grid grid-cols-2 gap-4 container justify-center mb-4 w-fit bg-secondary rounded-md overflow-hidden'>
              {seats.map((s) => (
                <span
                  className='w-12 h-12 bg-slate-400 p-4 rounded-full select-none cursor-pointer font-medium'
                  key={s}
                >
                  {s}
                </span>
              ))}
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
