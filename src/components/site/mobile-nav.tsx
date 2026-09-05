"use client";

import { useEffect, useRef, useState } from "react";
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const links = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [],
      );
      const focusable = buttonRef.current ? [buttonRef.current, ...links] : links;
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        aria-controls="mobile-navigation-panel"
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="mobile-nav__button"
        onClick={() => setOpen((value) => !value)}
        ref={buttonRef}
        type="button"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="mobile-nav__panel"
          id="mobile-navigation-panel"
          ref={panelRef}
        >
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
