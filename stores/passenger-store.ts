import { IPassenger } from '@/app/types/passenger';
import { create } from 'zustand';

type PassengerState = {
  passengers: IPassenger[];
  setPassengers: (passengers: IPassenger[]) => void;
};

export const usePassengerStore = create<PassengerState>((set) => ({
  passengers: [],
  setPassengers: (passengers: IPassenger[]) => set(() => ({ passengers })),
}));
