import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">About</h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/70">
            I&apos;m Nathan Lomito — a software engineer and cybersecurity
            specialist with over 5 years of experience building reliable, secure
            web platforms. I focus on end-to-end systems: from infrastructure and
            APIs to frontend UX.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src="/images/IMG_0089.jpeg"
              alt="Nathan Lomito"
              width={800}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="md:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-semibold">Experience</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  5+ years designing and shipping software for startups and
                  enterprise teams, with a strong focus on security, reliability,
                  and scalability.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  <li>• Led secure API design and implementation</li>
                  <li>• Built observability pipelines (metrics + logging + alerts)</li>
                  <li>• Developed incident response tooling and runbooks</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-semibold">Focus areas</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  I help teams build systems that are resilient, performant, and
                  secure. My work covers everything from infrastructure as code to
                  application hardening.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  <li>• API security & authentication</li>
                  <li>• Cloud infrastructure & automation</li>
                  <li>• Threat modeling & risk reduction</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-semibold">Tech stack</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  The tools I use to design and ship software reliably.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  <li>• TypeScript, Node.js, Next.js, React</li>
                  <li>• PostgreSQL, Redis, Kafka</li>
                  <li>• AWS (ECS, Lambda, S3, RDS), Terraform</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-semibold">Tools</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Used for building, testing, monitoring, and securing systems.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  <li>• GitHub Actions, Docker, Kubernetes</li>
                  <li>• Snyk, OWASP ZAP, Prisma</li>
                  <li>• Grafana, Datadog, New Relic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
