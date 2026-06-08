import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { siteMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteMetadata.url}${routes.home}`, lastModified },
    { url: `${siteMetadata.url}${routes.about}`, lastModified },
    { url: `${siteMetadata.url}${routes.caseStudies}`, lastModified },
    { url: `${siteMetadata.url}${routes.rebalance}`, lastModified },
    { url: `${siteMetadata.url}${routes.flipThatDigit}`, lastModified },
    { url: `${siteMetadata.url}${routes.operationSurf}`, lastModified },
    { url: `${siteMetadata.url}${routes.vybeTutor}`, lastModified },
    { url: `${siteMetadata.url}${routes.debugLog}`, lastModified },
    { url: `${siteMetadata.url}${routes.writing}`, lastModified },
  ];
}
