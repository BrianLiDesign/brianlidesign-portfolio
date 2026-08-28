import type { Metadata } from "next";
import Link from "next/link";
import { TrackedButtonLink } from "@/components/analytics/tracked-button-link";
import { Tag } from "@/components/ui/tag";
import { education, experience, technicalSkills } from "@/content/about";
import { projects } from "@/content/projects";
import { resumeIntroduction, resumeMetadataDescription } from "@/content/resume";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Resume - Brian Li",
  description: resumeMetadataDescription,
};

export default function ResumePage() {
  return (
    <section className="content-page resume-page">
      <div className="resume-page__header">
        <div>
          <p className="section-label">Resume</p>
          <h1>Brian Li</h1>
          <p>{resumeIntroduction}</p>
        </div>
        <TrackedButtonLink href={routes.resumePdf} location="resume_page" variant="primary">
          Download PDF
        </TrackedButtonLink>
      </div>

      <section className="resume-section">
        <h2>Education</h2>
        <article>
          <h3>{education.school}</h3>
          <p>{education.degree} - {education.expected}</p>
          <div className="tag-list">
            {education.coursework.slice(0, 8).map((course) => (
              <Tag key={course}>{course}</Tag>
            ))}
          </div>
        </article>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-list">
          {experience.map((entry) => (
            <article key={entry.org}>
              <p className="resume-section__meta">{entry.period}</p>
              <h3>{entry.role}</h3>
              <strong>{entry.org}</strong>
              <p>{entry.description}</p>
              <div className="tag-list">
                {entry.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="resume-list">
          {projects.slice(0, 4).map((project) => (
            <article key={project.slug}>
              <p className="resume-section__meta">{project.maturity}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p>This project appears under Projects on my resume.</p>
              <Link className="resume-section__link" href={project.href}>
                Read the full {project.title} case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skill-grid">
          {technicalSkills.map((group) => (
            <div className="skill-group" key={group.label}>
              <p className="skill-group__label">{group.label}</p>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
