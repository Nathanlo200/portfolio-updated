"use client";

import { FormEvent, useState } from "react";
import { Github, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "@/components/TranslationProvider";

type ContactStatus = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body?.error || "Failed to send message");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section data-animate-on-scroll className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{t("contactTitle")}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/70">
            {t("contactIntro")}
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">{t("contactReachMe")}</h2>
            <div className="mt-6 space-y-6 text-foreground/70">
              <div>
                <p className="font-semibold text-foreground">{t("contactEmailLabel")}</p>
                <a
                  href="mailto:nathanlomito@gmail.com"
                  className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  nathanlomito@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground">{t("contactWhatsAppLabel")}</p>
                <a
                  href="https://wa.me/254797595153"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  +254 797 595 153
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground">{t("contactGitHubLabel")}</p>
                <a
                  href="https://github.com/Nathanlo200/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  github.com/Nathanlo200
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">{t("contactLooking")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              {t("contactLookingCopy")}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                {t("contactRemote")}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                {t("contactSecurity")}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                {t("contactMentor")}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
