import { Metadata } from "next";
import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudy } from "@/content/case-studies";

const study = getCaseStudy("flip-that-digit");

export const metadata: Metadata = {
  title: study.metadataTitle,
  description: study.metadataDescription,
};

export default function FlipThatDigitPage() {
  return <CaseStudyDetail study={study} />;
}
