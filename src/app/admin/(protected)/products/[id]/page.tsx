'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { RichTextEditor } from '@/components/admin/rich-text-editor';
import { ICON_NAMES } from '@/lib/icon-map';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = useState<Record<string, string | boolean>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/admin/products/${id}`).then(r => r.json()).then(data => {
      setForm({
        ...data,
        features: (data.features || []).join('\n'),
        benefits: (data.benefits || []).join('\n'),
        useCases: (data.useCases || []).join('\n'),
      });
      setLoading(false);
    });
  }, [id]);

  const set = (k: string, v: string | boolean) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    await fetch(`/api/admin/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        features: (form.features as string).split('\n').filter(Boolean),
        benefits: (form.benefits as string).split('\n').filter(Boolean),
        useCases: (form.useCases as string).split('\n').filter(Boolean),
      }),
    });
    router.push('/admin/products');
  };

  if (loading) return <div className="p-8 text-gray-400">Loading...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/products" className="text-gray-400 hover:text-white"><ArrowLeft className="h-5 w-5" /></Link>
        <h1 className="text-2xl font-bold text-white">Edit Product</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Title" value={form.title as string} onChange={v => set('title', v)} />
          <Field label="Slug" value={form.slug as string} onChange={v => set('slug', v)} />
        </div>
        <Field label="Short Description" value={form.description as string} onChange={v => set('description', v)} />
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Full Description</label>
          <RichTextEditor value={form.fullDescription as string} onChange={v => set('fullDescription', v)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Icon (SVG URL or Name)</label>
            <div className="flex gap-2">
              <input value={form.icon as string} onChange={e => set('icon', e.target.value)} className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="button" onClick={() => {
                const input = document.createElement('input');
                input.type = 'file'; input.accept = 'image/svg+xml,image/*';
                input.onchange = async () => {
                  if (input.files?.length) {
                    const fd = new FormData(); fd.append('file', input.files[0]);
                    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
                    if (res.ok) { const d = await res.json(); set('icon', d.url); }
                  }
                };
                input.click();
              }} className="px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors whitespace-nowrap">Upload</button>
            </div>
          </div>
          <div className="flex items-end pb-1">
            <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <input type="checkbox" checked={form.featured as boolean} onChange={e => set('featured', e.target.checked)} className="w-4 h-4 accent-indigo-500" />
              Featured product
            </label>
          </div>
        </div>
        <TextArea label="Features (one per line)" value={form.features as string} onChange={v => set('features', v)} />
        <TextArea label="Benefits (one per line)" value={form.benefits as string} onChange={v => set('benefits', v)} />
        <TextArea label="Use Cases (one per line)" value={form.useCases as string} onChange={v => set('useCases', v)} />
        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <Link href="/admin/products" className="text-gray-400 hover:text-white px-4 py-2.5 rounded-lg">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <input value={value || ''} onChange={e => onChange(e.target.value)} className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    </div>
  );
}
function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <textarea value={value || ''} onChange={e => onChange(e.target.value)} rows={4} className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y" />
    </div>
  );
}
