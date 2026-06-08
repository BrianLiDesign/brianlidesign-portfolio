import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { footerLinks } from "@/content/site";
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
      <nav aria-label="Footer links" className="site-footer__links">
        <TrackedAnchor
          analytics={{ kind: "resume", location: "footer" }}
          className="site-footer__link site-footer__link--resume"
          href={routes.resume}
        >
          Download resume
        </TrackedAnchor>
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
