"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Callout from "./Callout";

const components = {
  Image,
  Callout,
};

const Mdx = ({ code }: { code: string }) => {
  const Components = useMDXComponent(code);
  return (
    <div className=" prose lg:prose-lg max-w-full">
      <Components components={components} />
    </div>
  );
};

export default Mdx;
