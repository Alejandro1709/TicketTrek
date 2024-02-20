'use client';

import { useDateStore } from '@/stores/date-store';
import AccordionDemo from '../accordion/Accordion';
import { Button } from '../ui/button';
import { TicketType, useTicketStore } from '@/stores/ticket-store';
import { useEffect } from 'react';
import { toast } from '../ui/use-toast';

function BookForm() {
  const range = useDateStore((state) => state.range);
  const ticket = useTicketStore((state) => state.ticket);
  const setTicket = useTicketStore((state) => state.setTicket);

  useEffect(() => {
    toast({
      title: 'Scheduled: Catch up',
      description: `${ticket.range.from} - ${ticket.range.to}`,
    });
  }, [ticket]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTicket: TicketType = {
      range: {
        from: range.fromDate,
        to: range.toDate,
      },
    };

    setTicket(structuredClone(newTicket));
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <AccordionDemo />
      <Button>Book Now</Button>
    </form>
  );
}

export default BookForm;
