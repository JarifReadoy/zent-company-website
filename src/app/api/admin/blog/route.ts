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

export async function GET() {
  const posts = readData<BlogPost[]>('blog.json');
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const posts = readData<BlogPost[]>('blog.json');
  const newPost: BlogPost = {
    ...body,
    id: `b${Date.now()}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }),
    published: body.published ?? false,
  };
  posts.unshift(newPost);
  writeData('blog.json', posts);
  return NextResponse.json(newPost, { status: 201 });
}
