import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { Download } from "lucide-react";
import { SiteLink } from "@/components/ui/site-link";
import { footerLinks, sourceCodeUrl } from "@/content/site";
import { routes } from "@/lib/routes";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="site-footer__meta">
          Brian Li / Hawaii-born computer engineering student
        </p>
        <h2>Code with precision. Circuits with purpose.</h2>
        <p className="site-footer__availability">
          Open to conversations about embedded systems, robotics, hardware/software tooling, and useful feedback interfaces.
        </p>
      </div>
      <nav className="site-footer__sitemap" aria-label="Footer sitemap">
        <div>
          <p>Work</p>
          <SiteLink href={routes.caseStudies}>Case Studies</SiteLink>
          <SiteLink href={routes.debugLog}>Debug Log</SiteLink>
          <SiteLink href={routes.resume}>Resume</SiteLink>
        </div>
        <div>
          <p>Projects</p>
          <SiteLink href={routes.rebalance}>ReBalance</SiteLink>
          <SiteLink href={routes.flipThatDigit}>Flip That Digit</SiteLink>
          <SiteLink href={routes.operationSurf}>Operation Surf</SiteLink>
        </div>
      </nav>
      <nav aria-label="Footer links" className="site-footer__links">
        {footerLinks.map((link) => (
          <TrackedAnchor
            analytics={{ kind: "contact", channel: link.label, location: "footer" }}
            className="site-footer__link"
            href={link.href}
            key={link.href}
          >
            <img
              aria-hidden="true"
              className="site-footer__link-icon"
              src={link.icon}
              alt=""
            />
            {link.label}
          </TrackedAnchor>
        ))}
        <TrackedAnchor
          analytics={{ kind: "resume", location: "footer" }}
          className="site-footer__link site-footer__link--resume"
          href={routes.resumePdf}
        >
          <Download
            aria-hidden="true"
            className="site-footer__link-icon"
            size={16}
            strokeWidth={2.5}
          />
          Download resume
        </TrackedAnchor>
        <a
          className="site-footer__link"
          href={sourceCodeUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            aria-hidden="true"
            className="site-footer__link-icon"
            src="/assets/images/icons/github.svg"
            alt=""
          />
          View source code
        </a>
        <a className="site-footer__link site-footer__link--top" href="#top">
          <img
            aria-hidden="true"
            className="site-footer__link-icon"
            src="/assets/images/icons/arrow-up.svg"
            alt=""
          />
          Top
        </a>
      </nav>
    </footer>
  );
}
