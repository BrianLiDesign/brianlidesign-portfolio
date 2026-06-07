import { routes } from "@/lib/routes";

export type CaseStudyDetail = {
  label: string;
  value: string;
};

export type CaseStudyFlow = {
  title: string;
  steps: CaseStudyFlowStep[];
};

export type CaseStudyFlowStep = {
  label: string;
  icon: "activity" | "bot" | "cpu" | "database" | "gauge" | "git-branch" | "lock" | "scan-line" | "switch" | "terminal";
};

export type CaseStudyDeepDive = {
  title: string;
  kicker: string;
  body: string;
  proof: string[];
  links?: CaseStudyContextLink[];
};

export type CaseStudyCodeHighlight = {
  title: string;
  source: string;
  language: string;
  code: string;
  explanation: string;
  links?: CaseStudyContextLink[];
};

export type CaseStudyContextLink = {
  label: string;
  href: string;
  kind: "Source section" | "Demo/video" | "Artifact" | "Screenshot";
};

export type CaseStudyMedia = {
  type: "image" | "video" | "placeholder";
  src?: string;
  alt: string;
  caption: string;
  note?: string;
};

export type CaseStudyVisualHighlight = {
  type: "rebalance" | "flip-that-digit" | "operation-surf" | "vybetutor";
  title: string;
  caption: string;
};

export type CaseStudyOwnership = {
  summary: string;
  items: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  href: string;
  label: string;
  metadataTitle: string;
  metadataDescription: string;
  sourceRepo?: string;
  localSourcePath?: string;
  thesis: string;
  summary: string[];
  proofPoints: string[];
  ownership: CaseStudyOwnership;
  heroMedia: CaseStudyMedia;
  details: CaseStudyDetail[];
  tags: string[];
  flow: CaseStudyFlow;
  mediaGallery: CaseStudyMedia[];
  visualHighlight: CaseStudyVisualHighlight;
  deepDives: CaseStudyDeepDive[];
  codeHighlights: CaseStudyCodeHighlight[];
  outcome: string[];
  reflection: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  rebalance: {
    slug: "rebalance",
    title: "ReBalance",
    href: routes.rebalance,
    label: "Hardware-software calibration",
    metadataTitle: "ReBalance - Case Study",
    metadataDescription:
      "A hardware-software balance feedback system that turns noisy FSR pressure data into stable rehabilitation cues.",
    sourceRepo: "https://github.com/joshnaim1/rebalance",
    localSourcePath: "C:\\Users\\brian\\Documents\\GitHub\\balanceback",
    thesis:
      "The hard part was not drawing a balance meter. It was separating noisy measurement from feedback a person could trust.",
    summary: [
      "ReBalance is a rehabilitation feedback prototype built around force-sensing resistors, Web Serial data, calibration, and a live dashboard. The system reads left/right pressure from a physical board and turns that stream into a stable balance score.",
      "The product constraint was human: if the cue flickers every time the user makes a tiny correction, the interface trains them to chase noise. The software had to preserve the raw signal for debugging while presenting a calmer correction cue.",
    ],
    proofPoints: ["2nd place CPES Hackathon", "$74 Arduino rehab prototype", "~20 Hz Web Serial pipeline"],
    ownership: {
      summary:
        "Co-owned the prototype with Joshua Naim; owned the portfolio case-study framing around low-cost rehab feedback, calibration, and readable signal transformation.",
      items: [
        "Co-owned the Arduino/Web Serial feedback path and demo-ready rehabilitation prototype.",
        "Owned the calibration and score explanation used in the case study.",
        "Owned the debug narrative: raw signal visible, user cue intentionally calmer.",
      ],
    },
    heroMedia: {
      type: "image",
      src: "/assets/images/case-studies/rebalance/landing-page.png",
      alt: "ReBalance landing page and dashboard screenshot",
      caption: "Product dashboard: a low-cost rehab prototype turning balance data into readable feedback.",
    },
    details: [
      { label: "Role", value: "Hardware/software developer" },
      { label: "Stack", value: "React, Vite, Web Serial API, FSR sensors, Arduino-style serial output" },
      { label: "Status", value: "Working prototype with calibration and demo mode" },
      { label: "Evidence", value: "Calibration capture, baseline correction, serial parsing, balance zone model" },
    ],
    tags: ["FSR sensors", "Web Serial", "Calibration", "Signal filtering"],
    flow: {
      title: "Pressure-to-feedback flow",
      steps: [
        { label: "FSR board", icon: "activity" },
        { label: "serial frames", icon: "terminal" },
        { label: "baseline correction", icon: "gauge" },
        { label: "zone scoring", icon: "scan-line" },
        { label: "stable cue", icon: "activity" },
      ],
    },
    mediaGallery: [
      {
        type: "image",
        src: "/assets/images/case-studies/rebalance/session-recording.png",
        alt: "ReBalance session recording screen",
        caption: "Session recording captures live balance feedback during a rehab exercise.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/rebalance/progress-statistics.png",
        alt: "ReBalance progress statistics dashboard",
        caption: "Progress statistics turn repeated sessions into trend feedback.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/rebalance/session-log.png",
        alt: "ReBalance session log screen",
        caption: "Session logs preserve longitudinal rehab activity instead of only showing live state.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/rebalance/ai-agent-chat.png",
        alt: "ReBalance AI assistant chat screen",
        caption: "AI chat explores how patients might ask questions about balance progress.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/rebalance/board-components-overview.jpg",
        alt: "ReBalance FSR board prototype with wired pressure sensors and microcontroller",
        caption: "Physical prototype: FSR pads, wiring, and microcontroller behind the balance dashboard.",
      },
    ],
    visualHighlight: {
      type: "rebalance",
      title: "Raw jitter becomes a stable cue",
      caption:
        "The visual keeps noisy samples visible while the calibrated output settles into a readable correction.",
    },
    deepDives: [
      {
        title: "Calibration before presentation",
        kicker: "A neutral stance is not automatically neutral sensor data.",
        body:
          "The calibration pass captures 100 samples over five seconds while the user stands centered. That produces a per-side baseline, so later readings can be scaled back toward the board's true center instead of assuming both sensors are identical.",
        proof: [
          "The calibration component samples live values on a timed loop and stores averaged left/right baselines.",
          "The balance calculation applies per-side scale factors before deriving the right-side ratio.",
          "The UI can show raw pressure while the score derives from corrected values.",
        ],
        links: [
          {
            label: "Balance calculation source",
            href: "https://github.com/joshnaim1/rebalance/blob/main/src/utils/balanceCalc.js",
            kind: "Source section",
          },
          {
            label: "Calibration component",
            href: "https://github.com/joshnaim1/rebalance/blob/main/src/components/Calibration.jsx",
            kind: "Source section",
          },
        ],
      },
      {
        title: "Noise is allowed internally",
        kicker: "The raw stream remains visible, but it does not directly drive the cue.",
        body:
          "The scoring function starts with an active-pressure threshold, then classifies deviation from center into balanced, warning, or danger zones. That keeps the public cue stable while preserving enough diagnostic data to understand jitter.",
        proof: [
          "Low total pressure returns an idle state instead of a misleading 50/50 score.",
          "Zone color, label, and badge all derive from one balance-zone helper.",
          "Demo mode injects waves, noise, and bursts to test behavior without hardware attached.",
        ],
        links: [
          {
            label: "Live dashboard repo",
            href: "https://github.com/joshnaim1/rebalance",
            kind: "Demo/video",
          },
        ],
      },
      {
        title: "Serial data as a contract",
        kicker: "The board sends simple newline-delimited frames; the UI owns parsing and resilience.",
        body:
          "The serial hook buffers incoming text, splits complete lines, recognizes a readiness marker, and only updates pressure state when it sees two valid numeric values. That makes the connection layer explicit and debuggable.",
        proof: [
          "The hook cancels readers and closes ports during disconnect.",
          "Partial serial lines stay buffered until a newline arrives.",
          "Invalid frames are ignored instead of poisoning the balance state.",
        ],
        links: [
          {
            label: "Web Serial hook",
            href: "https://github.com/joshnaim1/rebalance/blob/main/src/hooks/useSerial.js",
            kind: "Source section",
          },
        ],
      },
    ],
    codeHighlights: [
      {
        title: "Baseline-corrected score",
        source: "balanceback/src/utils/balanceCalc.js",
        language: "js",
        code: `if (total < ACTIVE_THRESHOLD) return { ratio: 0.5, score: 0, zone: "idle" };

const baselineAvg = (baseline.left + baseline.right) / 2;
const correctedLeft = left * (baselineAvg / baseline.left);
const correctedRight = right * (baselineAvg / baseline.right);
const ratio = correctedRight / (correctedLeft + correctedRight);`,
        explanation:
          "This is the core thinking: detect when the board is not active, normalize asymmetric sensors, then score the corrected ratio rather than raw pressure.",
        links: [
          {
            label: "Open source file",
            href: "https://github.com/joshnaim1/rebalance/blob/main/src/utils/balanceCalc.js",
            kind: "Source section",
          },
        ],
      },
      {
        title: "Timed calibration capture",
        source: "balanceback/src/components/Calibration.jsx",
        language: "jsx",
        code: `const SAMPLE_COUNT = 100;
const TOTAL_DURATION_S = 5;

samples.push({ left: values.left, right: values.right });
const avgLeft = average(samples.map((sample) => sample.left));
const avgRight = average(samples.map((sample) => sample.right));`,
        explanation:
          "The calibration flow turns a shaky live stream into a stable baseline by sampling over time instead of trusting a single reading.",
        links: [
          {
            label: "Open source file",
            href: "https://github.com/joshnaim1/rebalance/blob/main/src/components/Calibration.jsx",
            kind: "Source section",
          },
          {
            label: "Photo placeholders",
            href: "#project-artifacts",
            kind: "Artifact",
          },
        ],
      },
    ],
    outcome: [
      "Converted a raw sensor stream into a stable score, directional cue, and diagnostic visualization.",
      "Made the prototype testable without hardware through a realistic demo stream.",
      "Learned to debug the measurement model before polishing the interface.",
    ],
    reflection:
      "ReBalance shows my hardware/software bias: I do not treat the UI as separate from the physical system. The useful work was designing the translation layer between imperfect sensors and human-readable feedback.",
  },
  "flip-that-digit": {
    slug: "flip-that-digit",
    title: "Flip That Digit",
    href: routes.flipThatDigit,
    label: "FPGA game logic",
    metadataTitle: "Flip That Digit - Case Study",
    metadataDescription:
      "A Basys3 FPGA game built with SystemVerilog hardware modules and Assembly game logic on an OTTER MCU.",
    sourceRepo: "https://github.com/BrianLiDesign/flip-that-digit",
    localSourcePath: "C:\\Users\\brian\\Documents\\GitHub\\flip-that-digit",
    thesis:
      "The game only works if the software models the physical board: switch mapping, contact bounce, release timing, and display limits.",
    summary: [
      "Flip That Digit is a constrained FPGA game on the Basys3 board. A target digit appears on the seven-segment display, the player flips the matching switch, and the Assembly game loop updates score and target through memory-mapped I/O.",
      "The technical challenge was reliability under hardware constraints. The board has real switches and buttons, a four-digit display, and an OTTER MCU wrapper, so the game had to be explicit about input validity and timing.",
    ],
    proofPoints: ["SystemVerilog + Assembly", "Basys3 deployment", "release-edge input handling"],
    ownership: {
      summary:
        "Co-engineered with Joshua Naim. Repo headers identify several shared modules, with branch-address generation credited to Brian.",
      items: [
        "Co-owned the Assembly game loop, switch validation, display packing, and deployment flow.",
        "Co-owned the debouncer, control path, register file, and OTTER integration modules.",
        "Brian-authored branch address generation per source header evidence.",
      ],
    },
    heroMedia: {
      type: "image",
      src: "/assets/images/case-studies/flip-that-digit/basys3-board.jpg",
      alt: "Basys3 FPGA board used for Flip That Digit",
      caption: "Deployment target: Basys3 board with switches, LEDs, and seven-segment output.",
    },
    details: [
      { label: "Role", value: "Embedded game logic and hardware deployment" },
      { label: "Stack", value: "SystemVerilog, RISC-V Assembly, Vivado, RARS, Basys3" },
      { label: "Status", value: "Deployable FPGA coursework project" },
      { label: "Evidence", value: "Debouncer FSM, switch decoder, MMIO loop, seven-segment packing" },
    ],
    tags: ["SystemVerilog", "Assembly", "Basys3", "Debounce"],
    flow: {
      title: "Game loop",
      steps: [
        { label: "target digit", icon: "scan-line" },
        { label: "switch snapshot", icon: "switch" },
        { label: "decode one bit", icon: "cpu" },
        { label: "wait release", icon: "activity" },
        { label: "score update", icon: "terminal" },
      ],
    },
    mediaGallery: [
      {
        type: "image",
        src: "/assets/images/case-studies/flip-that-digit/basys3-board-mapping.png",
        alt: "Basys3 board mapping for Flip That Digit switches",
        caption: "Switch-to-digit mapping used by the game contract.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/flip-that-digit/high-level-program-flowchart.png",
        alt: "High-level program flowchart for Flip That Digit",
        caption: "High-level game flow: read input, validate, update display.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/flip-that-digit/score-update-subroutine.png",
        alt: "Score update subroutine diagram",
        caption: "Score-update logic captured as a deployment artifact.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/flip-that-digit/flip-that-digit.svg",
        alt: "Flip That Digit project icon",
        caption: "Project mark used alongside the FPGA implementation.",
      },
    ],
    visualHighlight: {
      type: "flip-that-digit",
      title: "A physical switch becomes one game event",
      caption:
        "The animated artifact cycles the seven-segment display and exposes the WAIT -> PRESS -> RELEASE -> UPDATE state path.",
    },
    deepDives: [
      {
        title: "Release timing as game correctness",
        kicker: "A press is not one clean event on real hardware.",
        body:
          "The SystemVerilog debouncer synchronizes the input, waits for stable high and low periods, and emits a one-shot pulse after release. That prevents contact bounce and held buttons from registering as multiple actions.",
        proof: [
          "The state machine separates low, low-to-high, high, high-to-low, and one-shot states.",
          "Rise and fall debounce windows are expressed in clock cycles.",
          "The pulse is generated after the input has returned low stably.",
        ],
        links: [
          {
            label: "Debouncer source",
            href: "https://github.com/BrianLiDesign/flip-that-digit/blob/main/sources/design%20sources/debouncer_one_shot.sv",
            kind: "Source section",
          },
        ],
      },
      {
        title: "Assembly owns the game contract",
        kicker: "The software rejects ambiguous input before changing state.",
        body:
          "The Assembly loop reads switches from MMIO, masks to the low 16 bits, rejects zero or multiple bits, maps Basys3 switch positions to digits 0-9, and waits for release before continuing.",
        proof: [
          "Exactly-one-bit validation uses the classic x & (x - 1) check.",
          "Only SW15 through SW6 are accepted as game digits.",
          "Wrong or invalid input never increments score.",
        ],
        links: [
          {
            label: "Assembly game loop",
            href: "https://github.com/BrianLiDesign/flip-that-digit/blob/main/main.asm",
            kind: "Source section",
          },
          {
            label: "Board mapping",
            href: "/assets/images/case-studies/flip-that-digit/basys3-board-mapping.png",
            kind: "Artifact",
          },
        ],
      },
      {
        title: "Display constraints force clear state",
        kicker: "Four seven-segment digits leave no room for vague UI state.",
        body:
          "The target and score are packed into one display word, with the target in the leftmost digit and the score in the rightmost digit. The game communicates progress through tight numeric state rather than graphics.",
        proof: [
          "The loop packs target << 12 with score & 0xF.",
          "A win condition displays A00A and turns on all LEDs.",
          "The target advances deterministically with modulo arithmetic for predictable testing.",
        ],
        links: [
          {
            label: "Program flowchart",
            href: "/assets/images/case-studies/flip-that-digit/high-level-program-flowchart.png",
            kind: "Artifact",
          },
          {
            label: "Score subroutine diagram",
            href: "/assets/images/case-studies/flip-that-digit/score-update-subroutine.png",
            kind: "Artifact",
          },
        ],
      },
    ],
    codeHighlights: [
      {
        title: "Exactly-one-switch validation",
        source: "flip-that-digit/main.asm",
        language: "asm",
        code: `addi t1, t0, -1
and  t2, t0, t1
bne  t2, zero, DS_FAIL

addi t5, zero, 6
blt  t3, t5, DS_FAIL`,
        explanation:
          "The decoder only accepts one active switch and rejects out-of-range switches before the game compares against the target.",
        links: [
          {
            label: "Open main.asm",
            href: "https://github.com/BrianLiDesign/flip-that-digit/blob/main/main.asm",
            kind: "Source section",
          },
        ],
      },
      {
        title: "Debounced release-edge pulse",
        source: "flip-that-digit/sources/design sources/debouncer_one_shot.sv",
        language: "systemverilog",
        code: `ST_HIGH_TO_LOW: begin
  if (!btn_sync && cnt == FALL_CLKS - 1) begin
    ns = ST_ONE_SHOT;
    cnt_rst = 1'b1;
  end
end`,
        explanation:
          "The state machine waits for a stable release before emitting the one-shot event, which prevents accidental double triggers.",
        links: [
          {
            label: "Open debouncer",
            href: "https://github.com/BrianLiDesign/flip-that-digit/blob/main/sources/design%20sources/debouncer_one_shot.sv",
            kind: "Source section",
          },
        ],
      },
    ],
    outcome: [
      "Built a complete hardware/software game loop for Basys3 deployment.",
      "Handled real input behavior through debounce, release waiting, and strict switch validation.",
      "Learned that embedded interaction bugs often come from physical timing, not high-level game logic.",
    ],
    reflection:
      "This project shows that I can reason across hardware and software boundaries. The important design move was treating the board as an imperfect physical interface and making the state machine absorb that reality.",
  },
  "operation-surf": {
    slug: "operation-surf",
    title: "Operation Surf",
    href: routes.operationSurf,
    label: "Nonprofit operations backend",
    metadataTitle: "Operation Surf - Case Study",
    metadataDescription:
      "Backend and data workflow work for a nonprofit volunteer coordination platform with access-aware API behavior.",
    sourceRepo: "https://github.com/hack4impact-calpoly/Operation-Surf",
    localSourcePath: "C:\\Users\\brian\\Documents\\GitHub\\Operation-Surf",
    thesis:
      "The backend had to reflect real event coordination: what is public, what is private, what admins can see, and how volunteers actually register.",
    summary: [
      "Operation Surf is a nonprofit operations platform for coordinating programs, shifts, volunteer profiles, and signups. The case study is not just about CRUD; it is about shaping data flows so staff and volunteers see the right information at the right time.",
      "The strongest backend work lives in the API boundaries: filtering private program data, enriching signup responses with shift/program details, trimming admin-only fields, and validating inputs that have real operational meaning.",
    ],
    proofPoints: ["600 volunteers", "55% data-fetching complexity reduction", "access-aware CRUD"],
    ownership: {
      summary:
        "Contributed backend/API workflow work for Hack4Impact Cal Poly's Operation Surf project, with emphasis on access-aware data flows and coordination-shaped payloads.",
      items: [
        "Contributed access-aware CRUD and permission-aware API behavior.",
        "Contributed data-fetching simplification that reduced frontend coordination complexity by 55%.",
        "Contributed volunteer/program/signup workflow modeling without exposing private volunteer data.",
      ],
    },
    heroMedia: {
      type: "image",
      src: "/assets/images/case-studies/operation-surf/hero-img.png",
      alt: "Operation Surf hero image",
      caption: "Nonprofit operations context: coordination software supporting real-world events.",
    },
    details: [
      { label: "Role", value: "Backend/API workflow contributor" },
      { label: "Stack", value: "Next.js API routes, MongoDB, Mongoose, Better Auth-style auth integration" },
      { label: "Scale", value: "Volunteer and event coordination workflows for a nonprofit team" },
      { label: "Evidence", value: "Auth context, access-aware payloads, enriched read models, schema-backed routes" },
    ],
    tags: ["Next.js API", "MongoDB", "Access control", "Read models"],
    flow: {
      title: "Coordination data flow",
      steps: [
        { label: "auth context", icon: "lock" },
        { label: "route filter", icon: "git-branch" },
        { label: "Mongoose query", icon: "database" },
        { label: "enriched payload", icon: "scan-line" },
        { label: "role-aware response", icon: "lock" },
      ],
    },
    mediaGallery: [
      {
        type: "image",
        src: "/assets/images/case-studies/operation-surf/figma-water-session.jpg",
        alt: "Operation Surf participant and instructor on surfboards during a water session",
        caption: "Figma reference image showing the in-water program workflow the operations platform supports.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/operation-surf/figma-ocean-session.png",
        alt: "Operation Surf participant sitting on a surfboard in the ocean",
        caption: "Figma reference image connecting volunteer coordination to the participant experience.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/operation-surf/operation-surf.png",
        alt: "Operation Surf brand mark",
        caption: "Public project identity asset, safe to show without volunteer data.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/operation-surf/op-surf-logo.png",
        alt: "Operation Surf logo",
        caption: "Logo asset used to keep the case study tied to the nonprofit context.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/operation-surf/waves.png",
        alt: "Operation Surf wave artwork",
        caption: "Non-sensitive visual context for the organization.",
      },
    ],
    visualHighlight: {
      type: "operation-surf",
      title: "API routes enforce coordination boundaries",
      caption:
        "The workflow diagram shows access decisions happening at the route/data layer before payloads reach the UI.",
    },
    deepDives: [
      {
        title: "Access belongs in the API",
        kicker: "The UI should not be the only permission boundary.",
        body:
          "The API builds an auth context from the session and environment-defined admin identifiers. Program and day queries then filter private data for unauthenticated users, so access rules are enforced before data leaves the server.",
        proof: [
          "Unauthenticated program requests filter to private: false.",
          "Admin checks support both user IDs and email allowlists.",
          "Volunteer payloads are shaped differently for admin and non-admin users.",
        ],
        links: [
          {
            label: "Auth context source",
            href: "https://github.com/hack4impact-calpoly/Operation-Surf/blob/main/src/lib/authz.ts",
            kind: "Source section",
          },
          {
            label: "Volunteer API route",
            href: "https://github.com/hack4impact-calpoly/Operation-Surf/blob/main/src/app/api/volunteer/route.ts",
            kind: "Source section",
          },
        ],
      },
      {
        title: "Read models match user workflows",
        kicker: "A signup ID alone is not what a volunteer needs to see.",
        body:
          "The registered-shifts view joins signups to day and program records, returning a payload that is directly useful to the frontend. That avoids making the UI reconstruct coordination context from multiple unrelated responses.",
        proof: [
          "Signup routes collect shift IDs, then fetch matching day documents.",
          "Program records are indexed by programId before response construction.",
          "The response includes shift timing and program title/location context together, reducing data-fetching complexity by 55%.",
        ],
        links: [
          {
            label: "Signup API route",
            href: "https://github.com/hack4impact-calpoly/Operation-Surf/blob/main/src/app/api/signup/route.ts",
            kind: "Source section",
          },
          {
            label: "Sanitized screenshot placeholder",
            href: "#project-artifacts",
            kind: "Screenshot",
          },
        ],
      },
      {
        title: "Validation has domain meaning",
        kicker: "A false waiver value is valid data, not a missing field.",
        body:
          "The signup route explicitly handles the waiver boolean so false does not get rejected by a generic truthiness check. That small branch matters because operational data often has meaningful false values.",
        proof: [
          "Required-field validation special-cases waiver === false.",
          "Signup timestamps are generated server-side.",
          "Signup IDs are generated with crypto.randomUUID for stable references.",
        ],
        links: [
          {
            label: "Signup model",
            href: "https://github.com/hack4impact-calpoly/Operation-Surf/blob/main/src/database/models/signupSchema.ts",
            kind: "Source section",
          },
        ],
      },
    ],
    codeHighlights: [
      {
        title: "Role-aware volunteer payload",
        source: "Operation-Surf/src/app/api/volunteer/route.ts",
        language: "ts",
        code: `const payload = authContext.isAdmin
  ? volunteers.map(toAdminVolunteerPayload)
  : volunteers.map(toNonAdminVolunteerPayload);`,
        explanation:
          "The route does not rely on the frontend to hide sensitive fields. It returns different data shapes based on server-side auth context.",
        links: [
          {
            label: "Open volunteer route",
            href: "https://github.com/hack4impact-calpoly/Operation-Surf/blob/main/src/app/api/volunteer/route.ts",
            kind: "Source section",
          },
        ],
      },
      {
        title: "Registered-shifts read model",
        source: "Operation-Surf/src/app/api/signup/route.ts",
        language: "ts",
        code: `const shifts = await Day.find({ dayId: { $in: shiftIds } });
const programs = await Program.find({ programId: { $in: programIds } });

return signups.map((signup) => ({
  signupId: signup.signupId,
  shift: shiftById.get(signup.shiftId),
  program: programById.get(programId),
}));`,
        explanation:
          "This turns normalized database records into the workflow-shaped response the UI needs for volunteer coordination.",
        links: [
          {
            label: "Open signup route",
            href: "https://github.com/hack4impact-calpoly/Operation-Surf/blob/main/src/app/api/signup/route.ts",
            kind: "Source section",
          },
          {
            label: "Program schema",
            href: "https://github.com/hack4impact-calpoly/Operation-Surf/blob/main/src/database/models/programSchema.ts",
            kind: "Source section",
          },
        ],
      },
    ],
    outcome: [
      "Moved the case study focus from generic CRUD to access-aware operations design.",
      "Showed how backend response shape can reduce coordination burden for real users.",
      "Captured concrete API-level examples without exposing private volunteer data.",
    ],
    reflection:
      "Operation Surf shows my backend thinking: data models are not neutral. If the API mirrors how people coordinate work, the software reduces friction instead of creating another admin chore.",
  },
  vybetutor: {
    slug: "vybetutor",
    title: "Vybe Tutor",
    href: routes.vybeTutor,
    label: "Local-first IDE tutoring loop",
    metadataTitle: "Vybe Tutor - Case Study",
    metadataDescription:
      "A VS Code extension that turns AI-generated code into explanations, quizzes, local grading, and adaptive learning feedback.",
    sourceRepo: "https://github.com/tannosukeee/VybeTutor",
    localSourcePath: "C:\\Users\\brian\\Documents\\GitHub\\KiroHacks",
    thesis:
      "AI can generate explanations, but assessment and progression should stay deterministic, validated, and local.",
    summary: [
      "Vybe Tutor is a VS Code extension that helps students learn from AI-assisted coding. A student selects code, Gemini generates an explanation and quiz, and the extension grades answers locally while adjusting difficulty, XP, levels, and streaks.",
      "The architecture separates probabilistic generation from deterministic learning state. Zod contracts validate AI and message payloads, while pure TypeScript functions own grading, adaptation, and gamification.",
    ],
    proofPoints: ["VS Code extension demo", "Zod-validated AI outputs", "local adaptive engine"],
    ownership: {
      summary:
        "Contributed the learning-state side of the extension: adaptive engine, gamification, contracts, MCP/doc enrichment, and host/webview integration points.",
      items: [
        "Contributed deterministic grading, adaptive difficulty, XP, levels, and streak logic.",
        "Contributed Zod contracts around AI outputs and host/webview messages.",
        "Contributed MCP/doc enrichment work so generated explanations could include authoritative references.",
      ],
    },
    heroMedia: {
      type: "video",
      src: "/videos/VybeTutor Demonstration.mp4",
      alt: "Vybe Tutor demo video",
      caption: "Demo loop: selected code becomes an explanation, quiz, feedback, and progress update.",
    },
    details: [
      { label: "Role", value: "Contributor - adaptive engine, gamification, contracts, MCP/doc integrations" },
      { label: "Stack", value: "TypeScript, VS Code Extension API, React webview, Gemini, Zod, Vitest, MCP" },
      { label: "Status", value: "KiroHacks 2026 prototype with extension/webview demo" },
      { label: "Evidence", value: "Zod contracts, Gemini validation, adaptive engine, doc enrichment, host/webview bridge" },
    ],
    tags: ["TypeScript", "VS Code Extension", "Gemini", "Zod", "Vitest"],
    flow: {
      title: "Learning loop",
      steps: [
        { label: "select code", icon: "terminal" },
        { label: "Gemini response", icon: "bot" },
        { label: "Zod validation", icon: "lock" },
        { label: "local grading", icon: "cpu" },
        { label: "adaptive feedback", icon: "activity" },
      ],
    },
    mediaGallery: [
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/vybetutor-logo.png",
        alt: "Vybe Tutor logo",
        caption: "Project identity for the VS Code tutoring extension.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/extension-sidebar-correct.png",
        alt: "Vybe Tutor sidebar showing correct-answer feedback",
        caption: "Correct-answer sidebar state shows local grading and immediate feedback.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/extension-sidebar-wrong.png",
        alt: "Vybe Tutor sidebar showing wrong-answer recovery feedback",
        caption: "Wrong-answer state demonstrates recovery feedback instead of simply marking failure.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/example-correct.png",
        alt: "Vybe Tutor example showing a correct quiz answer",
        caption: "Correct quiz example connects generated explanation to a comprehension check.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/example-wrong.png",
        alt: "Vybe Tutor example showing an incorrect quiz answer",
        caption: "Incorrect quiz example shows how the tutor explains the missed concept.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/hover-context.png",
        alt: "Vybe Tutor hover context inside VS Code",
        caption: "Hover context keeps the learning surface inside the editor workflow.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/snippet-wrong.png",
        alt: "Code snippet used for a Vybe Tutor wrong-answer example",
        caption: "Code snippet evidence shows the exact kind of selected code the tutor responds to.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/team-working.jpg",
        alt: "Vybe Tutor team working on the project",
        caption: "Hackathon build context: implementing the extension and webview loop.",
      },
      {
        type: "image",
        src: "/assets/images/case-studies/vybetutor/team-photo.jpg",
        alt: "Vybe Tutor team photo",
        caption: "Team context for the KiroHacks prototype.",
      },
    ],
    visualHighlight: {
      type: "vybetutor",
      title: "AI generation is boxed in by local contracts",
      caption:
        "The learning loop separates Gemini output from deterministic grading, state updates, and adaptive feedback.",
    },
    deepDives: [
      {
        title: "Contracts around AI output",
        kicker: "The model can write JSON, but the extension still has to prove it.",
        body:
          "Tutor responses, quiz questions, doc references, and host/webview messages are all validated with strict Zod schemas. Gemini output is parsed as JSON, then accepted only if it matches the TutorResponse contract.",
        proof: [
          "The Gemini request asks for application/json output.",
          "Invalid JSON and schema mismatch fail before rendering.",
          "The same contract family validates messages crossing the webview boundary.",
        ],
        links: [
          {
            label: "Gemini service",
            href: "https://github.com/tannosukeee/VybeTutor/blob/main/src/ai/geminiService.ts",
            kind: "Source section",
          },
          {
            label: "Zod contracts",
            href: "https://github.com/tannosukeee/VybeTutor/blob/main/src/shared/contracts.ts",
            kind: "Source section",
          },
        ],
      },
      {
        title: "Local deterministic adaptation",
        kicker: "The learner's progress should not depend on another AI call.",
        body:
          "The adaptive engine uses pure functions to grade answers, update mastery, choose next difficulty, and decide whether to show hints. Incorrect answers lower difficulty and enter recovery; stable correct answers can step difficulty up.",
        proof: [
          "Grading is a case-insensitive selected-vs-correct comparison.",
          "Mastery is clamped between 0 and 1.",
          "A rolling recent-answer window controls difficulty increases.",
        ],
        links: [
          {
            label: "Adaptive engine",
            href: "https://github.com/tannosukeee/VybeTutor/blob/main/src/services/adaptiveEngine.ts",
            kind: "Source section",
          },
          {
            label: "Demo video",
            href: "/videos/VybeTutor Demonstration.mp4",
            kind: "Demo/video",
          },
        ],
      },
      {
        title: "Documentation enrichment as a side channel",
        kicker: "Official docs improve explanations, but failure should not break tutoring.",
        body:
          "The doc enricher maps model-identified concepts to Python documentation topics, fetches unique topics in parallel, and attaches quotes as references. If docs fail, the tutor response still renders.",
        proof: [
          "Concepts are deduplicated by documentation topic.",
          "Promise.allSettled keeps one failed fetch from failing the whole enrichment step.",
          "Doc enrichment is best-effort and caught separately from the main Gemini response.",
        ],
        links: [
          {
            label: "Doc enricher",
            href: "https://github.com/tannosukeee/VybeTutor/blob/main/src/services/docEnricher.ts",
            kind: "Source section",
          },
          {
            label: "Tutor demo video",
            href: "/videos/VybeTutor Demonstration.mp4",
            kind: "Demo/video",
          },
        ],
      },
    ],
    codeHighlights: [
      {
        title: "Validated Gemini response",
        source: "KiroHacks/src/ai/geminiService.ts",
        language: "ts",
        code: `const parsedJson = JSON.parse(rawText);
const validated = TutorResponseSchema.parse(parsedJson);

return handleGuardrails(validated);`,
        explanation:
          "The extension treats Gemini as an untrusted generator. The response must parse and satisfy the schema before it enters the UI.",
        links: [
          {
            label: "Open Gemini service",
            href: "https://github.com/tannosukeee/VybeTutor/blob/main/src/ai/geminiService.ts",
            kind: "Source section",
          },
        ],
      },
      {
        title: "Adaptive recovery logic",
        source: "KiroHacks/src/services/adaptiveEngine.ts",
        language: "ts",
        code: `if (!isCorrect) {
  return {
    ...state,
    currentDifficulty: clampDifficulty(d - 1),
    recoveryState: "recovering",
    needsReview: true,
  };
}`,
        explanation:
          "Progression is deterministic and local: a missed question lowers difficulty and marks the concept for review without asking AI to decide.",
        links: [
          {
            label: "Open adaptive engine",
            href: "https://github.com/tannosukeee/VybeTutor/blob/main/src/services/adaptiveEngine.ts",
            kind: "Source section",
          },
          {
            label: "Watch demo",
            href: "/videos/VybeTutor Demonstration.mp4",
            kind: "Demo/video",
          },
        ],
      },
    ],
    outcome: [
      "Built a clearer story around privacy, validation, and learning-state ownership.",
      "Showed how AI can be useful without making the whole product nondeterministic.",
      "Connected product principle, code contracts, and tests into one case-study narrative.",
    ],
    reflection:
      "Vybe Tutor shows the kind of AI engineering I want to demonstrate: use the model where it is strong, but put contracts, deterministic state, and user trust around it.",
  },
};

export const getCaseStudy = (slug: keyof typeof caseStudies) => caseStudies[slug];
