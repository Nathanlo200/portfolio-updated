import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold text-foreground/60">{post.date}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-card/20 px-3 py-1 text-[11px] font-semibold text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <article
          className="prose max-w-4xl text-foreground/70 dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </section>
    </main>
  );
}
