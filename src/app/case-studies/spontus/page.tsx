import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudy } from "@/content/case-studies";
import { createPageMetadata } from "@/lib/metadata";

const study = getCaseStudy("spontus");

export const metadata = createPageMetadata({
  title: study.metadataTitle,
  description: study.metadataDescription,
  path: study.href,
});

export default function SpontusPage() {
  return <CaseStudyDetail study={study} />;
}
