import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import type IData from '@/app/types/destination';
import Link from 'next/link';

function DestinationCard({ destination }: { destination: IData }) {
  return (
    <Card>
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <Image
            src='https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/06164027/laguna-69-cuesta-serena-boutique-hotel-1024x597.jpg'
            alt={destination.name}
            className='rounded-md object-cover'
            fill
            priority
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <CardTitle className='text-2xl'>{destination.name}</CardTitle>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/destinations/${destination.slug}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default DestinationCard;
