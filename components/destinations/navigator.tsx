import Link from 'next/link';
import { Button } from '../ui/button';

type NavigatorProps = {
  backUrl: string;
  title: string;
  children: React.ReactNode;
};

function Navigator({ title = 'Title', backUrl, children }: NavigatorProps) {
  return (
    <nav className='flex flex-row justify-between items-center mt-6'>
      <Button variant='outline' asChild>
        <Link href={backUrl}>Back</Link>
      </Button>
      <h1 className='text-3xl font-semibold'>{title}</h1>
      {children}
    </nav>
  );
}

export default Navigator;
