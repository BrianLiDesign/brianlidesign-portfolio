import { howIWork } from "@/content/site";

export function HowIWork() {
  return (
    <section className="how-i-work" aria-label="How I work when reality gets messy">
      <p className="how-i-work__label">How I work when reality gets messy</p>
      <div className="how-i-work__grid">
        {howIWork.map((item, index) => (
          <p key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
