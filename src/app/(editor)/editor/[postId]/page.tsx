import { allPosts } from ".contentlayer/generated";
import Editor from "@/components/Editor";
import { Post } from "@/types";

async function getPostFromSlug(slug: string) {
  const post = allPosts.find(post => post.slugAsParams === slug);
  return post;
}

export default async function PostEditor({ params }: { params: { postId: string } }) {
  const post = await getPostFromSlug(params.postId);
  return <Editor post={post?.title} />;
}
