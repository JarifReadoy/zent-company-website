'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Post { id: string; title: string; category: string; author: string; date: string; published: boolean; }

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => { fetch('/api/admin/blog').then(r => r.json()).then(d => { setPosts(d); setLoading(false); }); };
  useEffect(load, []);

  const del = async (id: string) => {
    if (!confirm('Delete this post?')) return;
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' }); load();
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-white">Blog Posts</h1><p className="text-gray-400 mt-1">{posts.length} posts</p></div>
        <Link href="/admin/blog/new" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
          <Plus className="h-4 w-4" /> New Post
        </Link>
      </div>
      {loading ? <div className="text-gray-400 text-center py-20">Loading...</div> : (
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-gray-800 text-gray-400 text-left">
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Author</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr></thead>
            <tbody>
              {posts.map(p => (
                <tr key={p.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50">
                  <td className="px-4 py-3 text-white font-medium">{p.title}</td>
                  <td className="px-4 py-3 text-gray-400">{p.category}</td>
                  <td className="px-4 py-3 text-gray-400">{p.author}</td>
                  <td className="px-4 py-3 text-gray-400">{p.date}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${p.published ? 'bg-emerald-900/50 text-emerald-400' : 'bg-gray-800 text-gray-500'}`}>
                      {p.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/blog/${p.id}`} className="p-1.5 text-gray-400 hover:text-indigo-400 hover:bg-gray-700 rounded-md"><Pencil className="h-4 w-4" /></Link>
                      <button onClick={() => del(p.id)} className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-md"><Trash2 className="h-4 w-4" /></button>
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
