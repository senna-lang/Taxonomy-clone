import { allPosts } from ".contentlayer/generated";
import Editor from "@/components/Editor";

async function getPostFromSlug(slug: string) {
  const post = allPosts.find(post => post.slugAsParams === slug);
  return post;
}

export default async function PostEditor({
  params,
}: {
  params: { postId: string };
}) {
  const post = await getPostFromSlug(params.postId);
  console.log(params.postId);
  const title = post!.title;
  const content = post!.body.code;
  return <Editor title={title} content={content} />;
}
