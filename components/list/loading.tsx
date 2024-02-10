import { SkeletonCard } from '../skeleton-card';

function LoadingList() {
  return (
    <section className='flex flex-col gap-6 my-8'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </section>
  );
}

export default LoadingList;
