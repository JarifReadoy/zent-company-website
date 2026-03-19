import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/content';

interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  featured: boolean;
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const products = readData<Product[]>('products.json');
  const product = products.find((p) => p.id === id);
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const products = readData<Product[]>('products.json');
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  products[index] = { ...products[index], ...body, id };
  writeData('products.json', products);
  return NextResponse.json(products[index]);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const products = readData<Product[]>('products.json');
  const filtered = products.filter((p) => p.id !== id);
  writeData('products.json', filtered);
  return NextResponse.json({ success: true });
}
