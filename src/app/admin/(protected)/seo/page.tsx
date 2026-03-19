'use client';
import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';

interface SeoEntry { page: string; title: string; description: string; keywords: string; }

export default function AdminSeoPage() {
  const [seo, setSeo] = useState<SeoEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { fetch('/api/admin/seo').then(r => r.json()).then(d => { setSeo(d); setLoading(false); }); }, []);

  const update = (index: number, key: string, value: string) =>
    setSeo(prev => prev.map((e, i) => i === index ? { ...e, [key]: value } : e));

  const saveAll = async () => {
    setSaving(true);
    await fetch('/api/admin/seo', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(seo) });
    setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <div className="p-8 text-gray-400">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-white">SEO Settings</h1><p className="text-gray-400 mt-1">Manage meta title, description & keywords per page</p></div>
        <button onClick={saveAll} disabled={saving} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
          <Save className="h-4 w-4" /> {saved ? 'Saved!' : saving ? 'Saving...' : 'Save All'}
        </button>
      </div>
      <div className="space-y-4">
        {seo.map((entry, i) => (
          <div key={entry.page} className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-900/30 px-2.5 py-1 rounded-full">{entry.page}</span>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Meta Title</label>
              <input value={entry.title} onChange={e => update(i, 'title', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <p className={`text-xs mt-1 ${entry.title.length > 60 ? 'text-red-400' : 'text-gray-500'}`}>{entry.title.length}/60 chars (ideal: 50-60)</p>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Meta Description</label>
              <textarea value={entry.description} onChange={e => update(i, 'description', e.target.value)} rows={2}
                className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
              <p className={`text-xs mt-1 ${entry.description.length > 160 ? 'text-red-400' : 'text-gray-500'}`}>{entry.description.length}/160 chars (ideal: 150-160)</p>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Keywords (comma separated)</label>
              <input value={entry.keywords} onChange={e => update(i, 'keywords', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
