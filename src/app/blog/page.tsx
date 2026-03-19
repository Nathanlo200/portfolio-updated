import Link from "next/link";
import { posts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section data-animate-on-scroll className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Blog</h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/70">
            Notes, guides, and lessons learned while building secure web systems.
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
            <span className="rounded-full bg-card/40 px-3 py-1">Security</span>
            <span className="rounded-full bg-card/40 px-3 py-1">Web</span>
            <span className="rounded-full bg-card/40 px-3 py-1">Product</span>
            <span className="rounded-full bg-card/40 px-3 py-1">Team</span>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Looking for something specific?</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Use the filters above or jump straight into a post. If you want help thinking through a security design or architecture tradeoff, reach out on the contact page.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-card/40 px-5 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/50"
            >
              Get in touch
            </Link>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-border bg-card p-8 transition hover:border-foreground/20 hover:bg-card/50"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-foreground">
                  {post.title}
                </h2>
                <span className="text-xs font-semibold text-foreground/60">
                  {post.date}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
