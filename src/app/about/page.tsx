import { Metadata } from "next";
import Image from "next/image";
import {
  Cable,
  Code,
  Cpu,
  Fingerprint,
  Heart,
  Monitor,
  Package,
  PenTool,
  Shield,
  Users,
  Video,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";
import {
  aboutIntro,
  story,
  storyPhotos,
  timeline,
  experience,
  education,
  workingPrinciples,
  currentlyLearning,
  technicalSkills,
} from "@/content/about";
import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { TrackedButtonLink } from "@/components/analytics/tracked-button-link";
import { routes } from "@/lib/routes";

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

const technicalSkillSvgIcons: Record<string, string> = {
  C: "/assets/images/icons/c.svg",
  Python: "/assets/images/icons/python.svg",
  SystemVerilog: "/assets/images/icons/systemverilog.svg",
  Assembly: "/assets/images/icons/assembly.svg",
  TypeScript: "/assets/images/icons/typescript.svg",
  JavaScript: "/assets/images/icons/javascript.svg",
  "HTML/CSS": "/assets/images/icons/html.svg",
  "Next.js": "/assets/images/icons/nextjs.svg",
  React: "/assets/images/icons/react.svg",
  "Node.js": "/assets/images/icons/nodejs.svg",
  "MongoDB/Mongoose": "/assets/images/icons/mongodb.svg",
  Git: "/assets/images/icons/git.svg",
  "VS Code": "/assets/images/icons/microsoft-visual-studio-code.svg",
  "Basys3 / FPGA": "/assets/images/icons/xilinx.svg",
  Arduino: "/assets/images/icons/arduino.svg",
  Figma: "/assets/images/icons/figma.svg",
  SolidWorks: "/assets/images/icons/solidworks.svg",
  "Rhinoceros 3D": "/assets/images/icons/rhinoceros-3d.svg",
  "Adobe Illustrator": "/assets/images/icons/adobe-illustrator.svg",
};

const technicalSkillLucideIcons: Record<string, React.ElementType> = {
  "FSR Sensors": Fingerprint,
  "Web Serial": Cable,
  Oscilloscope: Zap,
  Soldering: Wrench,
  "Video Production": Video,
};

function SkillTag({ skill }: { skill: string }) {
  const svgPath = technicalSkillSvgIcons[skill];
  const LucideIcon = technicalSkillLucideIcons[skill];
  const hasIcon = svgPath || LucideIcon;

  return (
    <Tag className={hasIcon ? "tag--with-icon" : undefined}>
      {svgPath ? (
        <Image
          src={svgPath}
          alt=""
          width={13}
          height={13}
          className="tag__icon"
          aria-hidden="true"
        />
      ) : LucideIcon ? (
        <LucideIcon aria-hidden="true" className="tag__icon" size={13} />
      ) : null}
      <span>{skill}</span>
    </Tag>
  );
}

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
              <Image
                alt="Brian Li portrait"
                fill
                priority
                sizes="(max-width: 980px) 240px, 320px"
                src="/assets/images/personal/brian-li-portrait-square.jpg"
              />
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
      <section className="content-page about-skills" id="technical-skills">
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
                    <SkillTag key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="content-page about-principles">
        <div className="section-heading">
          <div>
            <p className="section-label">Working principles</p>
            <h2>Understandable, local, human - in practice.</h2>
          </div>
          <p className="section-heading__credibility">
            These are the behaviors behind the motto, not just portfolio copy.
          </p>
        </div>
        <div className="principle-grid">
          {workingPrinciples.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-page about-currently-learning">
        <p className="section-label">Currently learning</p>
        <div className="tag-list">
          {currentlyLearning.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </section>

      <section className="content-page about-cta">
        <h2>
          If you are building tools around embedded systems, robotics,
          hardware/software interfaces, or community technology, I would be
          glad to talk.
        </h2>
        <div className="hero-section__actions" aria-label="About page actions">
          <TrackedAnchor
            analytics={{ kind: "contact", channel: "Email", location: "about_cta" }}
            className="button button--primary"
            href="mailto:brian.li.social@gmail.com"
          >
            Email Brian
          </TrackedAnchor>
          <TrackedButtonLink href={routes.resumePdf} location="about_cta" variant="quiet">
            Download resume
          </TrackedButtonLink>
          <ButtonLink href={routes.caseStudies} variant="quiet">
            View case studies
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
