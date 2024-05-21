import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/config/site";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  authors: [
    {
      name: "senna",
      url: siteConfig.links.github,
    },
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "senna",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background antialiased min-h-screen",
          notoSansJP.className
        )}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
