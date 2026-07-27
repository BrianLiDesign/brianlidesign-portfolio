import type { Metadata } from "next";
import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudy } from "@/content/case-studies";

const study = getCaseStudy("vybetutor");

export const metadata: Metadata = {
  title: study.metadataTitle,
  description: study.metadataDescription,
};

export default function VybeTutorPage() {
  return <CaseStudyDetail study={study} />;
}
