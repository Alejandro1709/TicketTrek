import SearchResults from './components/SearchResults';
import TravelForm from './components/TravelForm';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-4'>
      <TravelForm />
      <SearchResults />
    </main>
  );
}
