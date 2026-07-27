import type { Metadata } from "next";
import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudy } from "@/content/case-studies";

const study = getCaseStudy("operation-surf");

export const metadata: Metadata = {
  title: study.metadataTitle,
  description: study.metadataDescription,
};

export default function OperationSurfPage() {
  return <CaseStudyDetail study={study} />;
}
