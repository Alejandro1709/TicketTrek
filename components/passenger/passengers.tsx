'use client';

import { usePassengerStore } from '@/stores/passenger-store';
import PassengerCard from './passenger';

function PassengerList() {
  const passengers = usePassengerStore((state) => state.passengers);
  return (
    <ul className='flex flex-col gap-3'>
      {passengers.map((p) => (
        <PassengerCard key={p.dni} />
      ))}
    </ul>
  );
}

export default PassengerList;
