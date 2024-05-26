"use client";

import { SidebarItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardNavProps {
  items: SidebarItem[];
}

const DashboardNav = ({ items }: DashboardNavProps) => {
  const path = usePathname();
  return (
    <nav>
      {items.map((item, index) => (
        <Link href={item.href!} key={index}>
          <span
            className={`flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
              path === item.href
                ? "bg-accent text-accent-foreground"
                : "bg-transparent"
            }`}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;
