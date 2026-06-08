import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lexend_Deca, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: [{ name: siteMetadata.author }],
  metadataBase: new URL(siteMetadata.url),
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/assets/favicon/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: "Brian Li · Systems Lab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteMetadata.ogImage,
        alt: "ReBalance balance feedback system interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${lexendDeca.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body id="top">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics debug={process.env.NODE_ENV === "development"} />
        <SpeedInsights />
      </body>
    </html>
  );
}
