import MainNav from '@/components/ui/MainNav';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className=" container z-40 bg-background">
        <div className=" flex items-center justify-between h-20 py-6">
         <MainNav/>
          <nav>
            <Link
              href={'/login'}
              className={cn(
                buttonVariants({ size: 'sm', variant: 'secondary' })
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
