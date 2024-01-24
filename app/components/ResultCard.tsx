function ResultCard() {
  return (
    <article className='flex flex-col gap-4 justify-between bg-white border p-3 rounded-md overflow-hidden'>
      <aside className='flex flex-row justify-between items-center flex-1'>
        <h2 className='text-xl text-[#395756] font-bold'>Cruzero Evolution</h2>
        <span>
          Desde <strong>S/. 110</strong>
        </span>
      </aside>

      <div className='flex flex-row flex-1 gap-12 self-center'>
        <aside>
          <h2 className='text-2xl font-medium'>08:00 am</h2>
          <ul>
            <li className='text-slate-400'>Chiclayo</li>
            <li className='font-semibold text-slate-500'>Chiclayo</li>
          </ul>
        </aside>
        <span className='self-center'>ARROW</span>
        <aside>
          <h2 className='text-2xl font-medium'>23:45 pm</h2>
          <ul>
            <li className='text-slate-400'>Javier Prado</li>
            <li className='font-semibold text-slate-500'>Lima</li>
          </ul>
        </aside>
      </div>

      <aside className='flex-1 flex flex-row justify-between items-center'>
        <ul className='flex flex-row gap-2 text-slate-400 self-end'>
          <li>16h 15m</li>
          <li>WIFI</li>
          <li>BAÑOS</li>
        </ul>
        <button className='bg-[#395756] p-2 text-white self-end font-medium rounded disabled:bg-[#395756]/80 hover:bg-[#315351] active:bg-[#2C4E4D]'>
          Seleccionar
        </button>
      </aside>
    </article>
  );
}

export default ResultCard;
