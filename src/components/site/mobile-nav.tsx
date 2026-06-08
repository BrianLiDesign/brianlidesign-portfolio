"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/content/site";
import {
  trackNavClick,
  trackResumeDownload,
} from "@/lib/analytics-events";
import { routes } from "@/lib/routes";

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
          {navItems.map((item) => (
            <Link
              className="mobile-nav__link"
              href={item.href}
              key={item.href}
              onClick={() => {
                if (item.href === routes.resume) {
                  trackResumeDownload("mobile_nav");
                } else {
                  trackNavClick(item.label, "mobile");
                }
                setOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
