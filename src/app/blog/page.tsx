import { getAllPosts } from "@/lib/blog";

import BlogListClient from "../blog/BlogListClient";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogListClient posts={posts} />;
}
