import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
