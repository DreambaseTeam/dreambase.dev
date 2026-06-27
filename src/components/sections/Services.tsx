"use client";

import {
  Boxes,
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { site } from "@/config/site";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    icon: Boxes,
    title: "Product & platform engineering",
    body: "End-to-end custom software — internal tools, customer platforms, and the systems your business actually runs on.",
  },
  {
    icon: Globe,
    title: "Web applications",
    body: "Fast, accessible, beautifully built web apps with the polish your brand deserves and the performance your users expect.",
  },
  {
    icon: Smartphone,
    title: "Mobile applications",
    body: "Native-quality iOS and Android experiences, designed and delivered to feel inevitable in your customers' hands.",
  },
  {
    icon: BrainCircuit,
    title: "Applied & generative AI",
    body: "We don't just use AI to build — we build AI into your product, from copilots to automation that compounds over time.",
  },
  {
    icon: Cloud,
    title: "Cloud & infrastructure",
    body: "Scalable, secure foundations that grow with you, provisioned and tuned for cost, speed, and resilience.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & monitoring",
    body: "Our in-house monitoring AI keeps a constant watch on everything we ship, so issues are resolved before you feel them.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 border-t border-line py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium accent-gradient">What we do</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              One studio for everything you need to ship
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-2">
              From the first whiteboard to the on-call dashboard, we cover the
              full lifecycle — so you have one accountable partner, not five.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                className="group bg-bg p-8 transition-colors hover:bg-surface"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 transition-colors group-hover:border-accent/40">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-2">
                  {s.body}
                </p>
              </Reveal>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <a
            href={`${site.docsUrl}/services`}
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
          >
            Explore the platform &amp; service docs
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
