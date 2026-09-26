import { describe, expect, it } from "vitest";
import { leadershipExperience, workExperience } from "./about";
import { resumeHighlights } from "./resume-highlights";
import { professionalPositioning } from "./positioning";

describe("About career content", () => {
  it("presents the approved work history with exact roles, dates, and status", () => {
    expect(workExperience).toMatchObject([
      {
        id: "boeing-software-test-engineer",
        organization: "Boeing",
        role: "Software Test Engineer (Part-Time)",
        period: "Aug 2026 - Present",
        status: "current",
      },
      {
        id: "booz-allen-systems-engineer-intern",
        organization: "Booz Allen Hamilton",
        role: "Systems Engineer Intern",
        period: "Jun 2026 - Aug 2026",
        status: "completed",
      },
      {
        id: "operation-surf-software-engineer",
        organization: "Operation SURF",
        role: "Software Engineer (Pro Bono)",
        period: "Sep 2025 - May 2026",
        status: "completed",
      },
      {
        id: "cal-poly-its-assistant",
        organization: "Cal Poly Information Technology Services",
        role: "IT Assistant (Part-Time)",
        period: "Nov 2025 - May 2026",
        status: "completed",
      },
    ]);
  });

  it("separates the approved current leadership roles from work experience", () => {
    expect(leadershipExperience).toMatchObject([
      {
        id: "empower-project-lead",
        organization: "Cal Poly EMPOWER Student Association",
        role: "Project Lead, Marching Band Haptic Feedback System",
        period: "Aug 2026 - Present",
        status: "current",
      },
      {
        id: "hack4impact-tech-lead",
        organization: "Hack4Impact Cal Poly",
        role: "Tech Lead",
        period: "Aug 2026 - Present",
        status: "current",
      },
    ]);
  });

  it("uses stable unique IDs and an icon fallback for every career entry", () => {
    const entries = [...workExperience, ...leadershipExperience];
    const ids = entries.map((entry) => entry.id);

    expect(new Set(ids).size).toBe(entries.length);
    expect(entries.every((entry) => entry.fallbackIcon.length > 0)).toBe(true);
  });

  it("keeps resume highlights aligned with the About page", () => {
    expect(resumeHighlights).toEqual([
      "Software Test Engineer at Boeing",
      "Systems Engineer Intern at Booz Allen Hamilton",
      "EMPOWER Project Lead",
      "Hack4Impact Cal Poly Tech Lead",
      "Cal Poly Computer Engineering, expected May 2028",
      "Punahou School, graduated 2024",
    ]);
    expect(professionalPositioning.title).toBe("Software test and systems engineer");
  });
});
