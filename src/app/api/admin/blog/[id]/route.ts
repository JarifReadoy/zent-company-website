import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/content';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  published: boolean;
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const posts = readData<BlogPost[]>('blog.json');
  const post = posts.find((p) => p.id === id);
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const posts = readData<BlogPost[]>('blog.json');
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  posts[index] = { ...posts[index], ...body, id };
  writeData('blog.json', posts);
  return NextResponse.json(posts[index]);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const posts = readData<BlogPost[]>('blog.json');
  const filtered = posts.filter((p) => p.id !== id);
  writeData('blog.json', filtered);
  return NextResponse.json({ success: true });
}
