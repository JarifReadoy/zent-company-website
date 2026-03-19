// Root admin layout — no auth check here, just pass through.
// The (protected) route group layout handles authentication for admin pages.
// The login page is NOT inside (protected), so it remains publicly accessible.
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
