import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { siteMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteMetadata.url}${routes.home}` },
    { url: `${siteMetadata.url}${routes.about}` },
    { url: `${siteMetadata.url}${routes.caseStudies}` },
    { url: `${siteMetadata.url}${routes.keres}` },
    { url: `${siteMetadata.url}${routes.rebalance}` },
    { url: `${siteMetadata.url}${routes.spontus}` },
    { url: `${siteMetadata.url}${routes.flipThatDigit}` },
    { url: `${siteMetadata.url}${routes.operationSurf}` },
    { url: `${siteMetadata.url}${routes.vybeTutor}` },
    { url: `${siteMetadata.url}${routes.debugLog}` },
    { url: `${siteMetadata.url}${routes.writing}` },
  ];
}
