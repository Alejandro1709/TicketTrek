import { SkeletonCard } from "../skeleton-card";

function LoadingList() {
  return (
    <section className="flex flex-col container gap-6 my-8 md:grid md:grid-cols-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </section>
  );
}

export default LoadingList;
