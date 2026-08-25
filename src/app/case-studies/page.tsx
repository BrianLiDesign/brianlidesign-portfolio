import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";

export const metadata: Metadata = {
  title: "Engineering Case Studies — Brian Li",
  description:
    "Engineering case studies by Brian Li covering simulation, robotics, PX4 control, embedded systems, backend workflows, and hardware interfaces.",
};

export default function CaseStudiesPage() {
  return <CaseStudyGrid trackLocation="case_studies_page" />;
}
