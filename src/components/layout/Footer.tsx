import { site } from "@/config/site";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Approach", href: "#approach" },
      { label: "Services", href: "#services" },
      { label: "Why us", href: "#why" },
      { label: "Work", href: "#work" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Documentation", href: site.docsUrl },
      { label: "Open the app", href: site.appUrl },
      { label: "Platform services", href: `${site.docsUrl}/services` },
      { label: "REST API", href: `${site.docsUrl}/api` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-[9px] bg-gradient-to-br from-accent to-accent-2 opacity-90" />
                <span className="absolute inset-[3px] rounded-[6px] bg-bg" />
                <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-2" />
              </span>
              <span className="font-display text-[17px] font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-2">
              Custom software for ambitious companies — designed with you, built
              high-fidelity by AI, and watched around the clock.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-2 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-sm text-ink-3">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-ink-3 transition-colors hover:text-ink"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-ink-3 transition-colors hover:text-ink"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
