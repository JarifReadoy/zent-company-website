'use client';
import { useEffect, useState } from 'react';
import { ICON_NAMES } from '@/lib/icon-map';
import { Plus, Trash2, Save } from 'lucide-react';
import { RichTextEditor } from '@/components/admin/rich-text-editor';

interface Service { id: string; title: string; description: string; icon: string; href: string; }

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { fetch('/api/admin/services').then(r => r.json()).then(d => { setServices(d); setLoading(false); }); }, []);

  const update = (index: number, key: string, value: string) =>
    setServices(prev => prev.map((s, i) => i === index ? { ...s, [key]: value } : s));

  const addService = () => setServices(prev => [...prev, { id: `s${Date.now()}`, title: '', description: '', icon: 'Cloud', href: '' }]);
  const remove = (index: number) => setServices(prev => prev.filter((_, i) => i !== index));

  const saveAll = async () => {
    setSaving(true);
    await fetch('/api/admin/services', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(services) });
    setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <div className="p-8 text-gray-400">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-white">Services</h1><p className="text-gray-400 mt-1">Edit your service offerings</p></div>
        <div className="flex gap-3">
          <button onClick={addService} className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg border border-gray-700 transition-colors">
            <Plus className="h-4 w-4" /> Add Service
          </button>
          <button onClick={saveAll} disabled={saving}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
            <Save className="h-4 w-4" /> {saved ? 'Saved!' : saving ? 'Saving...' : 'Save All'}
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {services.map((s, i) => (
          <div key={s.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Title</label>
                <input value={s.title} onChange={e => update(i, 'title', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Icon (SVG URL or Name)</label>
                <div className="flex gap-2">
                  <input value={s.icon} onChange={e => update(i, 'icon', e.target.value)} className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <button type="button" onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file'; input.accept = 'image/svg+xml,image/*';
                    input.onchange = async () => {
                      if (input.files?.length) {
                        const fd = new FormData(); fd.append('file', input.files[0]);
                        const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
                        if (res.ok) { const d = await res.json(); update(i, 'icon', d.url); }
                      }
                    };
                    input.click();
                  }} className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors whitespace-nowrap">Upload</button>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Link (href)</label>
                <input value={s.href} onChange={e => update(i, 'href', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-xs text-gray-400 mb-1">Description</label>
                <RichTextEditor value={s.description} onChange={v => update(i, 'description', v)} />
              </div>
              <button onClick={() => remove(i)} className="self-end p-2 text-gray-500 hover:text-red-400 hover:bg-gray-800 rounded-lg transition-colors"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
