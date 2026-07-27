import type { Metadata } from "next";
import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudy } from "@/content/case-studies";

const study = getCaseStudy("rebalance");

export const metadata: Metadata = {
  title: study.metadataTitle,
  description: study.metadataDescription,
};

export default function ReBalancePage() {
  return <CaseStudyDetail study={study} />;
}
