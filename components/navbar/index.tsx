import { ModeToggler } from '../mode-toggler';

function Navbar() {
  return (
    <nav className='sticky top-0 z-20 h-16 border-b bg-white dark:bg-zinc-950'>
      <ModeToggler />
    </nav>
  );
}

export default Navbar;
