import { KeresCaseStudy } from "@/components/keres/keres-case-study";
import { createPageMetadata, siteMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const title = "KERES Multi-Drone Simulation — Case Study";
const description =
  "Brian Li's KERES case study: Python swarm coordination, PX4 SITL control, Isaac Sim integration, reproducible experiments, replay, and verification.";

export const metadata = createPageMetadata({
  title,
  description,
  path: routes.keres,
  image: siteMetadata.ogImage,
  imageAlt: "KERES multi-drone simulation and experiment replay interface",
});

export default function KeresPage() {
  return <KeresCaseStudy />;
}
