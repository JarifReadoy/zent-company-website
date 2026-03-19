import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/content';

interface Job {
  id: string; title: string; department: string;
  location: string; type: string; description: string; published: boolean;
}

export async function GET() {
  return NextResponse.json(readData<Job[]>('careers.json'));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const jobs = readData<Job[]>('careers.json');
  const newJob: Job = { ...body, id: `j${Date.now()}`, published: body.published ?? true };
  jobs.push(newJob);
  writeData('careers.json', jobs);
  return NextResponse.json(newJob, { status: 201 });
}
