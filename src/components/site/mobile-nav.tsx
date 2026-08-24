"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SiteLink } from "@/components/ui/site-link";
import { footerLinks, navItems } from "@/content/site";
import { trackNavClick } from "@/lib/analytics-events";

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="mobile-nav">
      <button
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="mobile-nav__button"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <nav aria-label="Mobile navigation" className="mobile-nav__panel">
          <div className="mobile-nav__panel-header">
            <span>Navigation</span>
            <span>case file index</span>
          </div>
          {navItems.map((item) => (
            <SiteLink
              aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
              className={`mobile-nav__link${
                isActivePath(pathname, item.href) ? " mobile-nav__link--active" : ""
              }`}
              href={item.href}
              key={item.href}
              onClick={() => {
                trackNavClick(item.label, "mobile");
                setOpen(false);
              }}
            >
              <span>{item.label}</span>
              <small>{item.description}</small>
            </SiteLink>
          ))}
          <nav className="mobile-nav__socials" aria-label="Contact links">
            {footerLinks.slice(0, 3).map((link) => (
              <a
                href={link.href}
                key={link.href}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </nav>
      ) : null}
    </div>
  );
}
