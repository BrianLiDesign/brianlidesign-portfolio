import { describe, expect, it } from "vitest";
import { debugLogEntries } from "./debug-log";
import { writingEntries } from "./writing";

describe("portfolio writing content", () => {
  it("leads the Writing index with the anchored KERES debugging note", () => {
    const keresEntry = writingEntries[0];
    const keresDebugEntry = debugLogEntries.find((entry) => entry.slug === "keres-event-ordering");

    expect(keresEntry).toMatchObject({
      title: "KERES: When event order changes the metric",
      href: "/debug-log#keres-event-ordering",
      linkLabel: "Read the KERES debugging note",
    });
    expect(keresDebugEntry).toBeDefined();
  });

  it("gives every Writing entry specific link text", () => {
    expect(writingEntries.every((entry) => entry.linkLabel.trim().length > 0)).toBe(true);
    expect(new Set(writingEntries.map((entry) => entry.linkLabel)).size).toBe(
      writingEntries.length,
    );
  });
});
