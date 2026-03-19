'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { RichTextEditor } from '@/components/admin/rich-text-editor';

interface Job { id: string; title: string; department: string; location: string; type: string; description: string; applyUrl?: string; published: boolean; }

export default function AdminCareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editJob, setEditJob] = useState<Job | null>(null);
  const [form, setForm] = useState({ title: '', department: '', location: '', type: 'Full-time', description: '', applyUrl: '', published: true });
  const [saving, setSaving] = useState(false);

  const load = () => { fetch('/api/admin/careers').then(r => r.json()).then(d => { setJobs(d); setLoading(false); }); };
  useEffect(load, []);

  const del = async (id: string) => {
    if (!confirm('Delete this job?')) return;
    await fetch(`/api/admin/careers/${id}`, { method: 'DELETE' }); load();
  };

  const openNew = () => { setEditJob(null); setForm({ title: '', department: '', location: '', type: 'Full-time', description: '', applyUrl: '', published: true }); setShowForm(true); };
  const openEdit = (j: Job) => {
    setEditJob(j);
    setForm({ title: j.title, department: j.department, location: j.location, type: j.type, description: j.description || '', applyUrl: j.applyUrl || '', published: j.published });
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    if (editJob) {
      await fetch(`/api/admin/careers/${editJob.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    } else {
      await fetch('/api/admin/careers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    }
    setSaving(false); setShowForm(false); load();
  };

  const set = (k: string, v: string | boolean) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-white">Careers</h1><p className="text-gray-400 mt-1">{jobs.length} job listings</p></div>
        <button onClick={openNew} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
          <Plus className="h-4 w-4" /> New Job
        </button>
      </div>
      {showForm && (
        <div className="bg-gray-900 border border-indigo-700 rounded-xl p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">{editJob ? 'Edit Job' : 'New Job Listing'}</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <F label="Title" value={form.title} onChange={v => set('title', v)} />
              <F label="Department" value={form.department} onChange={v => set('department', v)} />
              <F label="Location" value={form.location} onChange={v => set('location', v)} />
              <div>
                <label className="block text-xs text-gray-400 mb-1">Type</label>
                <select value={form.type} onChange={e => set('type', e.target.value)} className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Remote</option>
                </select>
              </div>
            </div>
            <F label="Apply Link URL (optional)" value={form.applyUrl} onChange={v => set('applyUrl', v)} />
            <div>
              <label className="block text-xs text-gray-400 mb-1">Description</label>
              <RichTextEditor value={form.description} onChange={v => set('description', v)} placeholder="Job description, requirements, etc..." />
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
              <th className="px-4 py-3 font-medium">Title</th><th className="px-4 py-3 font-medium">Department</th>
              <th className="px-4 py-3 font-medium">Location</th><th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Status</th><th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr></thead>
            <tbody>
              {jobs.map(j => (
                <tr key={j.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50">
                  <td className="px-4 py-3 text-white font-medium">{j.title}</td>
                  <td className="px-4 py-3 text-gray-400">{j.department}</td>
                  <td className="px-4 py-3 text-gray-400">{j.location}</td>
                  <td className="px-4 py-3 text-gray-400">{j.type}</td>
                  <td className="px-4 py-3"><span className={`text-xs px-2 py-1 rounded-full ${j.published ? 'bg-emerald-900/50 text-emerald-400' : 'bg-gray-800 text-gray-500'}`}>{j.published ? 'Live' : 'Hidden'}</span></td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(j)} className="p-1.5 text-gray-400 hover:text-indigo-400 hover:bg-gray-700 rounded-md"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => del(j.id)} className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-md"><Trash2 className="h-4 w-4" /></button>
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
