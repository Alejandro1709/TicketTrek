import List from '@/components/list';
import { getAllDestinations } from './services/destinations';

export default async function Home() {
  const res = await getAllDestinations();

  return <List data={res} />;
}
