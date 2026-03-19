"use client";

import Link from "next/link";
import { useTranslation } from "@/components/TranslationProvider";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="relative flex min-h-screen flex-col">
      <section data-animate-on-scroll className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#3b82f6] via-[#06b6d4] to-transparent opacity-30 blur-3xl" />
          <div className="absolute left-[12%] top-[55%] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-[#f97316] via-[#f43f5e] to-transparent opacity-25 blur-3xl" />
          <div className="absolute right-[10%] top-[55%] h-[240px] w-[240px] rounded-full bg-gradient-to-br from-[#a855f7] via-[#6366f1] to-transparent opacity-20 blur-3xl" />
        </div>

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-card/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground/80 shadow-sm backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-teal-400" />
            <span className="text-foreground/80">Nathan Lomito</span>
            <span className="text-foreground/50">|</span>
            <span className="text-foreground/70">Software engineer & cybersecurity</span>
          </div>

          <h1 className="mt-10 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
            {t("homeTagline")}
            <br />
            {t("homeSubtagline")}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base">
            {t("aboutIntro")}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-card/20 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/30"
            >
              {t("homeAbout")}
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/10 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/20"
            >
              {t("homeWork")}
            </Link>
          </div>
        </div>
      </section>

      <section data-animate-on-scroll className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-lg font-semibold text-foreground">{t("homeSecurity")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {t("homeSecurityCopy")}
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-lg font-semibold text-foreground">{t("homeOwnership")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {t("homeOwnershipCopy")}
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-lg font-semibold text-foreground">{t("homeMentoring")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {t("homeMentoringCopy")}
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-10">
          <h2 className="text-2xl font-semibold text-foreground">{t("homeBlogHeader")}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
            {t("homeBlogCopy")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-card/20 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/30"
            >
              {t("homeReadBlog")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/10 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/20"
            >
              {t("homeSayHello")}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-foreground/60">
        {t("footer", { year: String(new Date().getFullYear()) })}
      </footer>
    </main>
  );
}
