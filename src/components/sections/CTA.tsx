"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";

export function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-line">
        {/* layered glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg-2" />
        <div className="glow-blob left-[-6%] top-[-30%] h-72 w-72" style={{ background: "var(--accent)", opacity: 0.4 }} />
        <div className="glow-blob bottom-[-40%] right-[-4%] h-80 w-80" style={{ background: "var(--accent-2)", opacity: 0.35 }} />
        <div className="absolute inset-0 bg-grid opacity-30 mask-fade" />

        <div className="relative px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Let&apos;s build the software you&apos;ve been picturing
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
            Tell us what you&apos;re trying to build. We&apos;ll show you how
            we&apos;d design it, build it high-fidelity, and keep it running.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
