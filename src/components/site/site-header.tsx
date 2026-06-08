import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { navItems } from "@/content/site";
import { routes } from "@/lib/routes";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link aria-label="Brian Li Systems Lab home" className="brand" href={routes.home}>
        <span className="brand__mark">BL</span>
        <span className="brand__text">Brian Li / Systems Lab</span>
      </Link>
      <nav aria-label="Primary navigation" className="site-header__nav">
        {navItems.map((item) =>
          item.href === routes.resume ? (
            <TrackedAnchor
              analytics={{ kind: "resume", location: "header" }}
              className="site-header__link"
              href={item.href}
              key={item.href}
            >
              {item.label}
              <ArrowDownToLine aria-hidden="true" size={16} strokeWidth={2.5} />
            </TrackedAnchor>
          ) : (
            <Link className="site-header__link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <MobileNav />
    </header>
  );
}
