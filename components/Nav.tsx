"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "What it does" },
  { href: "#day", label: "A day with it" },
  { href: "#faq", label: "Questions" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      <nav
        aria-label="Main"
        className={`glass flex w-full max-w-6xl items-center justify-between rounded-full py-1.5 pl-5 pr-1.5 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_14px_44px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        <a href="#top" className="font-script text-[40px] leading-[0.8]">
          Scribble
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[15px] text-smoke transition-colors duration-150 hover:text-chalk active:bg-white/10"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.appUrl}
          className="rounded-full bg-chalk px-4 py-2.5 text-[15px] font-semibold text-ink transition-transform duration-100 ease-out active:scale-95"
        >
          Open Scribble
        </a>
      </nav>
    </header>
  );
}
