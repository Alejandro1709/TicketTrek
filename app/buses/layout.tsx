import TogglerGroup from '@/components/toggler-group';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BusesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className='flex flex-row justify-between w-full items-center mt-6'>
        <Button asChild>
          <Link href='/'>Back</Link>
        </Button>
        <h2 className='text-2xl font-semibold'>Buses</h2>
        <TogglerGroup />
      </div>
      {children}
    </section>
  );
}
