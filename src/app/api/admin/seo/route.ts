import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/content';

interface SeoEntry {
  page: string;
  title: string;
  description: string;
  keywords: string;
}

export async function GET() {
  const seo = readData<SeoEntry[]>('seo.json');
  return NextResponse.json(seo);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  writeData('seo.json', body);
  return NextResponse.json(body);
}
