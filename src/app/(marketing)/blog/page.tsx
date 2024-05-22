import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

const BlogPage = () => {
  const posts = allPosts;
  return (
    <div className="container max-w-4xl my-6 lg:py-10">
      <div className=" space-y-2">
        <h1 className=" font-extrabold text-4xl lg:text-5xl -tracking-tight">
          Blog⚡️
        </h1>
        <p className=" text-muted-foreground text-xl">
          Blog with ContentLayer+MDX
        </p>
      </div>
      <hr className=" my-8" />
      <div className="grid grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <article key={index} className=" relative flex flex-col space-y-2">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={400}
                className=" rounded-md"
              />
            )}
            <h2 className=" text-2xl font-bold mt-4">{post.title}</h2>
            {post.description && (
              <p className=" text-muted-foreground">{post.description}</p>
            )}
            {post.date && (
              <p className=" text-muted-foreground">
                {format(post.date, "yyyy/MM/dd")}
              </p>
            )}
            <Link
              href={`/blog/${post.slug}`}
              className=" absolute inset-0"
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
