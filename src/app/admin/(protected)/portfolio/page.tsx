'use client';
import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { RichTextEditor } from '@/components/admin/rich-text-editor';

interface Project { id: string; title: string; category: string; client: string; description: string; image: string; results: string[]; published: boolean; }

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<Project | null>(null);
  const [form, setForm] = useState({ title: '', category: '', client: '', description: '', image: '', results: '', published: true });
  const [saving, setSaving] = useState(false);

  const load = () => { fetch('/api/admin/portfolio').then(r => r.json()).then(d => { setProjects(d); setLoading(false); }); };
  useEffect(load, []);

  const del = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    await fetch(`/api/admin/portfolio/${id}`, { method: 'DELETE' }); load();
  };

  const openNew = () => { setEditItem(null); setForm({ title: '', category: '', client: '', description: '', image: '', results: '', published: true }); setShowForm(true); };
  const openEdit = (p: Project) => {
    setEditItem(p);
    setForm({ title: p.title, category: p.category, client: p.client, description: p.description, image: p.image || '', results: (p.results || []).join('\n'), published: p.published });
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    const payload = { ...form, results: form.results.split('\n').filter(Boolean) };
    if (editItem) {
      await fetch(`/api/admin/portfolio/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    } else {
      await fetch('/api/admin/portfolio', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    }
    setSaving(false); setShowForm(false); load();
  };

  const set = (k: string, v: string | boolean) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-white">Portfolio</h1><p className="text-gray-400 mt-1">{projects.length} case studies</p></div>
        <button onClick={openNew} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
          <Plus className="h-4 w-4" /> New Project
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-900 border border-indigo-700 rounded-xl p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">{editItem ? 'Edit Project' : 'New Portfolio Item'}</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <F label="Title" value={form.title} onChange={v => set('title', v)} />
              <F label="Category" value={form.category} onChange={v => set('category', v)} />
              <F label="Client" value={form.client} onChange={v => set('client', v)} />
              <F label="Image Path" value={form.image} onChange={v => set('image', v)} />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Description</label>
              <RichTextEditor value={form.description} onChange={v => set('description', v)} />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Results (one per line)</label>
              <textarea value={form.results} onChange={e => set('results', e.target.value)} rows={3}
                className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y" />
            </div>
            <label className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
              <input type="checkbox" checked={form.published} onChange={e => set('published', e.target.checked)} className="w-4 h-4 accent-indigo-500" />
              Published
            </label>
            <div className="flex gap-3">
              <button type="submit" disabled={saving} className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-5 py-2 rounded-lg text-sm">{saving ? 'Saving...' : 'Save'}</button>
              <button type="button" onClick={() => setShowForm(false)} className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {loading ? <div className="text-gray-400 text-center py-20">Loading...</div> : (
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-gray-800 text-gray-400 text-left">
              <th className="px-4 py-3 font-medium">Title</th><th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Client</th><th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr></thead>
            <tbody>
              {projects.map(p => (
                <tr key={p.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50">
                  <td className="px-4 py-3 text-white font-medium">{p.title}</td>
                  <td className="px-4 py-3 text-gray-400">{p.category}</td>
                  <td className="px-4 py-3 text-gray-400">{p.client}</td>
                  <td className="px-4 py-3"><span className={`text-xs px-2 py-1 rounded-full ${p.published ? 'bg-emerald-900/50 text-emerald-400' : 'bg-gray-800 text-gray-500'}`}>{p.published ? 'Live' : 'Hidden'}</span></td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(p)} className="p-1.5 text-gray-400 hover:text-indigo-400 hover:bg-gray-700 rounded-md"><Pencil className="h-4 w-4" /></button>
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
function F({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <input value={value} onChange={e => onChange(e.target.value)} className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    </div>
  );
}
