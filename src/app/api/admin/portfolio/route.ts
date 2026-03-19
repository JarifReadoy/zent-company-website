import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/content';

interface Project {
  id: string; title: string; category: string; client: string;
  description: string; image: string; results: string[]; published: boolean;
}

export async function GET() {
  return NextResponse.json(readData<Project[]>('portfolio.json'));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const projects = readData<Project[]>('portfolio.json');
  const newProject: Project = { ...body, id: `cs${Date.now()}`, published: body.published ?? true };
  projects.push(newProject);
  writeData('portfolio.json', projects);
  return NextResponse.json(newProject, { status: 201 });
}
