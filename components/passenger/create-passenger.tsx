'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { ICreatePassenger, IPassenger } from '@/app/types/passenger';
import { usePassengerStore } from '@/stores/passenger-store';
import { format } from 'date-fns';
import { handleCreatePassenger } from '@/app/services/passengers';

function CreatePassengerDialog() {
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

  const handleAddPassenger = async () => {
    const newPassenger = {
      id: 'd',
      ...formData,
      passengerSince: new Date(),
      gender: 'MALE',
    };

    // save to db
    let { id, ...rest } = newPassenger;

    const passenger = await handleCreatePassenger(rest as IPassenger);

    console.log(newPassenger, passenger);
    // update ui
    setPassengers([...passengers, passenger]);
  };

  return (
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
  );
}

export default CreatePassengerDialog;
