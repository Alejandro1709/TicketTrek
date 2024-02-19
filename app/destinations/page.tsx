import List from '@/components/list';
import { getAllDestinations } from '../services/destinations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ticket Trek | Destinations',
};

export default async function DestinationsPage() {
  const res = await getAllDestinations();

  return <List data={res} />;
}
