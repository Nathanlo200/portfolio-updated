export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
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
            Building secure, scalable platforms
            <br />
            that people love to use
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base">
            I&apos;m a software engineer with 5+ years delivering secure full-stack
            products and strengthening teams through thoughtful, practical
            security.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-card/20 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/30"
            >
              About me
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/10 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/20"
            >
              Explore work
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-lg font-semibold text-foreground">Security-first engineering</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              I build systems with defense in depth, automated testing, and threat-informed design so your product stays resilient at scale.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-lg font-semibold text-foreground">End-to-end ownership</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              From concept to launch, I ship fast while keeping architecture maintainable, secure, and aligned with business needs.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-lg font-semibold text-foreground">Mentoring & leadership</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              I help teams grow with clear processes, focused feedback, and shared ownership so engineers feel confident shipping high-quality work.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-10">
          <h2 className="text-2xl font-semibold text-foreground">Latest on the blog</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
            I write about web security, tooling, and the day-to-day tradeoffs of building products. Check out the latest posts or dive in from the blog page.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-card/20 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/30"
            >
              Read the blog
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/10 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/20"
            >
              Say hello
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Nathan Lomito — built with Next.js.
      </footer>
    </main>
  );
}
