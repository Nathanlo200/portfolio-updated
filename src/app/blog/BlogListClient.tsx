"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useTranslation } from "@/components/TranslationProvider";
import type { BlogPostMeta } from "@/lib/blog";

type BlogListClientProps = {
  posts: BlogPostMeta[];
};

const ALL_TAG = "__ALL__";

export default function BlogListClient({ posts }: BlogListClientProps) {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState<string>(ALL_TAG);

  const tags = useMemo(() => {
    const unique = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => unique.add(tag)));
    return [ALL_TAG, ...Array.from(unique).sort()];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeTag === ALL_TAG) return posts;
    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag, posts]);

  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section data-animate-on-scroll className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{t("blogTitle")}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/70">
            {t("blogIntro")}
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-3 py-1 transition ${
                  tag === activeTag
                    ? "bg-foreground/20 text-foreground"
                    : "bg-card/40 hover:bg-card/50"
                }`}
              >
                {tag === ALL_TAG ? t("blogAll") : t(`tag${tag}`) || tag}
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">{t("blogFilters")}</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {t("blogLooking")}
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-card/40 px-5 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/50"
            >
              {t("blogGetInTouch")}
            </Link>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-border bg-card p-8 transition hover:border-foreground/20 hover:bg-card/50"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-foreground">
                  {post.title}
                </h2>
                <span className="text-xs font-semibold text-foreground/60">{post.date}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-card/30 px-3 py-1 text-[11px] font-semibold text-foreground/70"
                  >
                    {t(`tag${tag}`) || tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
