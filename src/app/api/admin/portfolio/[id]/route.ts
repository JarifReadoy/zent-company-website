import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/content';

interface Project {
  id: string; title: string; category: string; client: string;
  description: string; image: string; results: string[]; published: boolean;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const projects = readData<Project[]>('portfolio.json');
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  projects[index] = { ...projects[index], ...body, id };
  writeData('portfolio.json', projects);
  return NextResponse.json(projects[index]);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projects = readData<Project[]>('portfolio.json');
  writeData('portfolio.json', projects.filter((p) => p.id !== id));
  return NextResponse.json({ success: true });
}
