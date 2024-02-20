import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { create } from 'zustand';

export type TicketType = { range: DateRange };

type TicketState = {
  ticket: TicketType;
  setTicket: (ticket: TicketType) => void;
};

export const useTicketStore = create<TicketState>((set) => ({
  ticket: {
    range: { from: new Date(), to: addDays(new Date(), 10) },
  },
  setTicket: (ticket: TicketType) =>
    set(() => ({
      ticket,
    })),
}));
