import { projects } from "@/content/projects";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

export function CaseStudyGrid() {
  return (
    <section className="case-studies-section" id="case-studies">
      <div className="section-heading">
        <div>
          <p className="section-label">Case studies</p>
          <h2>Artifacts over abstractions.</h2>
        </div>
        <p>Preview cards show what was built, what kind of evidence exists, and why the work matters.</p>
      </div>
      <div className="case-study-grid">
        {projects.map((project) => (
          <Card className="case-study-card" key={project.slug}>
            <p className="case-study-card__label">{project.label}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="case-study-card__role">Role: {project.role}</p>
            <p className="case-study-card__evidence">{project.evidence}</p>
            <p className="case-study-card__note">note: {project.note}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
