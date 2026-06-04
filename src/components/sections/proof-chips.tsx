import { proofChips } from "@/content/site";
import { EvidenceTrace } from "@/components/visuals/evidence-trace";

export function ProofChips() {
  return (
    <div className="proof-chips" aria-label="Selected engineering proof">
      {proofChips.map((chip) => (
        <article className="proof-chip" key={chip.title}>
          <p>{chip.title}</p>
          <strong>{chip.proof}</strong>
          <span>Evidence trace</span>
          <EvidenceTrace />
        </article>
      ))}
    </div>
  );
}
