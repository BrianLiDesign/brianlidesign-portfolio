import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

function usesNativeNavigation(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("/assets/")
  );
}

export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  if (usesNativeNavigation(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={false} {...props}>
      {children}
    </Link>
  );
}
