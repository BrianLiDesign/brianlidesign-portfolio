import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lexend_Deca, JetBrains_Mono } from "next/font/google";
import { ContactCta } from "@/components/site/contact-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteMetadata } from "@/lib/metadata";
import {
  externalAnalyticsProps,
  externalSpeedInsightsProps,
} from "@/lib/vercel-observability";
import "@/styles/globals.css";

const githubPagesRedirectScript = `
(() => {
  const vercelOrigin = "https://brianlidesign.vercel.app";
  const githubPagesHost = "brianlidesign.github.io";
  const githubPagesBasePath = "/brianlidesign-portfolio";

  if (window.location.hostname !== githubPagesHost) {
    return;
  }

  const path = window.location.pathname;
  const targetPath = path === githubPagesBasePath
    ? "/"
    : path.startsWith(githubPagesBasePath + "/")
      ? path.slice(githubPagesBasePath.length)
      : path;

  window.location.replace(
    vercelOrigin + targetPath + window.location.search + window.location.hash,
  );
})();
`;

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
  alternates: {
    canonical: siteMetadata.url,
  },
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: githubPagesRedirectScript }} />
      </head>
      <body id="top">
        <SiteHeader />
        <main>{children}</main>
        <ContactCta />
        <SiteFooter />
        <Analytics
          debug={process.env.NODE_ENV === "development"}
          {...externalAnalyticsProps}
        />
        <SpeedInsights
          sampleRate={1}
          debug={process.env.NODE_ENV === "development"}
          {...externalSpeedInsightsProps}
        />
      </body>
    </html>
  );
}
