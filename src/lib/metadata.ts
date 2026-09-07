import type { Metadata } from "next";

const defaultSiteUrl = "https://brianlidesign.vercel.app";

export const siteMetadata = {
  title: "Brian Li · Hardware/Software Systems Portfolio",
  description:
    "Brian Li is a computer engineering student building simulation, robotics, embedded, and hardware-software systems with measurable evidence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  author: "Brian Li",
  ogImage: "/assets/images/case-studies/keres/hero.png",
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({ title, description, path, image, imageAlt }: PageMetadataOptions): Metadata {
  const url = new URL(path, siteMetadata.url).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "Brian Li · Systems Lab",
      locale: "en_US",
      type: "website",
      images: image ? [{ url: image, alt: imageAlt ?? `${title} preview` }] : [],
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}
