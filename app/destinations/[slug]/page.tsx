import { Button } from '@/components/ui/button';
import { IoShareOutline } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import { Metadata, ResolvingMetadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type DestinationProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: DestinationProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Ticket Trek | ${slug}`,
  };
}

export default function DestinationPage() {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex flex-row justify-between items-center mt-6'>
        <Button variant='outline'>Back</Button>
        <h1 className='text-3xl font-semibold'>Cuzco</h1>
        <div className='flex flex-row gap-3 justify-center items-center'>
          <Button variant='outline' size='icon'>
            <IoShareOutline />
            <span className='sr-only'>Share Link</span>
          </Button>
          <Button variant='outline' size='icon'>
            <FaEdit />
            <span className='sr-only'>Edit Destination</span>
          </Button>
        </div>
      </div>
      <header className='flex flex-col gap-4'>
        <figure className='bg-slate-900 h-40 rounded-md mt-6'>IMG</figure>
        <p className='font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia
          eveniet beatae consectetur, ea reprehenderit ipsam corrupti a incidunt
          numquam deleniti molestiae sapiente rem!
        </p>
      </header>
      <div>
        <Tabs defaultValue='ida'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='ida'>Ida</TabsTrigger>
            <TabsTrigger value='vuelta'>Vuelta</TabsTrigger>
          </TabsList>
          <TabsContent value='ida'>
            <p>Ida</p>
          </TabsContent>
          <TabsContent value='vuelta'>
            <p>Vuelta</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
