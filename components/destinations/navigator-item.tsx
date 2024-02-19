import { Button } from '../ui/button';
import { type IconType } from 'react-icons';

type NavigatorItemProps = {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  Icon: IconType;
  sr: string;
};

function NavigatorItem({
  variant = 'default',
  size = 'default',
  Icon,
  sr,
}: NavigatorItemProps) {
  return (
    <Button variant={variant} size={size}>
      <Icon />
      <span className='sr-only'>{sr}</span>
    </Button>
  );
}

export default NavigatorItem;
