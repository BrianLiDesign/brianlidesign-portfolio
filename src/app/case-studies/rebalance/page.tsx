import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudy } from "@/content/case-studies";
import { createPageMetadata } from "@/lib/metadata";

const study = getCaseStudy("rebalance");

export const metadata = createPageMetadata({
  title: study.metadataTitle,
  description: study.metadataDescription,
  path: study.href,
  image: study.heroMedia.src,
  imageAlt: study.heroMedia.alt,
});

export default function ReBalancePage() {
  return <CaseStudyDetail study={study} />;
}
