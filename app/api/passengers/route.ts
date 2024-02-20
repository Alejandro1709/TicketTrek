import prisma from '@/lib/prisma';
import { Passenger } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { id, ...rest } = body;

  try {
    const seat = await prisma.seat.create({
      data: {
        code: `${Math.floor(Math.random() * 49)}A`,
        available: true,
        type: 'WINDOW',
      },
    });

    const newPassenger: Passenger = await prisma.passenger.create({
      data: {
        ...rest,
        gender: 'MALE',
        seat,
      },
    });

    return NextResponse.json(newPassenger);
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
