import type IData from '@/app/types/destination';
import DestinationCard from '../card';
import { Suspense } from 'react';
import LoadingList from './loading';

async function List({ data }: { data: IData[] }) {
  return (
    <Suspense fallback={<LoadingList />}>
      <section className='flex flex-col gap-6 my-8'>
        {data.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </section>
    </Suspense>
  );
}

export default List;
