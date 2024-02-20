import { ICreatePassenger } from '../types/passenger';

export const handleCreatePassenger = async (body: ICreatePassenger) => {
  const res = await fetch('http://localhost:3000/api/passengers', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
};
