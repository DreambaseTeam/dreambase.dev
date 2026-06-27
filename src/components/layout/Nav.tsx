"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

function Logo() {
  return (
    <a href="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inset-0 rounded-[9px] bg-gradient-to-br from-accent to-accent-2 opacity-90 transition-opacity group-hover:opacity-100" />
        <span className="absolute inset-[3px] rounded-[6px] bg-bg" />
        <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-2" />
      </span>
      <span className="font-display text-[17px] font-semibold tracking-tight">
        {site.name}
      </span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="inline-flex items-center rounded-full bg-ink px-5 py-2 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-ink-2 transition-colors hover:bg-surface hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
