import Link from "next/link";
import { footerLinks } from "@/content/site";
import { routes } from "@/lib/routes";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="site-footer__meta">Brian Li · Hawaii-born computer engineering student</p>
        <h2>Code with precision. Circuits with purpose.</h2>
      </div>
      <nav aria-label="Footer links" className="site-footer__links">
        {footerLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
        <Link href={routes.home}>Top</Link>
      </nav>
    </footer>
  );
}
