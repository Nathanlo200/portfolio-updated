import { getAllPosts } from "@/lib/blog";

import BlogListClient from "./BlogListClient";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogListClient posts={posts} />;
}
