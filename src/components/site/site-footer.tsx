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
        <a href={routes.resume} className="site-footer__link site-footer__link--resume">
          Download resume
        </a>
        {footerLinks.map((link) => (
          <a href={link.href} key={link.href} className="site-footer__link">
            <img
              aria-hidden="true"
              className="site-footer__link-icon"
              src={link.icon}
              alt=""
            />
            {link.label}
          </a>
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
