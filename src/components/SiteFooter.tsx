import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const SiteFooter = () => {
  return (
    <footer>
      <div className=" container py-10">
        <p className=" text-center text-sm">
          Build by {""}
          <Link
            href={siteConfig.links.github}
            className=" underline underline-offset-4 font-medium mr-3"
          >
            senna
          </Link>
          Hosted on {""}
          <Link
            href="http://vercer.com"
            className=" underline underline-offset-4 font-medium"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
