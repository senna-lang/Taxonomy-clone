'use client';

import { NavItem } from '@/types';
import Link from 'next/link';
import { useState } from 'react';
import MobileNav from './MobileNav';

const MainNav = ({ items }: { items: NavItem[] }) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className=" flex items-center justify-between md:gap-10">
      <Link href={'/'} className="hidden md:flex items-center space-x-2">
        <span className=" font-bold hidden sm:inline-block">Post Writer</span>
      </Link>
      <nav className="hidden md:flex gap-6 ">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className=" text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
};

export default MainNav;
