"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, localeFromString, Locale, t as translate } from "@/lib/i18n";

type TranslationContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
};

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return defaultLocale;
    const stored = window.localStorage.getItem("locale");
    const navigatorLang = typeof navigator !== "undefined" ? navigator.language : undefined;
    return localeFromString(stored ?? navigatorLang);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (value: Locale) => {
    setLocaleState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", value);
      document.documentElement.lang = value;
    }
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string, replacements?: Record<string, string>) => translate(locale, key, replacements),
    }),
    [locale]
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used within a TranslationProvider");
  return ctx;
}
