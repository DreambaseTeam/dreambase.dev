import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/config/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${display.variable}`}>
      <body className="min-h-screen font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
