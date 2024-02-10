import Link from 'next/link';
import { ModeToggler } from '../mode-toggler';
import { Button } from '../ui/button';

function Navbar() {
  return (
    <nav className='sticky flex justify-center items-center top-0 z-20 h-16 border-b bg-white dark:bg-zinc-950'>
      <div className='flex flex-row w-full justify-between items-center mx-8'>
        <Button className='invisible'>H</Button>
        <Link href='/'>
          <h2 className='text-xl font-semibold'>Ticket Trek</h2>
        </Link>
        <ModeToggler />
      </div>
    </nav>
  );
}

export default Navbar;
