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

export async function GET() {
  const products = readData<Product[]>('products.json');
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const products = readData<Product[]>('products.json');
  const newProduct: Product = {
    ...body,
    id: `p${Date.now()}`,
    featured: body.featured ?? false,
  };
  products.push(newProduct);
  writeData('products.json', products);
  return NextResponse.json(newProduct, { status: 201 });
}
