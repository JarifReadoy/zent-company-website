'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2, Star } from 'lucide-react';

interface Product { id: string; title: string; description: string; icon: string; featured: boolean; slug: string; }

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    fetch('/api/admin/products').then(r => r.json()).then(data => { setProducts(data); setLoading(false); });
  };
  useEffect(load, []);

  const del = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Products</h1>
          <p className="text-gray-400 mt-1">{products.length} products</p>
        </div>
        <Link href="/admin/products/new" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
          <Plus className="h-4 w-4" /> New Product
        </Link>
      </div>
      {loading ? (
        <div className="text-gray-400 text-center py-20">Loading...</div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-left">
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Icon</th>
                <th className="px-4 py-3 font-medium">Slug</th>
                <th className="px-4 py-3 font-medium">Featured</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50">
                  <td className="px-4 py-3 text-white font-medium">{p.title}</td>
                  <td className="px-4 py-3 text-gray-400">{p.icon}</td>
                  <td className="px-4 py-3 text-gray-400 font-mono text-xs">{p.slug}</td>
                  <td className="px-4 py-3">
                    {p.featured && <span className="inline-flex items-center gap-1 text-amber-400 text-xs"><Star className="h-3 w-3 fill-current" /> Featured</span>}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/products/${p.id}`} className="p-1.5 text-gray-400 hover:text-indigo-400 hover:bg-gray-700 rounded-md transition-colors"><Pencil className="h-4 w-4" /></Link>
                      <button onClick={() => del(p.id)} className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-md transition-colors"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
