import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { MobileAdminNav } from '@/components/admin/mobile-admin-nav';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Server-side auth check — no middleware needed
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');

  if (!session || session.value !== 'authenticated') {
    redirect('/admin/login');
  }

  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden relative">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        {children}
      </main>
      <MobileAdminNav />
    </div>
  );
}
