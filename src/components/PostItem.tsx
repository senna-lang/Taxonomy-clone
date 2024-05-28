import { Post } from "@/types";
import { format } from "date-fns";
import Link from "next/link";

interface PostItemProps {
  post: Pick<Post, "title" | "description" | "date">;
  slug: string;
}

const PostItem = ({ post, slug }: PostItemProps) => {
  const test = slug.split("/");
  return (
    <div className=" flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${test[test.length - 1]}`}
          className=" font-semibold hover:underline"
        >
          {post.title}
        </Link>
        <div className=" text-sm text-muted-foreground">
          {format(post.date, "yyyy-MM-dd")}
        </div>
        <div className=" text-sm text-muted-foreground">{post.description}</div>
      </div>
    </div>
  );
};

export default PostItem;
