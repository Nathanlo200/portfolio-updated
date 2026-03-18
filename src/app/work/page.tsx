import Image from "next/image";

const projects = [
  {
    title: "Mobile productivity app",
    description:
      "A cross-platform mobile app for task tracking and collaboration, built with React Native and synchronized in real-time.",
    image: "/images/projects/mobile-app-1.svg",
    tags: ["React Native", "Realtime", "GraphQL"],
  },
  {
    title: "Web admin dashboard",
    description:
      "A secure admin dashboard with role-based access, audit logging, and analytics charts.",
    image: "/images/projects/web-app-1.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Cybersecurity tooling",
    description:
      "Custom tools for incident response, log aggregation, and alert enrichment.",
    image: "/images/projects/security-tool-1.svg",
    tags: ["Python", "Elastic Stack", "SaaS"],
  },
  {
    title: "Infrastructure pipeline",
    description:
      "Automated build and deployment pipelines with security scanning and blue/green deployment.",
    image: "/images/projects/cloud-infra-1.svg",
    tags: ["Terraform", "CI/CD", "AWS"],
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Work</h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/70">
            Selected projects highlighting security, scalability, and user
            experience.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:border-border hover:bg-card/90"
            >
              <div className="relative mb-5 h-44 overflow-hidden rounded-2xl bg-card/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>

              <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-card/20 px-3 py-1 text-xs font-semibold text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
