import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "ドキュメント",
      href: "/docs",
    },
    {
      title: "サポート",
      href: "/support",
      disabled: true,
    },
  ],
  sidebar: [
    {
      title: "記事投稿",
      href: "/dashboard",
    },
    {
      title: "お支払い",
      href: "/dashboard/billing",
    },
    {
      title: "設定",
      href: "/dashboard/settings",
    },
  ],
};
