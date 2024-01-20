import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import TravelForm from './components/TravelForm';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col transition-all'>
      <Navbar />
      <Hero />
      <main className='flex flex-col m-4 lg:mx-40'>
        <TravelForm />
        <Showcase heading='Los más populares' />
      </main>
    </div>
  );
}
