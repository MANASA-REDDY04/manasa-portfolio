import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
      <h2 className="text-4xl font-bold font-mono tracking-tighter">404 - Not Found</h2>
      <p className="text-[var(--muted-foreground)]">Could not find the requested resource</p>
      <Button asChild className="gap-2">
        <Link href="/">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </Button>
    </div>
  );
}
