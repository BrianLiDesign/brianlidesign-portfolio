import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudy } from "@/content/case-studies";
import { createPageMetadata } from "@/lib/metadata";

const study = getCaseStudy("vybetutor");

export const metadata = createPageMetadata({
  title: study.metadataTitle,
  description: study.metadataDescription,
  path: study.href,
  image: "/assets/images/case-studies/vybetutor/extension-sidebar-correct.png",
  imageAlt: "Vybe Tutor extension showing learning feedback in VS Code",
});

export default function VybeTutorPage() {
  return <CaseStudyDetail study={study} />;
}
