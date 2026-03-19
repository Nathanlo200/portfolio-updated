"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";
import { cn } from "@/lib/utils";

const THEME_KEY = "theme-preference";

type ThemePreference = "system" | "light" | "dark";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(pref: ThemePreference) {
  const isDark = pref === "dark" || (pref === "system" && getSystemTheme() === "dark");
  document.documentElement.classList.toggle("dark", isDark);
}

function useClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return now;
}

function formatTime(now: Date | null, timeZone: string) {
  if (!now) return "--:--";

  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(now);
}

function getGreeting(now: Date | null, timeZone: string) {
  if (!now) return "Hello";

  const zoned = new Date(
    now.toLocaleString("en-US", { timeZone })
  );
  const hour = zoned.getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";

  return "Good evening";
}

function TimeZoneClock({
  label,
  timeZone,
  now,
}: {
  label: string;
  timeZone: string;
  now: Date | null;
}) {
  const time = useMemo(() => formatTime(now, timeZone), [now, timeZone]);

  return (
    <span className="inline-flex items-center gap-1 text-[10px] text-foreground/60">
      <span className="font-semibold text-foreground/80">{label}</span>
      <span className="font-mono">{time}</span>
    </span>
  );
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isActive = pathname === href;

  useEffect(() => {
    if (isPending) {
      document.body.classList.add("cursor-wait");
      document.body.dataset.navigating = "true";
    } else {
      document.body.classList.remove("cursor-wait");
      delete document.body.dataset.navigating;
    }
  }, [isPending]);

  return (
    <button
      type="button"
      onClick={() => {
        startTransition(() => {
          router.push(href);
        });
      }}
      className={cn(
        "rounded-full px-3 py-1 text-xs font-semibold transition",
        "cursor-pointer",
        "text-foreground/70 hover:text-foreground hover:bg-card/30",
        isActive && "bg-card/30 text-foreground"
      )}
    >
      {label}
    </button>
  );
}

export function Header() {
  const [theme, setTheme] = useState<ThemePreference>("system");
  const [mobileOpen, setMobileOpen] = useState(false);
  const now = useClock();
  const greeting = useMemo(
    () => getGreeting(now, "Africa/Nairobi"),
    [now]
  );
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(THEME_KEY) as ThemePreference | null;
    const initial = stored ?? "system";
    setTheme(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (window.localStorage.getItem(THEME_KEY) === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === "system") return "dark";
      if (prev === "dark") return "light";
      return "system";
    });
  };

  const themeLabel =
    theme === "system" ? "System" : theme === "dark" ? "Dark" : "Light";

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }, [theme]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
      <div className="page-progress" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-card/20">
              <Image
                src="/images/IMG_0089.jpeg"
                alt="Nathan Lomito"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Nathan Lomito
              </span>
              <span className="text-[10px] text-foreground/60">{greeting}, Nairobi</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[10px] text-foreground/60">
            <TimeZoneClock now={now} label="Nairobi" timeZone="Africa/Nairobi" />
            <span className="text-foreground/30">•</span>
            <TimeZoneClock now={now} label="Kinshasa" timeZone="Africa/Kinshasa" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card/20 text-foreground/70 transition hover:bg-card/30 hover:text-foreground md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden="true">{mobileOpen ? "✕" : "☰"}</span>
          </button>

          <nav className="hidden items-center gap-2 rounded-full bg-card/20 px-3 py-2 shadow-sm backdrop-blur md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
            <button
              type="button"
              onClick={cycleTheme}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold transition",
                "text-foreground/70 hover:text-foreground hover:bg-card/30"
              )}
              aria-label="Toggle theme"
              title={`Theme: ${themeLabel} (click to cycle)`}
            >
              {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🌓"} {themeLabel}
            </button>
          </nav>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden">
          <div className="flex flex-col gap-2 bg-background/70 px-5 pb-5 pt-3 backdrop-blur">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
            <button
              type="button"
              onClick={cycleTheme}
              className={cn(
                "rounded-full px-3 py-2 text-xs font-semibold transition",
                "text-foreground/70 hover:text-foreground hover:bg-card/30"
              )}
              aria-label="Toggle theme"
              title={`Theme: ${themeLabel} (click to cycle)`}
            >
              {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🌓"} {themeLabel}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
