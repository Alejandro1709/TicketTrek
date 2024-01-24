import FilterBar from './FilterBar';
import ResultCard from './ResultCard';

function SearchResults() {
  return (
    <section className='flex flex-col gap-4'>
      <FilterBar />

      <div className='flex flex-col gap-4 lg:grid lg:grid-cols-4'>
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>
    </section>
  );
}

export default SearchResults;
