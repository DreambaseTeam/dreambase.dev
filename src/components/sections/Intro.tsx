"use client";

import { Reveal } from "@/components/ui/Reveal";

const clients = [
  "Northwind",
  "Aperture",
  "Vantage",
  "Helio",
  "Quanta",
  "Meridian",
  "Lumen",
  "Cobalt",
  "Sable",
  "Forge",
];

export function Intro() {
  return (
    <section className="relative border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-medium accent-gradient">Who we are</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-[2.6rem]">
            We&apos;re a software studio for companies that refuse to settle for
            off-the-shelf. We pair <span className="text-ink">human-led design</span>{" "}
            with <span className="text-ink">in-house AI</span> to ship custom
            products that fit your business like they were grown inside it.
          </h2>
        </Reveal>
      </div>

      {/* trusted-by marquee */}
      <Reveal delay={0.1} className="mt-16">
        <p className="mb-7 text-center text-xs uppercase tracking-[0.2em] text-ink-3">
          Trusted by teams building what&apos;s next
        </p>
        <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-14 pr-14">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-xl font-medium tracking-tight text-ink-3 transition-colors hover:text-ink-2"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
