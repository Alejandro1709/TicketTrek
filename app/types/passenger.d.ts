export type Gender = 'male' | 'female';

export interface IPassenger {
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  address: string;
  gender: Gender;
  birthDate: Date;
  passengerSince: Date;
}

export interface ICreatePassenger {
  firstName?: string;
  lastName?: string;
  dni?: string;
  email?: string;
  address?: string;
  gender?: Gender;
  birthDate?: Date;
}
