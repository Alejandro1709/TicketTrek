import { FaEdit } from 'react-icons/fa';
import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import capitalize from '@/app/utils/capitalize';
import Navigator from '@/components/destinations/navigator';
import NavigatorItems from '@/components/destinations/navigator-items';
import NavigatorItem from '@/components/destinations/navigator-item';
import DialogCloseButton from '@/components/share-dialog';
import AccordionDemo from '@/components/accordion/Accordion';
import { Button } from '@/components/ui/button';
import { getOneDestination } from '@/app/services/destinations';
import BookForm from '@/components/forms/book-form';

type DestinationProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: DestinationProps): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Ticket Trek | ${capitalize(slug)}`,
  };
}

export default async function DestinationPage(props: {
  params: { slug: string };
}) {
  const destination = await getOneDestination(props.params.slug);

  return (
    <section className='flex flex-col gap-4'>
      <Navigator title={capitalize(destination.slug)} backUrl='/destinations'>
        <NavigatorItems>
          <DialogCloseButton resource={destination.slug} />
          <NavigatorItem
            Icon={FaEdit}
            sr='Edit Destination'
            variant='outline'
            size='icon'
          />
        </NavigatorItems>
      </Navigator>
      <header className='flex flex-col gap-4'>
        <figure className='bg-slate-900 h-40 rounded-md mt-6'>IMG</figure>
        <p className='font-medium'>{destination.description}</p>
      </header>
      <>
        <Tabs defaultValue='ida'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='ida'>Ida</TabsTrigger>
            <TabsTrigger value='vuelta'>Vuelta</TabsTrigger>
          </TabsList>
          <TabsContent value='ida'>
            <BookForm />
          </TabsContent>
          <TabsContent value='vuelta'>
            <p>Vuelta</p>
          </TabsContent>
        </Tabs>
      </>
    </section>
  );
}
