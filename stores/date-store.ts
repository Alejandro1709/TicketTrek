import { addDays } from 'date-fns';
import { create } from 'zustand';

type DateStoreType = {
  range: {
    fromDate: Date;
    toDate: Date;
  };
  setRange: (fromDate: Date, toDate: Date) => void;
};

export const useDateStore = create<DateStoreType>((set) => ({
  range: {
    fromDate: new Date(),
    toDate: addDays(new Date(), 10),
  },
  setRange: (fromDate: Date, toDate: Date) =>
    set(() => ({ range: { fromDate, toDate } })),
}));
