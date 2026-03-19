import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/content';

interface Job {
  id: string; title: string; department: string;
  location: string; type: string; description: string; published: boolean;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const jobs = readData<Job[]>('careers.json');
  const index = jobs.findIndex((j) => j.id === id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  jobs[index] = { ...jobs[index], ...body, id };
  writeData('careers.json', jobs);
  return NextResponse.json(jobs[index]);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const jobs = readData<Job[]>('careers.json');
  writeData('careers.json', jobs.filter((j) => j.id !== id));
  return NextResponse.json({ success: true });
}
