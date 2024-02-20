import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

function PassengerCard() {
  return (
    <Card>
      <CardHeader className='flex flex-row gap-4'>
        <Avatar className='w-12 h-12'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-.5'>
          <CardTitle className='font-medium text-lg'>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
        <div className='flex flex-row gap-1.5 ml-auto'>
          <Button variant='secondary' type='button'>
            Edit
          </Button>
          <Button variant='destructive' type='button'>
            Delete
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default PassengerCard;
