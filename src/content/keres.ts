export const keresProject = {
  title: "KERES — Multi-Drone Simulation & Experimentation",
  organization: "Booz Allen Hamilton",
  role: "Systems Engineer Intern",
  period: "Summer 2026",
  thesis:
    "I helped turn a broad swarm concept into a configurable simulation platform engineers could test, measure, and replay.",
  summary: [
    {
      label: "Contribution",
      value: "Coordination, PX4 control, experiment infrastructure",
    },
    {
      label: "Team",
      value: "Booz Allen systems engineering internship",
    },
    {
      label: "Constraints",
      value: "Simulation prototype; protected operational context",
    },
    {
      label: "Outcome",
      value: "7 strategies, 6 formations, 417 passing tests",
    },
  ],
  scope: {
    inScope: [
      "Simulated multi-drone coordination and defensive formations",
      "PX4-backed and lightweight simulation control paths",
      "Repeatable scenarios, structured events, metrics, and replay",
      "Simulator-independent coordination and validation modules",
    ],
    outOfScope: [
      "Physical-drone deployment or validated operational performance",
      "Weapons, damage, lethality, or real threat intelligence",
      "A production autonomy stack or production Cesium integration",
      "A claim that every supported configuration ran in the full GPU simulator",
    ],
  },
  contributions: [
    {
      title: "Swarm coordination",
      body:
        "Implemented and integrated formation, assignment, tracking, interception, and matched-seed benchmarking logic across several coordination approaches.",
    },
    {
      title: "Simulation & PX4 control",
      body:
        "Connected swarm-level commands to simulated multirotors through Pegasus and PX4 SITL, including OFFBOARD lifecycle management and coordinate conversion.",
    },
    {
      title: "Experiment infrastructure",
      body:
        "Built versioned run records, configuration hashing, run bundles, event recording, integrity checks, and browser-based replay for reproducible experiments.",
    },
    {
      title: "Simulation environments",
      body:
        "Worked on USD environment ingestion, obstacle handling, and visualization seams while keeping environment dependencies isolated from core simulation behavior.",
    },
  ],
  architecture: [
    "Scenario / Configuration",
    "Isaac Sim / Pegasus",
    "Perception / Tracking",
    "Swarm Coordinator",
    "PX4 SITL",
    "Safety / Events / Metrics",
    "Run Records / Replay",
  ],
  metrics: [
    { value: "7", label: "Coordination strategies" },
    { value: "6", label: "Formation families" },
    { value: "126", label: "Baseline experiment combinations" },
    { value: "417", label: "Passing tests on merged integration" },
  ],
  formations: [
    { id: "dome", label: "Dome" },
    { id: "sphere", label: "Sphere" },
    { id: "ring", label: "Ring" },
    { id: "stacked-rings", label: "Stacked rings" },
    { id: "layered", label: "Layered" },
    { id: "cloud", label: "Volumetric cloud" },
  ],
  deepDives: [
    {
      index: "01",
      title: "Tactical intent stays separate from flight control",
      body:
        "KERES produced position, velocity, and yaw commands while PX4 owned estimation and low-level vehicle control. The PX4 path covered OFFBOARD pre-streaming, mode switching, arming, heartbeat monitoring, diagnostics, forced disarming, and cleanup.",
    },
    {
      index: "02",
      title: "A run becomes inspectable evidence",
      body:
        "Scenario identity, configuration hashes, seeds, tool versions, events, time series, and integrity-checked artifacts made runs reproducible. Episode JSONL could be converted into a self-contained browser replay.",
    },
    {
      index: "03",
      title: "Event order protects the result",
      body:
        "Safety and breach accounting occurred before interception resolution, preventing a hostile that had already reached the asset from being counted as a successful interception.",
    },
  ],
  verification: [
    "417 local tests passed on the merged integration tree.",
    "Ruff linting, formatting, mypy, and JSON Schema validation were included in the recorded verification.",
    "Core coordination, geometry, recording, safety, and validation logic remained testable without launching the GPU simulator.",
    "Four coordinated-threat characterization cases reproduced archived control mathematics with a maximum absolute difference of 0.0.",
  ],
} as const;

export type KeresFormationId = (typeof keresProject.formations)[number]["id"];
