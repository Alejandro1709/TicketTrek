export const getAllDestinations = async () => {
  const res = await fetch('http://localhost:3000/api/destinations');
  const data = await res.json();
  return data;
};

export const getOneDestination = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/destinations/${slug}`);
  const data = await res.json();
  return data;
};
