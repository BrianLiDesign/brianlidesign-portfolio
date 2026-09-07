import Link from "next/link";
import { writingEntries } from "@/content/writing";
import { Tag } from "@/components/ui/tag";
import { createPageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = createPageMetadata({
  title: "Engineering Notes — Brian Li",
  description:
    "Short engineering notes by Brian Li on embedded systems, debugging, hardware-software interfaces, project decisions, and lessons from the systems lab.",
  path: routes.writing,
});

export default function WritingPage() {
  return (
    <section className="content-page">
      <p className="section-label">Writing</p>
      <h1>Short notes from the systems lab.</h1>
      <div className="writing-list">
        {writingEntries.map((entry) => (
          <article className="card writing-card" key={entry.title}>
            <p className="writing-card__date">{entry.date}</p>
            <h2>{entry.title}</h2>
            <p>{entry.summary}</p>
            <div className="tag-list">
              {entry.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <Link className="writing-card__link" href={entry.href}>
              {entry.linkLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
