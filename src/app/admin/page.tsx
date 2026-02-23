import { LoginForm } from '@/components/admin/LoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
            <Briefcase className="mx-auto h-12 w-12" />
          <CardTitle className="font-headline text-2xl">Portfolio Pro Admin</CardTitle>
          <CardDescription>Please log in to manage your portfolio.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
