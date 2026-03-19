'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, Package, Briefcase, BookOpen,
  Search, Users, Folder, LogOut, Zap, ChevronRight, Globe,
} from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/services', label: 'Services', icon: Briefcase },
  { href: '/admin/blog', label: 'Blog', icon: BookOpen },
  { href: '/admin/seo', label: 'SEO', icon: Search },
  { href: '/admin/careers', label: 'Careers', icon: Users },
  { href: '/admin/portfolio', label: 'Portfolio', icon: Folder },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const isActive = (item: typeof navItems[0]) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href);

  return (
    <aside className="hidden md:flex w-64 flex-col bg-gray-900 border-r border-gray-800 shrink-0">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-800">
        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
          <Zap className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">Zent Admin</p>
          <p className="text-gray-500 text-xs">Content Manager</p>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {active && <ChevronRight className="h-3 w-3 opacity-70" />}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 flex flex-col gap-1 border-t border-gray-800">
        <Link
          href="/"
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          <Globe className="h-4 w-4" />
          View Website
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
