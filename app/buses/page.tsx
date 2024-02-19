import { Metadata } from 'next';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllBuses } from '../services/buses';
import type IBus from '../types/bus';

export const metadata: Metadata = {
  title: 'TicketTrek | Buses',
};

async function BusesPage() {
  const buses: IBus[] = await getAllBuses();

  return (
    <div className='mt-6'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Make</TableHead>
            <TableHead>Soat</TableHead>
            <TableHead>Technical Spec</TableHead>
            <TableHead className='text-right'>Plate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {buses.map((bus) => (
            <TableRow key={bus.id}>
              <TableCell className='font-medium'>{bus.id}</TableCell>
              <TableCell>{bus.name}</TableCell>
              <TableCell>{bus.slug}</TableCell>
              <TableCell>Bus description goes here</TableCell>
              <TableCell>{bus.make}</TableCell>
              <TableCell>{bus.soat ? 'YES' : 'NO'}</TableCell>
              <TableCell>{bus.technicalSpec ? 'YES' : 'NO'}</TableCell>
              <TableCell className='text-right'>{bus.plate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BusesPage;
