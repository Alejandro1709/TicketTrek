import { create } from "zustand";

type DateStoreType = {
  dateId: number;
  selectedFromDate: Date;
  selectedToDate: Date;
  changeSelectedFromDate: React.Dispatch<Date>;
  changeSelectedToDate: React.Dispatch<Date>;
};

export const useDateStore = create<DateStoreType>((set) => ({
  dateId: Math.random() * 245,
  selectedFromDate: new Date(),
  selectedToDate: new Date(),
  changeSelectedFromDate: (date: Date) =>
    set(() => ({ selectedFromDate: date })),
  changeSelectedToDate: (date: Date) => set(() => ({ selectedFromDate: date })),
}));
