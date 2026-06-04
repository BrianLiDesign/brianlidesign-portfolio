import Link from "next/link";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <section className="content-page content-page--compact">
      <p className="section-label">404</p>
      <h1>This signal does not resolve.</h1>
      <p>The page may have moved during the portfolio migration.</p>
      <Link className="button button--quiet" href={routes.home}>
        Back to home
      </Link>
    </section>
  );
}
