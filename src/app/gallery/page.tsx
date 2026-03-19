"use client";

import { useMemo, useState } from "react";

const IMAGES = [
  "/images/gallery/gallery-1.svg",
  "/images/gallery/gallery-2.svg",
  "/images/gallery/gallery-3.svg",
  "/images/gallery/gallery-4.svg",
  "/images/gallery/gallery-5.svg",
  "/images/gallery/gallery-6.svg",
];

const PASSWORD = "hello word";

export default function GalleryPage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalized = useMemo(() => input.trim().toLowerCase(), [input]);

  const unlock = () => {
    if (normalized === PASSWORD) {
      setUnlocked(true);
      setError(null);
      return;
    }

    setError("Incorrect password. Try again.");
  };

  return (
    <main className="min-h-screen px-6 pb-20 pt-28 text-foreground">
      <section data-animate-on-scroll className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Gallery</h1>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/70">
            A curated collection of snapshots from mobile and web projects.
          </p>
        </header>

        {!unlocked ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center">
            <p className="text-sm text-foreground/70">
              This gallery is protected. Enter the password to view the content.
            </p>

            <div className="mx-auto mt-6 flex max-w-md flex-col gap-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                type="password"
                placeholder="Enter password"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/30"
              />

              {error ? (
                <p className="text-xs text-rose-300">{error}</p>
              ) : null}

              <button
                type="button"
                onClick={unlock}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-card/50"
              >
                Unlock gallery
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <img
                  src={src}
                  alt="Gallery image"
                  className="h-56 w-full object-cover transition duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
