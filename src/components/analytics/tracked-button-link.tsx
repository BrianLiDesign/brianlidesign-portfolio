"use client";

import type { ComponentProps } from "react";
import { ButtonLink } from "@/components/ui/button";
import { trackResumeDownload } from "@/lib/analytics-events";

type TrackedButtonLinkProps = ComponentProps<typeof ButtonLink> & {
  location: string;
};

export function TrackedButtonLink({
  location,
  onClick,
  ...props
}: TrackedButtonLinkProps) {
  return (
    <ButtonLink
      {...props}
      onClick={(event) => {
        trackResumeDownload(location);
        onClick?.(event);
      }}
    />
  );
}
