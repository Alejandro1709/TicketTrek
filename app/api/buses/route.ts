import prisma from '@/app/utils/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const buses = await prisma.bus.findMany({
      include: {
        company: true,
      },
    });

    return NextResponse.json(buses);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
