import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { marked } from "marked";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

const blogDirectory = path.join(process.cwd(), "src", "content", "blog");

function readBlogFile(fileName: string) {
  const fullPath = path.join(blogDirectory, fileName);
  return fs.readFileSync(fullPath, "utf8");
}

async function parseBlogFile(fileName: string): Promise<BlogPost> {
  const raw = readBlogFile(fileName);
  const { data, content } = matter(raw);

  const slug = fileName.replace(/\.(mdx|md)$/, "");
  const title = String(data.title ?? "Untitled");
  const date = String(data.date ?? "");
  const excerpt = String(data.excerpt ?? "");
  const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];

  const contentHtml = await marked.parse(content);

  return {
    slug,
    title,
    date,
    excerpt,
    tags,
    contentHtml,
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  if (!fs.existsSync(blogDirectory)) return [];

  const files = fs.readdirSync(blogDirectory).filter((file) => /\.(mdx|md)$/.test(file));
  const posts = await Promise.all(files.map((file) => parseBlogFile(file)));

  const parseTime = (dateStr: string) => {
    const time = new Date(dateStr).getTime();
    return Number.isFinite(time) ? time : 0;
  };

  return posts.sort((a, b) => parseTime(b.date) - parseTime(a.date));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const safeSlug = path.basename(slug);
  const fileName = `${safeSlug}.mdx`;
  const fullPath = path.join(blogDirectory, fileName);
  if (!fs.existsSync(fullPath)) return undefined;

  return parseBlogFile(fileName);
}
