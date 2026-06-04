import { writingEntries } from "@/content/writing";
import { Tag } from "@/components/ui/tag";

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
          </article>
        ))}
      </div>
    </section>
  );
}
