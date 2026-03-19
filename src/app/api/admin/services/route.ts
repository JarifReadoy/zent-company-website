import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/content';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export async function GET() {
  const services = readData<Service[]>('services.json');
  return NextResponse.json(services);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  writeData('services.json', body);
  return NextResponse.json(body);
}
