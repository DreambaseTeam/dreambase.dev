import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <article className="relative">
      {/* ambient glow behind the header */}
      <div
        className="glow-blob left-1/2 top-24 h-72 w-[36rem] -translate-x-1/2"
        style={{ background: "var(--accent)", opacity: 0.1 }}
      />

      <div className="relative mx-auto max-w-3xl px-6 pb-28 pt-36 md:pt-40">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <header className="mt-8 border-b border-line pb-10">
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-2">
            {intro}
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-ink-3">
            Last updated · {updated}
          </p>
        </header>

        <div className="legal-prose mt-12">{children}</div>
      </div>
    </article>
  );
}
