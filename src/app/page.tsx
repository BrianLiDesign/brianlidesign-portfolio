import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { CommunityBridge } from "@/components/sections/community-bridge";
import { DebugLogTeaser } from "@/components/sections/debug-log-teaser";
import { FlagshipRebalance } from "@/components/sections/flagship-rebalance";
import { HeroSection } from "@/components/sections/hero-section";
import { HowIWork } from "@/components/sections/how-i-work";
import { SignalRibbon } from "@/components/sections/signal-ribbon";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SignalRibbon />
      <FlagshipRebalance />
      <HowIWork />
      <CommunityBridge />
      <CaseStudyGrid />
      <DebugLogTeaser />
    </>
  );
}
