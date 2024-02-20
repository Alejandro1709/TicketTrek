'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DateRangePicker from '../range-picker';
import { Button } from '../ui/button';
import { PassengerList } from '../passenger';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

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
          <DateRangePicker className='w-full' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Pasajeros</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-3'>
          <PassengerList />

          <Dialog>
            <DialogTrigger asChild>
              <Button variant='outline'>Añadir Pasajero</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Añadir Pasajero</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Nombre
                  </Label>
                  <Input id='name' value='Pedro' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='lastName' className='text-right'>
                    Apellido
                  </Label>
                  <Input id='lastName' value='Duarte' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='dni' className='text-right'>
                    DNI
                  </Label>
                  <Input id='dni' value='80347367' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='email' className='text-right'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    value='pedro.d@gmail.com'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='address' className='text-right'>
                    Dirección
                  </Label>
                  <Input
                    id='address'
                    value='Av. No Seas Sapo 420'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='gender' className='text-right'>
                    Género
                  </Label>
                  <Select>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='SELECT' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='male'>Hombre</SelectItem>
                      <SelectItem value='female'>Mujer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='address' className='text-right'>
                    Fecha. Nac
                  </Label>
                  <Input
                    id='address'
                    value='Av. No Seas Sapo 420'
                    className='col-span-3'
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Añadir</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
