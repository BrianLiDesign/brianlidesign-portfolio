"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  trackCaseStudyOpen,
  trackContactClick,
  trackResumeDownload,
} from "@/lib/analytics-events";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  analytics:
    | { kind: "resume"; location: string }
    | { kind: "contact"; channel: string; location: string }
    | { kind: "case_study"; slug: string; location: string };
};

function handleAnalytics(
  analytics: TrackedAnchorProps["analytics"],
) {
  if (analytics.kind === "resume") {
    trackResumeDownload(analytics.location);
    return;
  }

  if (analytics.kind === "contact") {
    trackContactClick(analytics.channel, analytics.location);
    return;
  }

  trackCaseStudyOpen(analytics.slug, analytics.location);
}

export function TrackedAnchor({
  href,
  children,
  analytics,
  onClick,
  ...props
}: TrackedAnchorProps) {
  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (
    event,
  ) => {
    handleAnalytics(analytics);
    onClick?.(event);
  };

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
