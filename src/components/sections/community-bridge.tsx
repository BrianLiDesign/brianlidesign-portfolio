import Image from "next/image";
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
        <figure className="community-bridge__portrait">
          <Image
            alt="Brian Li portrait outdoors in Hawaii light"
            fill
            sizes="(max-width: 980px) 180px, 220px"
            src="/assets/images/personal/brian-li-portrait-vertical.jpg"
          />
        </figure>
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
