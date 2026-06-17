import { Mail } from "lucide-react";
import { TrackedAnchor } from "@/components/analytics/tracked-anchor";

export function ContactCta() {
  return (
    <TrackedAnchor
      analytics={{ kind: "contact", channel: "Email", location: "sticky_cta" }}
      className="contact-cta"
      href="mailto:brian.li.social@gmail.com"
    >
      <Mail aria-hidden="true" size={16} strokeWidth={2.3} />
      Contact
    </TrackedAnchor>
  );
}
