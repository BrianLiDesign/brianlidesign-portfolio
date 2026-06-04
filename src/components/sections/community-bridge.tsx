import { communityBridge } from "@/content/site";
import { OceanCurrentLines } from "@/components/visuals/ocean-current-lines";
import { SectionLabel } from "@/components/ui/section-label";

export function CommunityBridge() {
  return (
    <section className="community-bridge" id="about">
      <OceanCurrentLines />
      <div>
        <SectionLabel>{communityBridge.label}</SectionLabel>
        <h2>{communityBridge.title}</h2>
      </div>
      <div className="community-bridge__copy">
        {communityBridge.lines.map((line, index) => (
          <p className={index === 0 ? "community-bridge__lead" : ""} key={line}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
