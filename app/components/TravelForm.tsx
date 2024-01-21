'use client';

import Input from './Input';

function TravelForm() {
  return (
    <div className='flex flex-col gap-2 lg:flex-row lg:absolute lg:shadow lg:z-20 lg:top-[22%] lg:w-fit lg:self-center p-3 bg-white mb-6 border lg:rounded'>
      <Input
        label='From:'
        name='departing'
        id='origin'
        placeholder='Saliendo desde'
      />

      <Input
        label='To:'
        name='arriving'
        id='destination'
        placeholder='Llegando a'
      />

      <Input label='From Date:' type='date' name='fromDate' id='fromDate' />
      <Input label='To Date:' type='date' name='toDate' id='toDate' />

      <button className='bg-[#7261A3] p-3 text-white font-medium rounded disabled:bg-[#7261A3]/80 hover:bg-[#69579C] active:bg-[#5B498F]'>
        Search Tickets
      </button>
    </div>
  );
}

export default TravelForm;
