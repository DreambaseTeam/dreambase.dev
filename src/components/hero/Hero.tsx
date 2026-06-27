"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// WebGL only on the client — never SSR the canvas.
const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* live, mouse-reactive WebGL backdrop */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* ambient color wash + grid, sitting above canvas but below text */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-grid mask-fade opacity-60" />
      <div className="glow-blob z-[1] left-[-10%] top-[10%] h-[28rem] w-[28rem]" style={{ background: "var(--accent)" }} />
      <div className="glow-blob z-[1] right-[-8%] bottom-[-6%] h-[26rem] w-[26rem]" style={{ background: "var(--accent-2)" }} />
      {/* bottom fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-b from-transparent to-bg" />

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="pill mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-ink-2"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          AI-native software studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="font-display text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">Custom software,</span>
          <br />
          built exactly to your vision.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink-2 md:text-xl"
        >
          We design with you, build with in-house AI that renders your
          requirements at high fidelity, and watch over everything we ship —
          so your product is never down.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.18 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#approach"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
          >
            See how we work
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1.5 w-1 rounded-full bg-ink-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
