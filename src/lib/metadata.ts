const defaultSiteUrl = "https://brianlidesign.vercel.app";

export const siteMetadata = {
  title: "Brian Li · Hardware/Software Systems Portfolio",
  description:
    "Brian Li is a computer engineering student building simulation, robotics, embedded, and hardware-software systems with measurable evidence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  author: "Brian Li",
  ogImage: "/assets/images/case-studies/keres/hero.png",
} as const;
