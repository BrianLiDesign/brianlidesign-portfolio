import Image from "next/image";
import {
  Accessibility,
  BadgeCheck,
  Code,
  Cpu,
  GitBranch,
  HeartHandshake,
  Monitor,
  Package,
  PenTool,
  Shield,
  Users,
  Video,
  Waves,
  Wrench,
} from "lucide-react";
import type { CareerEntry, CareerIconName } from "@/content/about";
import {
  aboutIntro,
  story,
  storyPhotos,
  workExperience,
  leadershipExperience,
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
import { createPageMetadata } from "@/lib/metadata";
import { professionalPositioning } from "@/content/positioning";

export const metadata = createPageMetadata({
  title: "About — Brian Li",
  description: `Brian Li is a ${professionalPositioning.title} building reliable systems across ${professionalPositioning.focusAreas}.`,
  path: routes.about,
  image: "/assets/images/personal/brian-li-portrait-vertical.jpg",
  imageAlt: "Portrait of Brian Li",
});

const asideIcons: Record<string, React.ElementType> = {
  waves: Waves,
  users: Users,
  video: Video,
  "pen-tool": PenTool,
  wrench: Wrench,
};

const careerIcons: Record<CareerIconName, React.ElementType> = {
  accessibility: Accessibility,
  "badge-check": BadgeCheck,
  "git-branch": GitBranch,
  "heart-handshake": HeartHandshake,
  shield: Shield,
  monitor: Monitor,
};

const skillIcons: Record<string, React.ElementType> = {
  code: Code,
  package: Package,
  cpu: Cpu,
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

function SkillTag({ skill }: { skill: string }) {
  const svgPath = technicalSkillSvgIcons[skill];

  return (
    <Tag className={svgPath ? "tag--with-icon" : undefined}>
      {svgPath ? (
        <Image src={svgPath} alt="" width={13} height={13} className="tag__icon" aria-hidden="true" />
      ) : null}
      <span>{skill}</span>
    </Tag>
  );
}

function CareerCard({ entry }: { entry: CareerEntry }) {
  const FallbackIcon = careerIcons[entry.fallbackIcon];

  return (
    <Card className={`experience-card${entry.status === "current" ? " experience-card--current" : ""}`}>
      <div className="experience-card__header">
        <div className="experience-card__mark" aria-hidden="true">
          {entry.organizationMark ? (
            <Image
              alt=""
              className="experience-card__mark-image"
              height={44}
              src={entry.organizationMark.src}
              width={44}
            />
          ) : FallbackIcon ? (
            <FallbackIcon className="experience-card__icon" size={22} />
          ) : null}
        </div>
        <div className="experience-card__identity">
          <p className="experience-card__role">{entry.role}</p>
          <h3>{entry.organization}</h3>
        </div>
      </div>
      <div className="experience-card__meta">
        <p className="experience-card__period">{entry.period}</p>
        {entry.status === "current" ? <span className="experience-card__status">Current</span> : null}
      </div>
      <p className="experience-card__scope">{entry.scope}</p>
      {entry.bullets?.length ? (
        <ul className="experience-card__bullets">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      <div className="experience-card__footer">
        <div className="tag-list">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {entry.relatedHref ? (
          <ButtonLink className="experience-card__link" href={entry.relatedHref} variant="quiet">
            View related case study
          </ButtonLink>
        ) : null}
      </div>
    </Card>
  );
}

export default function AboutPage() {
  const storyPhotosWithSrc = storyPhotos.filter((photo) => photo.src);

  return (
    <div className="about-page">
      {/* Section 1 — Hero intro */}
      <section className="content-page about-hero">
        <div className="about-hero__grid">
          <div className="about-hero__copy">
            <p className="section-label">{aboutIntro.label}</p>
            <h1>{aboutIntro.heading}</h1>
            <p className="about-hero__lead">{aboutIntro.lead}</p>
            <blockquote className="about-hero__motto">
              <span aria-hidden="true" className="about-hero__motto-mark">
                ≋
              </span>
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

            {storyPhotosWithSrc.length > 0 ? (
              <div className="photo-row">
                {storyPhotosWithSrc.map((photo) => (
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
                      <span className="photo-slot__placeholder" aria-label={photo.alt} role="img">
                        <span className="photo-slot__placeholder-icon">◻</span>
                      </span>
                    )}
                    <figcaption className="photo-slot__caption">{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}

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

      {/* Section 3 - Work experience */}
      <section className="content-page about-career-section">
        <div className="section-heading">
          <div>
            <p className="section-label">Work experience</p>
            <h2>Testing, simulation, software, and support in real operating contexts.</h2>
          </div>
          <p className="section-heading__credibility">
            Scope first, with metrics included only when they make the work easier to understand.
          </p>
        </div>
        <div className="experience-grid experience-grid--work">
          {workExperience.map((entry) => (
            <CareerCard entry={entry} key={entry.id} />
          ))}
        </div>
      </section>

      {/* Section 4 - Leadership and community */}
      <section className="content-page about-leadership">
        <div className="section-heading">
          <div>
            <p className="section-label">Leadership &amp; community</p>
            <h2>Current roles guiding technical work and community outcomes.</h2>
          </div>
          <p className="section-heading__credibility">
            Project direction, developer support, and engineering work grounded in the people it serves.
          </p>
        </div>
        <div className="experience-grid experience-grid--leadership">
          {leadershipExperience.map((entry) => (
            <CareerCard entry={entry} key={entry.id} />
          ))}
        </div>
      </section>

      {/* Section 5 - Education */}
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
        <div className="about-coursework">
          <p className="about-coursework__label">Campus involvement</p>
          <div className="tag-list">
            {education.affiliations.map((affiliation) => (
              <Tag key={affiliation}>{affiliation}</Tag>
            ))}
          </div>
        </div>
        {education.highschool ? (
          <div className="about-highschool">
            <h2>{education.highschool.school}</h2>
            <div className="field-notes field-notes--compact">
              <p>
                <span>graduated:</span> {education.highschool.graduated}
              </p>
            </div>
          </div>
        ) : null}
      </section>

      {/* Section 6 - Technical strengths */}
      <section className="content-page about-skills" id="technical-skills">
        <p className="section-label">Technical strengths</p>
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
          If you are building reliable systems around {professionalPositioning.focusAreas}, I would be glad to talk.
        </h2>
        <div className="hero-section__actions" aria-label="About page actions" role="group">
          <TrackedAnchor
            analytics={{
              kind: "contact",
              channel: "Email",
              location: "about_cta",
            }}
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
    </div>
  );
}
