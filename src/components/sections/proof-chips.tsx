import Link from "next/link";
import { proofChips } from "@/content/site";
import { EvidenceTrace } from "@/components/visuals/evidence-trace";

export function ProofChips() {
  return (
    <div className="proof-chips" aria-label="Selected engineering proof" role="group">
      {proofChips.map((chip) => (
        <Link className="proof-chip" href={chip.href} key={chip.title}>
          <p>{chip.title}</p>
          <strong>{chip.proof}</strong>
          <span>Open case file</span>
          <EvidenceTrace />
        </Link>
      ))}
    </div>
  );
}
