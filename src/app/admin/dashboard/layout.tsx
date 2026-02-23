import { logout } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Briefcase, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Portfolio Pro Admin</span>
        </Link>
        <form action={logout}>
          <Button variant="outline" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </form>
      </header>
      <main className="flex-1 p-4 sm:p-6">{children}</main>
    </div>
  );
}
