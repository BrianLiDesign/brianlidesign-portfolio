import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";

export const metadata: Metadata = {
  title: "Engineering Case Studies — Brian Li",
  description:
    "Engineering case studies by Brian Li covering embedded systems, FPGA design, backend workflows, hardware interfaces, and product decisions.",
};

export default function CaseStudiesPage() {
  return <CaseStudyGrid trackLocation="case_studies_page" />;
}
