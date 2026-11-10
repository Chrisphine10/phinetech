import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import { BentoMotion } from "@/components/bento-motion";
import "./globals.css";
import "./theme.css";

// Inter carries the Notion-like feel. Self-hosted by next/font, so no request
// reaches Google at runtime.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Display face for headings: geometric and slightly technical, to sit with the
// mono read-outs.
const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "smart city solutions Kenya",
    "smart community technology Africa",
    "smart utility metering",
    "emergency response software",
    "education technology Africa",
    "AI automation Kenya",
    "SACCO management system",
    "VSLA digitisation",
    "school management system Kenya",
    "KRA eTIMS POS",
    "software development Kenya",
    "PhineTech",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

// Tints browser chrome to match the brand. Must be a separate `viewport`
// export — Next no longer accepts themeColor inside `metadata`.
export const viewport: Viewport = {
  themeColor: [
    { color: "#090909" },
  ],
};

// Dark is the default; a stored "light" choice is applied before first paint
// so there is no flash.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('phinetech-theme');
    document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Scroll-reveal hides elements in CSS. Without JS nothing would ever
            unhide them, so make everything visible when JS is unavailable. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <BentoMotion />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
