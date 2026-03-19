"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { useTranslation } from "@/components/TranslationProvider";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section data-animate-on-scroll className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{t("aboutTitle")}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/70">
            {t("aboutIntro")}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Nathan_Lomito_CV_Professional_EN.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-card/20 px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/30"
            >
              <Download className="h-4 w-4" />
              {t("aboutDownloadEn")}
            </a>
            <a
              href="/Nathan_Lomito_CV_Professional_FR.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-card/20 px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-card/30"
            >
              <Download className="h-4 w-4" />
              {t("aboutDownloadFr")}
            </a>
          </div>
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
                <h2 className="text-xl font-semibold">{t("aboutExperience")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  {t("aboutExperienceCopy")}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  <li>• {t("aboutExperienceList1")}</li>
                  <li>• {t("aboutExperienceList2")}</li>
                  <li>• {t("aboutExperienceList3")}</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-semibold">{t("aboutFocus")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  {t("aboutFocusCopy")}
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
                <h2 className="text-xl font-semibold">{t("aboutStack")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  {t("aboutStackCopy")}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  <li>• TypeScript, Node.js, Next.js, React</li>
                  <li>• PostgreSQL, Redis, Kafka</li>
                  <li>• AWS (ECS, Lambda, S3, RDS), Terraform</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-semibold">{t("aboutTools")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  {t("aboutToolsCopy")}
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
