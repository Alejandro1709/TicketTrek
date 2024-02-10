import prisma from '@/app/utils/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const destinations = await prisma.destination.findMany();

    return NextResponse.json(destinations);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
