import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { createPageMetadata, siteMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = createPageMetadata({
  title: "Engineering Case Studies — Brian Li",
  description:
    "Engineering case studies by Brian Li covering simulation, robotics, PX4 control, embedded systems, backend workflows, and hardware interfaces.",
  path: routes.caseStudies,
  image: siteMetadata.ogImage,
  imageAlt: "Engineering case studies from Brian Li's systems portfolio",
});

export default function CaseStudiesPage() {
  return <CaseStudyGrid trackLocation="case_studies_page" />;
}
