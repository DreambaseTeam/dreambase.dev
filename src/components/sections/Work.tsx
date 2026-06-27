"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";

type Project = {
  name: string;
  category: string;
  blurb: string;
  gradient: string;
};

const projects: Project[] = [
  {
    name: "Atlas",
    category: "Logistics platform",
    blurb: "A real-time operations console that replaced six spreadsheets and a nightly batch job.",
    gradient: "linear-gradient(135deg,#5b8cff,#8b5bff)",
  },
  {
    name: "Pulse",
    category: "Healthcare SaaS",
    blurb: "Patient-intake software built to spec in weeks, monitored for zero downtime since launch.",
    gradient: "linear-gradient(135deg,#2fe3d0,#5b8cff)",
  },
  {
    name: "Ledger",
    category: "Fintech",
    blurb: "An AI-assisted reconciliation engine that closes the books in hours, not days.",
    gradient: "linear-gradient(135deg,#8b5bff,#ff6fae)",
  },
  {
    name: "Canvas",
    category: "Creator tooling",
    blurb: "A collaborative design-to-publish workflow shipped across web and mobile in one cycle.",
    gradient: "linear-gradient(135deg,#ffb14e,#ff6fae)",
  },
];

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 border-t border-line py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium accent-gradient">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              Software our clients rely on every day
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.08}>
          {projects.map((p) => (
            <Reveal key={p.name}>
              <a
                href="#contact"
                className="card card-hover group block overflow-hidden p-0"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ background: p.gradient }}
                  />
                  <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-7">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                      {p.blurb}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-3 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
              </a>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
