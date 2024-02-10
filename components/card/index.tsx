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

function DestinationCard() {
  return (
    <Card>
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <Image
            src='https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/06164027/laguna-69-cuesta-serena-boutique-hotel-1024x597.jpg'
            alt='Image'
            className='rounded-md object-cover'
            fill
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <CardTitle className='text-2xl'>Huaraz</CardTitle>
      </CardContent>
      <CardFooter>
        <Button>Details</Button>
      </CardFooter>
    </Card>
  );
}

export default DestinationCard;
