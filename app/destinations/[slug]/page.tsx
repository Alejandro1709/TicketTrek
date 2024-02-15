import { FaEdit } from 'react-icons/fa';
import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import capitalize from '@/app/utils/capitalize';
import Navigator from '@/components/destinations/navigator';
import NavigatorItems from '@/components/destinations/navigator-items';
import NavigatorItem from '@/components/destinations/navigator-item';
import DialogCloseButton from '@/components/share-dialog';

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

export default function DestinationPage(props: { params: { slug: string } }) {
  return (
    <section className='flex flex-col gap-4'>
      <Navigator title={capitalize(props.params.slug)} backUrl='/destinations'>
        <NavigatorItems>
          <DialogCloseButton resource={props.params.slug} />
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
