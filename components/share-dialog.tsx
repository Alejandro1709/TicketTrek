'use client';

import { CopyIcon, Share1Icon } from '@radix-ui/react-icons';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export default function DialogCloseButton({ resource }: { resource: string }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  const url = `https://tickettrek.alejandrolarosa.com/destinations/${resource}`;
  const { toast } = useToast();

  const handleCopyText = () => {
    copyToClipboard(url);
    toast({
      title: 'Copied!',
      description: `${copiedText} has been copied to your clipboard`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='icon'>
          <Share1Icon />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Share Destination</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this Destination Page.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input id='link' defaultValue={url} readOnly />
          </div>
          <Button
            type='submit'
            size='sm'
            className='px-3'
            onClick={handleCopyText}
          >
            <span className='sr-only'>Copy</span>
            <CopyIcon className='h-4 w-4' />
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
