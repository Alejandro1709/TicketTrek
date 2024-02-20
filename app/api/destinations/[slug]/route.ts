import prisma from '@/app/utils/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const destinations = await prisma.destination.findUnique({
      where: { slug: params.slug },
    });
    return NextResponse.json(destinations);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
