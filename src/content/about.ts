export const aboutIntro = {
  label: "About",
  heading: "Hawaii-born computer engineering student building useful systems.",
  lead: "I grew up in Hawaii, where technology either works for the community or it does not get used. Digital Ready Hawaii and teaching seniors shaped the way I think about useful systems: tools have to be understandable, local, and worth trusting.",
  motto: "Useful systems should be understandable, local, and human.",
};

export type StoryPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export const storyPhotos: StoryPhoto[] = [
  {
    src: "",
    alt: "Hawaii landscape or community context",
    caption: "Hawaii - field context",
  },
  {
    src: "",
    alt: "Cal Poly lab or engineering workspace",
    caption: "Lab - Cal Poly SLO",
  },
];

export type AsideItem = {
  text: string;
  icon: string;
};

export const story = {
  paragraphs: [
    "Growing up on the islands, I saw technology through a practical lens. The tools that mattered were the ones that helped real people: seniors learning phone basics through Digital Ready Hawaii, volunteers coordinating support, and local programs that needed technology to be clear instead of impressive.",
    "That experience still shows up in how I build. I care about the translation layer: the moment a raw sensor reading becomes a correction cue, a backend response becomes a usable workflow, or a confusing device becomes something a senior can use with confidence.",
    "At Cal Poly, the coursework meets reality. Digital design and computer architecture gave me the foundations; embedded systems and prototyping labs gave me constraints to build within. My projects move through planning, testing, and repeated refinement until the system communicates clearly.",
    "I value debug-first thinking. Polish comes after the system works. If the measurement model is wrong, no amount of UI refinement will fix the feedback. I would rather show a raw jitter strip alongside a calibrated cue than hide the noise and pretend the signal was clean.",
  ],
  aside: {
    heading: "Outside the lab",
    items: [
      { text: "Digital Ready Hawaii - teaching seniors practical technology skills", icon: "users" },
      { text: "Surfing and ocean time - Hawaii never fully leaves", icon: "waves" },
      { text: "Video production and visual storytelling", icon: "video" },
      { text: "Exploring how design and engineering overlap", icon: "pen-tool" },
      { text: "Building things with my hands - woodworking, prototyping, soldering", icon: "wrench" },
    ] as AsideItem[],
  },
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "Early",
    title: "First circuits and code",
    description:
      "Started tinkering with electronics and writing scripts - learned that building things is how I understand them.",
  },
  {
    year: "Hawaii",
    title: "Digital Ready Hawaii",
    description:
      "Taught seniors practical technology skills and saw firsthand why useful systems must be understandable, patient, and local.",
  },
  {
    year: "2024",
    title: "Cal Poly SLO",
    description:
      "Started B.S. Computer Engineering. Digital design, computer architecture, and embedded systems became the foundation.",
  },
  {
    year: "2024",
    title: "Hack4Impact Cal Poly",
    description:
      "Joined as a software developer. Built backend workflows for Operation Surf - 600 volunteers, access-aware CRUD, real coordination.",
  },
  {
    year: "2025",
    title: "Cal Poly ITS",
    description:
      "Information Technology Assistant - hands-on support, troubleshooting, and 200+ Jira tickets across campus systems.",
  },
  {
    year: "2025",
    title: "Booz Allen Hamilton",
    description:
      "Systems Engineer Intern - applying hardware-software thinking at enterprise scale.",
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  icon: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Systems Engineer Intern",
    org: "Booz Allen Hamilton",
    period: "Summer 2025",
    description:
      "Systems engineering at enterprise scale - bridging hardware constraints and software architecture in defense and government technology programs.",
    tags: ["Systems Engineering", "Enterprise", "Hardware-Software"],
    icon: "shield",
  },
  {
    role: "Information Technology Assistant",
    org: "Cal Poly ITS",
    period: "2025 - Present",
    description:
      "Hands-on technical support across campus infrastructure. Closed 200+ Jira tickets while troubleshooting systems directly with users who need technology to just work.",
    tags: ["200+ Jira Tickets", "IT Support", "Infrastructure", "Troubleshooting"],
    icon: "monitor",
  },
  {
    role: "Software Developer",
    org: "Hack4Impact Cal Poly",
    period: "2024 - Present",
    description:
      "Built backend systems for Operation Surf - a nonprofit coordinating 600 volunteers. Designed access-aware CRUD operations, API workflows, and permission structures using MongoDB and Next.js.",
    tags: ["600 Volunteers", "MongoDB", "Next.js", "API Design", "Nonprofit"],
    icon: "heart",
  },
];

export const education = {
  school: "California Polytechnic State University, San Luis Obispo",
  degree: "B.S. Computer Engineering",
  expected: "Expected 2028",
  coursework: [
    "Digital Design",
    "Computer Architecture",
    "Data Structures",
    "Embedded Systems",
    "Circuit Analysis",
    "Discrete Mathematics",
    "Systems Programming",
    "Signal Processing",
  ],
  highschool: {
    school: "Punahou School",
    graduated: "2024",
  },
};

export const workingPrinciples = [
  {
    title: "Understandable",
    body: "I expose the system state instead of hiding it.",
  },
  {
    title: "Local",
    body: "I design for the context where the tool is actually used.",
  },
  {
    title: "Human",
    body: "I prefer calmer feedback over impressive noise.",
  },
] as const;

export const currentlyLearning = [
  "embedded systems",
  "robotics control",
  "hardware/software tooling",
  "better debugging workflows",
] as const;

export type SkillGroup = {
  label: string;
  skills: string[];
  icon: string;
};

export const technicalSkills: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      "C",
      "Python",
      "SystemVerilog",
      "Assembly",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
    ],
    icon: "code",
  },
  {
    label: "Frameworks & Tools",
    skills: ["Next.js", "React", "Node.js", "MongoDB/Mongoose", "Git", "VS Code"],
    icon: "package",
  },
  {
    label: "Hardware & Embedded",
    skills: [
      "Basys3 / FPGA",
      "Arduino",
      "FSR Sensors",
      "Web Serial",
      "Oscilloscope",
      "Soldering",
    ],
    icon: "cpu",
  },
  {
    label: "Design & Other",
    skills: [
      "Figma",
      "SolidWorks",
      "Rhinoceros 3D",
      "Adobe Illustrator",
      "Video Production",
    ],
    icon: "pen-tool",
  },
];
