import DashboardNav from "@/components/DashboardNav";
import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";
import { dashboardConfig } from "@/config/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className=" flex min-h-screen flex-col space-y-6">
        <header className=" sticky top-0 z-40 border-b bg-background">
          <div className=" container flex items-center justify-between py-4 h-16">
            <MainNav items={dashboardConfig.mainNav} />
          </div>
        </header>
        <div className=" container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          <aside className=" hidden md:flex w-[200px] flex-col">
            <DashboardNav items={dashboardConfig.sidebar} />
          </aside>
          <main className=" flex flex-col w-full flex-1 overflow-hidden">
            {children}
          </main>
        </div>
        <SiteFooter />
      </div>
    </div>
  );
}
