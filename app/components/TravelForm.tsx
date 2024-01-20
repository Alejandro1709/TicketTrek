function TravelForm() {
  return (
    <form className='flex flex-col gap-2 lg:flex-row lg:absolute lg:shadow lg:z-20 lg:top-[22%] lg:w-fit lg:self-center p-3 bg-white mb-6 border lg:rounded'>
      <div className='border p-2 rounded'>
        <label htmlFor='origin' className='sr-only'>
          From:
        </label>
        <input
          className='w-full'
          type='text'
          id='origin'
          placeholder='Saliendo desde'
        />
      </div>
      <div className='border p-2 rounded'>
        <label htmlFor='destination' className='sr-only'>
          To:
        </label>
        <input
          className='w-full'
          type='text'
          id='destination'
          placeholder='Llegando a'
        />
      </div>
      <div className='border p-2'>
        <label htmlFor='fromDate' className='sr-only'>
          From Date:
        </label>
        <input className='w-full' type='date' id='fromDate' />
      </div>
      <div className='border p-2'>
        <label htmlFor='toDate' className='sr-only'>
          To Date:
        </label>
        <input className='w-full' type='date' id='toDate' />
      </div>
      <button className='bg-[#7261A3] p-3 text-white font-medium rounded disabled:bg-[#7261A3]/80 hover:bg-[#69579C] active:bg-[#5B498F]'>
        Search Tickets
      </button>
    </form>
  );
}

export default TravelForm;
