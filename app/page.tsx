import DestinationCard from '@/components/card';

export default function Home() {
  return (
    <section className='flex flex-col gap-6 my-8'>
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
    </section>
  );
}
