'use client';

import { useEffect } from 'react';
import { useDateStore } from '@/stores/date-store';
import AccordionDemo from '../accordion/Accordion';
import { Button } from '../ui/button';
import { TicketType, useTicketStore } from '@/stores/ticket-store';
import { toast } from '../ui/use-toast';
import { usePassengerStore } from '@/stores/passenger-store';

function BookForm() {
  const range = useDateStore((state) => state.range);
  const ticket = useTicketStore((state) => state.ticket);
  const passengers = usePassengerStore((state) => state.passengers);
  const setTicket = useTicketStore((state) => state.setTicket);

  useEffect(() => {
    console.log(ticket);
  }, [ticket]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTicket: TicketType = {
      range: {
        from: range.fromDate,
        to: range.toDate,
      },
      passengers: passengers,
      seats: ['1A'],
    };

    setTicket(newTicket);

    toast({
      title: 'Success!!',
      description: 'Passenger created and ticket updated',
    });
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <AccordionDemo />
      <Button>Book Now</Button>
    </form>
  );
}

export default BookForm;
