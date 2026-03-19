'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Package, Briefcase, BookOpen,
  Search, Users, Folder, LogOut
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const mobileNavItems = [
  { href: '/admin', icon: LayoutDashboard, exact: true },
  { href: '/admin/products', icon: Package },
  { href: '/admin/services', icon: Briefcase },
  { href: '/admin/portfolio', icon: Folder },
  { href: '/admin/blog', icon: BookOpen },
  { href: '/admin/seo', icon: Search },
  { href: '/admin/careers', icon: Users },
];

export function MobileAdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const isActive = (item: typeof mobileNavItems[0]) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 overflow-x-auto bg-gray-900 border-t border-gray-800 pb-4 pt-2 px-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] no-scrollbar">
      {mobileNavItems.map((item) => {
        const active = isActive(item);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`p-3 shrink-0 rounded-xl transition-colors flex items-center justify-center ${
              active ? 'text-white bg-indigo-600 shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <item.icon className="h-5 w-5" />
          </Link>
        );
      })}
      
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="p-3 shrink-0 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-900/30 transition-colors flex items-center justify-center ml-auto"
      >
        <LogOut className="h-5 w-5" />
      </button>
    </nav>
  );
}
