"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll("[data-animate-on-scroll]");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div key={pathname} className="min-h-screen animate__animated animate__fadeIn">
      {children}
    </div>
  );
}
