import { ICreatePassenger } from '@/app/types/passenger';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { create } from 'zustand';

export type TicketType = {
  range: DateRange;
  passengers: ICreatePassenger[];
  seats: string[];
};

type TicketState = {
  ticket: TicketType;
  setTicket: (ticket: TicketType) => void;
};

export const useTicketStore = create<TicketState>((set) => ({
  ticket: {
    range: { from: new Date(), to: addDays(new Date(), 10) },
    passengers: [],
    seats: [],
  },
  setTicket: (ticket: TicketType) =>
    set(() => ({
      ticket,
    })),
}));
