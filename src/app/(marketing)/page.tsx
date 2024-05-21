import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const page = () => {
  return (
    <div>
      <section className="pt-6 mb:pt-10 lg:py-32 pb-8 mb:pb-12">
        <div className=" container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className=" bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm "
          >
            Xをフォローする
          </Link>
          <h1 className=" font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className=" text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.jsとshadcn/uiで作られたものです。
          </p>
          <div className=" space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section id="features" className=" container space-y-6">
        <div className="grid grid-cols-1  gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">特徴</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">モダンアプリケーション</h3>
                  <p className=" text-muted-foreground">
                    モダンな技術スタックを使って作られたものです。
                    <br />
                    Next.js,ContentLayerを利用してマークダウン形式でブログ投稿ができます。
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">簡単な投稿</h3>
                  <p className=" text-muted-foreground">
                    簡単な投稿ができます。
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">簡単な編集</h3>
                  <p className=" text-muted-foreground">
                    簡単な編集ができます。
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/800x600/?programming"
              alt="programming"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className=" mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className=" bg-background border p-2 rounded-lg">
            <div className=" flex flex-col p-6 h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className=" space-y-2">
                <h3 className=" font-bold">Next.js</h3>
                <p className=" text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutes
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-background border p-2 rounded-lg">
            <div className=" flex flex-col p-6 h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className=" space-y-2">
                <h3 className=" font-bold">Next.js</h3>
                <p className=" text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutes
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-background border p-2 rounded-lg">
            <div className=" flex flex-col p-6 h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className=" space-y-2">
                <h3 className=" font-bold">Next.js</h3>
                <p className=" text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutes
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-background border p-2 rounded-lg">
            <div className=" flex flex-col p-6 h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className=" space-y-2">
                <h3 className=" font-bold">Next.js</h3>
                <p className=" text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutes
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-background border p-2 rounded-lg">
            <div className=" flex flex-col p-6 h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className=" space-y-2">
                <h3 className=" font-bold">Next.js</h3>
                <p className=" text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutes
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-background border p-2 rounded-lg">
            <div className=" flex flex-col p-6 h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className=" space-y-2">
                <h3 className=" font-bold">Next.js</h3>
                <p className=" text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto md:max-[58rem] text-center">
          <p className=" text-muted-foreground sm:text-lg sm:leading-7">
            Post Writerはログインするとブログ投稿ができるようになります。
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
