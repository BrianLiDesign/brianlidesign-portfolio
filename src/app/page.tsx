import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { CommunityBridge } from "@/components/sections/community-bridge";
import { DebugLogTeaser } from "@/components/sections/debug-log-teaser";
import { FlagshipKeres } from "@/components/sections/flagship-keres";
import { HeroSection } from "@/components/sections/hero-section";
import { HowIWork } from "@/components/sections/how-i-work";
import { SignalRibbon } from "@/components/sections/signal-ribbon";
import { WhatIBuild } from "@/components/sections/what-i-build";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIBuild />
      <SignalRibbon />
      <FlagshipKeres />
      <HowIWork />
      <CommunityBridge />
      <CaseStudyGrid />
      <DebugLogTeaser />
    </>
  );
}
