import type { Metadata } from "next";
import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudy } from "@/content/case-studies";

const study = getCaseStudy("spontus");

export const metadata: Metadata = {
  title: study.metadataTitle,
  description: study.metadataDescription,
};

export default function SpontusPage() {
  return <CaseStudyDetail study={study} />;
}
