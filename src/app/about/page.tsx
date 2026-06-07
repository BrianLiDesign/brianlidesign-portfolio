import { Metadata } from "next";
import Image from "next/image";
import {
  Code,
  Cpu,
  Heart,
  Monitor,
  Package,
  PenTool,
  Shield,
  Users,
  Video,
  Waves,
  Wrench,
} from "lucide-react";
import {
  aboutIntro,
  story,
  storyPhotos,
  timeline,
  experience,
  education,
  technicalSkills,
} from "@/content/about";
import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About — Brian Li",
  description: aboutIntro.heading,
};

const asideIcons: Record<string, React.ElementType> = {
  waves: Waves,
  users: Users,
  video: Video,
  "pen-tool": PenTool,
  wrench: Wrench,
};

const experienceIcons: Record<string, React.ElementType> = {
  shield: Shield,
  monitor: Monitor,
  heart: Heart,
};

const skillIcons: Record<string, React.ElementType> = {
  code: Code,
  package: Package,
  cpu: Cpu,
  "pen-tool": PenTool,
};

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Hero intro */}
      <section className="content-page about-hero">
        <div className="about-hero__grid">
          <div className="about-hero__copy">
            <p className="section-label">{aboutIntro.label}</p>
            <h1>{aboutIntro.heading}</h1>
            <p className="about-hero__lead">{aboutIntro.lead}</p>
            <blockquote className="about-hero__motto">
              <span aria-hidden="true" className="about-hero__motto-mark">≋</span>
              {aboutIntro.motto}
            </blockquote>
          </div>
          <div className="about-portrait">
            <div className="about-portrait__frame">
              <span className="about-portrait__label">portrait — pending</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — My story */}
      <section className="content-page about-story">
        <div className="content-page__grid">
          <div>
            {story.paragraphs.slice(0, 2).map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}

            <div className="photo-row">
              {storyPhotos.map((photo) => (
                <figure className="photo-slot" key={photo.caption}>
                  {photo.src ? (
                    <Image
                      alt={photo.alt}
                      className="photo-slot__image"
                      fill
                      sizes="(max-width: 980px) 100vw, 50vw"
                      src={photo.src}
                    />
                  ) : (
                    <span className="photo-slot__placeholder" aria-label={photo.alt}>
                      <span className="photo-slot__placeholder-icon">◻</span>
                    </span>
                  )}
                  <figcaption className="photo-slot__caption">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>

            {story.paragraphs.slice(2).map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <aside className="content-aside">
            <h2 className="about-aside__heading">{story.aside.heading}</h2>
            <ul className="about-aside__list">
              {story.aside.items.map((item) => {
                const Icon = asideIcons[item.icon];
                return (
                  <li key={item.text}>
                    {Icon ? <Icon aria-hidden="true" className="about-aside__icon" size={16} /> : null}
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>

      {/* Section 3 — Timeline */}
      <section className="content-page about-timeline-section">
        <p className="section-label">Milestones</p>
        <ol className="about-timeline">
          {timeline.map((entry, index) => (
            <li
              className={`about-timeline__item${index === timeline.length - 1 ? " about-timeline__item--current" : ""}`}
              key={entry.title}
            >
              <span className="about-timeline__year">{entry.year}</span>
              <div>
                <strong>{entry.title}</strong>
                <p>{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 4 — Work experience */}
      <section className="content-page">
        <p className="section-label">Experience</p>
        <div className="experience-grid">
          {experience.map((entry) => {
            const Icon = experienceIcons[entry.icon];
            return (
              <Card className="experience-card" key={entry.org}>
                <div className="experience-card__header">
                  {Icon ? <Icon aria-hidden="true" className="experience-card__icon" size={18} /> : null}
                  <p className="experience-card__role">{entry.role}</p>
                </div>
                <h3>{entry.org}</h3>
                <p className="experience-card__period">{entry.period}</p>
                <p>{entry.description}</p>
                <div className="tag-list">
                  {entry.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Section 5 — Education */}
      <section className="content-page about-education">
        <p className="section-label">Education</p>
        <h2>{education.school}</h2>
        <div className="field-notes">
          <p>
            <span>degree:</span> {education.degree}
          </p>
          <p>
            <span>expected:</span> {education.expected}
          </p>
        </div>
        <div className="about-coursework">
          <p className="about-coursework__label">Relevant coursework</p>
          <div className="tag-list">
            {education.coursework.map((course) => (
              <Tag key={course}>{course}</Tag>
            ))}
          </div>
        </div>
      </section>

      {education.highschool ? (
        <section className="content-page about-education about-education--continued">
          <h2>{education.highschool.school}</h2>
          <div className="field-notes">
            <p>
              <span>graduated:</span> {education.highschool.graduated}
            </p>
          </div>
        </section>
      ) : null}

      {/* Section 6 — Technical skills */}
      <section className="content-page about-skills">
        <p className="section-label">Technical skills</p>
        <div className="skill-grid">
          {technicalSkills.map((group) => {
            const Icon = skillIcons[group.icon];
            return (
              <div className="skill-group" key={group.label}>
                <p className="skill-group__label">
                  {Icon ? <Icon aria-hidden="true" className="skill-group__icon" size={16} /> : null}
                  {group.label}
                </p>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
