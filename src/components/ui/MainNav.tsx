import Link from 'next/link';

const MainNav = () => {
  return (
    <div className=" flex items-center justify-between mb:gap-10">
      <Link href={'/'} className=" hidden mb:flex items-center space-x-2">
        <span className=" font-bold hidden sm:inline-block">Post Writer</span>
      </Link>
      <nav className=" mb:flex gap-6 hidden">
        <Link
          href={'/blog'}
          className=" text-lg sm:text-sm font-medium hover:text-foreground/80"
        >
          ブログ
        </Link>
        <Link
          href={'/blog'}
          className=" text-lg sm:text-sm font-medium hover:text-foreground/80"
        >
          特徴
        </Link>
      </nav>
    </div>
  );
};

export default MainNav;
