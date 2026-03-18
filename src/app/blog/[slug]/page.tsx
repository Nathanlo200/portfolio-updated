import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";

type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{post.title}</h1>
          <p className="text-sm font-semibold text-foreground/60">{post.date}</p>
        </header>

        <article className="prose max-w-4xl text-foreground/70 dark:prose-invert">
          {post.content.split("\n\n").map((block, index) => (
            <p key={index}>{block}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
