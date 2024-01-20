'use client';

function TravelForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className='flex flex-col gap-2 lg:flex-row lg:absolute lg:shadow lg:z-20 lg:top-[22%] lg:w-fit lg:self-center p-3 bg-white mb-6 border lg:rounded'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col justify-center items-center border p-2 rounded'>
        <label htmlFor='origin' className='sr-only'>
          From:
        </label>
        <input
          className='w-full outline-none'
          type='text'
          name='departing'
          id='origin'
          placeholder='Saliendo desde'
        />
      </div>
      <div className='flex flex-col justify-center items-center border p-2 rounded'>
        <label htmlFor='destination' className='sr-only'>
          To:
        </label>
        <input
          className='w-full outline-none'
          type='text'
          name='arriving'
          id='destination'
          placeholder='Llegando a'
        />
      </div>
      <div className='flex flex-col justify-center items-center border p-2 rounded'>
        <label htmlFor='fromDate' className='sr-only'>
          From Date:
        </label>
        <input
          className='w-full outline-none'
          type='date'
          name='fromDate'
          id='fromDate'
        />
      </div>
      <div className='flex flex-col justify-center items-center border p-2 rounded'>
        <label htmlFor='toDate' className='sr-only'>
          To Date:
        </label>
        <input
          className='w-full outline-none'
          type='date'
          name='toDate'
          id='toDate'
        />
      </div>
      <button className='bg-[#7261A3] p-3 text-white font-medium rounded disabled:bg-[#7261A3]/80 hover:bg-[#69579C] active:bg-[#5B498F]'>
        Search Tickets
      </button>
    </form>
  );
}

export default TravelForm;
