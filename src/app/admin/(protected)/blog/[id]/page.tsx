'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { RichTextEditor } from '@/components/admin/rich-text-editor';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditBlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = useState<Record<string, string | boolean>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const set = (k: string, v: string | boolean) => setForm(p => ({ ...p, [k]: v }));

  useEffect(() => {
    fetch(`/api/admin/blog/${id}`).then(r => r.json()).then(d => { setForm(d); setLoading(false); });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    await fetch(`/api/admin/blog/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    router.push('/admin/blog');
  };

  if (loading) return <div className="p-8 text-gray-400">Loading...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/blog" className="text-gray-400 hover:text-white"><ArrowLeft className="h-5 w-5" /></Link>
        <h1 className="text-2xl font-bold text-white">Edit Blog Post</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Title" value={form.title as string} onChange={v => set('title', v)} />
        <Field label="Slug" value={form.slug as string} onChange={v => set('slug', v)} />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Category" value={form.category as string} onChange={v => set('category', v)} />
          <Field label="Author" value={form.author as string} onChange={v => set('author', v)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Excerpt</label>
          <textarea value={(form.excerpt as string) || ''} onChange={e => set('excerpt', e.target.value)} rows={2}
            className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
          <RichTextEditor value={(form.content as string) || ''} onChange={v => set('content', v)} />
        </div>
        <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
          <input type="checkbox" checked={form.published as boolean} onChange={e => set('published', e.target.checked)} className="w-4 h-4 accent-indigo-500" />
          Published
        </label>
        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg">{saving ? 'Saving...' : 'Save Changes'}</button>
          <Link href="/admin/blog" className="text-gray-400 hover:text-white px-4 py-2.5 rounded-lg">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <input value={value || ''} onChange={e => onChange(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    </div>
  );
}
