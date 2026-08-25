import type { Metadata } from "next";
import { KeresCaseStudy } from "@/components/keres/keres-case-study";
import { siteMetadata } from "@/lib/metadata";

const title = "KERES Multi-Drone Simulation — Case Study";
const description =
  "Brian Li's KERES case study: Python swarm coordination, PX4 SITL control, Isaac Sim integration, reproducible experiments, replay, and verification.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/case-studies/keres",
  },
  openGraph: {
    title,
    description,
    url: "/case-studies/keres",
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "KERES multi-drone simulation and experiment replay interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteMetadata.ogImage],
  },
};

export default function KeresPage() {
  return <KeresCaseStudy />;
}
