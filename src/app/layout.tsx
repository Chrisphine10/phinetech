import type { Metadata } from "next";
import { Lato, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Lato matches the existing PhineTech brand typography.
// Self-hosted by next/font, so no request reaches Google at runtime.
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "POS systems Kenya",
    "KRA eTIMS",
    "ETR devices",
    "IT equipment Nairobi",
    "networking",
    "printers",
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

// Applies the stored theme before first paint so there is no light/dark flash.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('phinetech-theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    }
  } catch (e) {}
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
      className={`${lato.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
