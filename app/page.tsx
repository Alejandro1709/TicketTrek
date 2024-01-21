import Showcase from './components/Showcase';
import TravelForm from './components/TravelForm';

export default function Home() {
  return (
    <>
      <TravelForm />
      <Showcase heading='Los destinos más populares' />
    </>
  );
}
