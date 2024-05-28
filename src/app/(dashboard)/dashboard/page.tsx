import DashboardHeader from "@/components/DashboardHeader";
import DashboardShell from "@/components/DashboardShell";
import PostCreateButton from "@/components/PostCreateButton";
import PostItem from "@/components/PostItem";
import { allPosts } from "contentlayer/generated";

export default function Dashboard() {
  const posts = allPosts;
  return (
    <DashboardShell>
      <DashboardHeader heading="記事投稿" text="記事の投稿と管理">
        <PostCreateButton />
      </DashboardHeader>
      {posts.map(post => (
        <div className="flex flex-col space-y-1 ">
          <div className=" border border-muted-foreground border-dashed rounded-md">
            <PostItem key={post.slug} post={post} slug={post.slug}/>
          </div>
        </div>
      ))}
    </DashboardShell>
  );
}
