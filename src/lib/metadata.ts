const defaultSiteUrl = "https://brianlidesign.github.io/brianlidesign-portfolio";

export const siteMetadata = {
  title: "Brian Li · Hardware/Software Systems Portfolio",
  description:
    "Brian Li is a Hawaii-born computer engineering student building hardware-software systems, embedded tools, robotics projects, and feedback interfaces.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  author: "Brian Li",
  ogImage: "/assets/images/case-studies/rebalance/hero.png",
} as const;
