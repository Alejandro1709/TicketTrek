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
import { useState } from 'react';
import { ICreatePassenger, IPassenger } from '@/app/types/passenger';
import { format } from 'date-fns';
import { usePassengerStore } from '@/stores/passenger-store';

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
  const [formData, setFormData] = useState<ICreatePassenger>({
    firstName: 'John',
    lastName: 'Cena',
    dni: '348695492',
    email: 'john.cena@mail.com',
    address: 'Av. You Cant See Me',
    gender: 'male',
    birthDate: new Date('04-23-1977'),
  });

  const { firstName, lastName, dni, email, address, gender, birthDate } =
    formData;

  const passengers = usePassengerStore((state) => state.passengers);
  const setPassengers = usePassengerStore((state) => state.setPassengers);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddPassenger = () => {
    const newPassenger: IPassenger = {
      id: '',
      ...formData,
      passengerSince: new Date(),
    };

    setPassengers([...passengers, newPassenger]);
  };

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
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Nombre
                  </Label>
                  <Input
                    name='firstName'
                    id='name'
                    value={firstName}
                    onChange={handleChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='lastName' className='text-right'>
                    Apellido
                  </Label>
                  <Input
                    name='lastName'
                    id='lastName'
                    value={lastName}
                    onChange={handleChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='dni' className='text-right'>
                    DNI
                  </Label>
                  <Input
                    name='dni'
                    id='dni'
                    value={dni}
                    onChange={handleChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='email' className='text-right'>
                    Email
                  </Label>
                  <Input
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleChange}
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='address' className='text-right'>
                    Dirección
                  </Label>
                  <Input
                    name='address'
                    id='address'
                    value={address}
                    onChange={handleChange}
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
                  <Label htmlFor='birthDate' className='text-right'>
                    Fecha. Nac
                  </Label>
                  <Input
                    name='birthDate'
                    id='birthDate'
                    value={format(birthDate || new Date(), "do 'de' MMMM yyyy")}
                    onChange={handleChange}
                    className='col-span-3'
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddPassenger}>Añadir</Button>
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
