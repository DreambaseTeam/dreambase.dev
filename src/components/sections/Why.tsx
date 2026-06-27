"use client";

import { Reveal, RevealGroup } from "@/components/ui/Reveal";

const stats = [
  { value: "99.99%", label: "Uptime we engineer toward" },
  { value: "2×", label: "Faster delivery with AI-built code" },
  { value: "24/7", label: "Autonomous monitoring coverage" },
  { value: "1", label: "Accountable partner, end to end" },
];

const reasons = [
  {
    title: "Fidelity is the contract",
    body: "What you approve in design is what you get in production. Our AI build pipeline is measured against your original requirements, not a developer's interpretation of them.",
  },
  {
    title: "Speed without the trade-off",
    body: "Generative tooling lets us move at a pace traditional shops can't match — while human judgment stays in the loop on every decision that matters.",
  },
  {
    title: "It keeps working after launch",
    body: "Most studios disappear at handoff. Our monitoring AI stays on watch, so the software you paid for keeps doing its job, quietly, every day.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative scroll-mt-24 border-t border-line py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-sm font-medium accent-gradient">Why Dreambase</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
                Built to match your vision — and built to last
              </h2>
            </Reveal>

            <div className="mt-10 space-y-8">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.08}>
                  <div className="border-l border-line pl-6">
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <RevealGroup className="grid grid-cols-2 gap-5 self-start" stagger={0.08}>
            {stats.map((s) => (
              <Reveal key={s.label} className="card p-7">
                <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  <span className="accent-gradient">{s.value}</span>
                </p>
                <p className="mt-3 text-[13px] leading-snug text-ink-2">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
