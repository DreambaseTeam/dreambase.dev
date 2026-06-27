"use client";

import { Users, Wand2, Radar, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";

type Step = {
  no: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  body: string;
  points: string[];
};

const steps: Step[] = [
  {
    no: "01",
    icon: Users,
    kicker: "Design, together",
    title: "We capture exactly what you need",
    body: "Every engagement starts with collaborative design sessions run side-by-side with your team. We turn fuzzy goals into precise, signed-off designs and requirements — so there's no gap between what you imagined and what we build.",
    points: [
      "Hands-on workshops with your stakeholders",
      "Requirements and expectations captured in detail",
      "Interactive designs you approve before a line of code",
    ],
  },
  {
    no: "02",
    icon: Wand2,
    kicker: "Build, high-fidelity",
    title: "In-house AI renders your vision precisely",
    body: "Our proprietary AI tooling reads those approved designs and requirements and builds production software that very closely matches them. High fidelity isn't a buzzword here — it's the standard we engineer against, every release.",
    points: [
      "Designs and specs become working software",
      "Output measured against your original intent",
      "Faster delivery without cutting corners",
    ],
  },
  {
    no: "03",
    icon: Radar,
    kicker: "Run, always-on",
    title: "We make sure it never goes down",
    body: "After launch, our in-house AI continuously watches everything we ship for you — detecting, diagnosing and resolving issues before they become outages. Your software stays up, so your business keeps moving.",
    points: [
      "Autonomous, around-the-clock monitoring",
      "Issues caught and resolved proactively",
      "Engineered for zero downtime",
    ],
  },
];

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <Reveal as="li" className="relative">
      <div className="card card-hover h-full p-7 md:p-9">
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-2">
            <Icon className="h-5 w-5 text-accent" />
          </span>
          <span className="font-display text-5xl font-semibold leading-none text-ink-3/40">
            {step.no}
          </span>
        </div>

        <p className="mt-7 text-sm font-medium accent-gradient">{step.kicker}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
          {step.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{step.body}</p>

        <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
          {step.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-ink-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-2" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Approach() {
  return (
    <section id="approach" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="glow-blob left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2" style={{ background: "var(--accent)", opacity: 0.12 }} />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium accent-gradient">Our approach</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Designed with you. Built by AI. Watched around the clock.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">
            Three deliberate stages take your idea from a shared whiteboard to
            software that runs itself — each one engineered to keep what you get
            faithful to what you asked for.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.1}>
          {steps.map((step) => (
            <StepCard key={step.no} step={step} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
