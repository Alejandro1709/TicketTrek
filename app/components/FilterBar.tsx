'use client';

function FilterBar() {
  return (
    <header className='flex flex-row justify-between items-center'>
      <span className='text-slate-400'>Ordenar por:</span>

      <ul className='flex gap-2'>
        <li className='bg-slate-300 py-1 px-2 rounded-md cursor-pointer select-none'>
          Precio
        </li>
        <li className='bg-[#7261A3] text-white py-1 px-2 rounded-md cursor-pointer select-none'>
          Rapidez
        </li>
        <li className='bg-slate-300 py-1 px-2 rounded-md cursor-pointer select-none'>
          Temprano
        </li>
        <li className='bg-slate-300 py-1 px-2 rounded-md cursor-pointer select-none'>
          Noche
        </li>
      </ul>
    </header>
  );
}

export default FilterBar;
