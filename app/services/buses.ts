export const getAllBuses = async () => {
  const res = await fetch('http://localhost:3000/api/buses');
  const data = await res.json();
  return data;
};
