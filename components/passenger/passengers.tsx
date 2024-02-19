import PassengerCard from './passenger';

function PassengerList() {
  return (
    <ul className='flex flex-col gap-3'>
      <PassengerCard />
      <PassengerCard />
      <PassengerCard />
    </ul>
  );
}

export default PassengerList;
