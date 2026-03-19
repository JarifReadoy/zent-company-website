'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Package, Briefcase, BookOpen, Users, Folder, ArrowRight } from 'lucide-react';

interface Stats { products: number; services: number; blog: number; careers: number; portfolio: number; }

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/products').then(r => r.json()),
      fetch('/api/admin/services').then(r => r.json()),
      fetch('/api/admin/blog').then(r => r.json()),
      fetch('/api/admin/careers').then(r => r.json()),
      fetch('/api/admin/portfolio').then(r => r.json()),
    ]).then(([products, services, blog, careers, portfolio]) => {
      setStats({ products: products.length, services: services.length, blog: blog.length, careers: careers.length, portfolio: portfolio.length });
    });
  }, []);

  const cards = [
    { label: 'Products', value: stats?.products, icon: Package, href: '/admin/products', color: 'bg-indigo-500' },
    { label: 'Services', value: stats?.services, icon: Briefcase, href: '/admin/services', color: 'bg-violet-500' },
    { label: 'Blog Posts', value: stats?.blog, icon: BookOpen, href: '/admin/blog', color: 'bg-sky-500' },
    { label: 'Job Listings', value: stats?.careers, icon: Users, href: '/admin/careers', color: 'bg-emerald-500' },
    { label: 'Portfolio', value: stats?.portfolio, icon: Folder, href: '/admin/portfolio', color: 'bg-amber-500' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome back. Here&apos;s an overview of your content.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="group bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-600 transition-colors">
            <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
              <card.icon className="h-5 w-5 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">{stats ? card.value : '—'}</p>
            <p className="text-gray-400 text-sm mt-1">{card.label}</p>
            <div className="flex items-center gap-1 mt-3 text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Manage <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-white font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: 'New Product', href: '/admin/products/new' },
            { label: 'New Blog Post', href: '/admin/blog/new' },
            { label: 'New Job Listing', href: '/admin/careers/new' },
            { label: 'New Portfolio Item', href: '/admin/portfolio/new' },
            { label: 'Edit Services', href: '/admin/services' },
            { label: 'Manage SEO', href: '/admin/seo' },
          ].map((action) => (
            <Link key={action.label} href={action.href} className="bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors text-center">
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
