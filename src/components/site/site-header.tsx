"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/site";
import { routes } from "@/lib/routes";
import { MobileNav } from "./mobile-nav";

function isActivePath(pathname: string, href: string) {
  if (href === routes.home) {
    return pathname === routes.home;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link aria-label="Brian Li Systems Lab home" className="brand" href={routes.home}>
        <span className="brand__mark">BL</span>
        <span className="brand__text">Brian Li / Systems Lab</span>
      </Link>
      <nav aria-label="Primary navigation" className="site-header__nav">
        {navItems.map((item) => (
          <Link
            aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
            className={`site-header__link${
              isActivePath(pathname, item.href) ? " site-header__link--active" : ""
            }`}
            href={item.href}
            key={item.href}
          >
            {item.label}
            {item.icon ? (
              <Download aria-hidden="true" size={16} strokeWidth={2.5} />
            ) : null}
          </Link>
        ))}
      </nav>
      <MobileNav />
    </header>
  );
}
