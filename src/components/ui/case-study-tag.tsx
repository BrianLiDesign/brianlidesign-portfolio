import {
  Bot,
  Cable,
  Filter,
  Fingerprint,
  Puzzle,
  ShieldCheck,
  TestTube,
  Zap,
} from "lucide-react";
import Image from "next/image";
import type { ElementType } from "react";
import { Tag } from "@/components/ui/tag";

const svgIcons: Record<string, string> = {
  Assembly: "/assets/images/icons/assembly.svg",
  Basys3: "/assets/images/icons/xilinx.svg",
  MongoDB: "/assets/images/icons/mongodb.svg",
  "Next.js API": "/assets/images/icons/nextjs.svg",
  SystemVerilog: "/assets/images/icons/systemverilog.svg",
  TypeScript: "/assets/images/icons/typescript.svg",
  "VS Code Extension": "/assets/images/icons/microsoft-visual-studio-code.svg",
};

const lucideIcons: Record<string, ElementType> = {
  Debounce: Zap,
  "FSR sensors": Fingerprint,
  Gemini: Bot,
  "Signal filtering": Filter,
  Vitest: TestTube,
  "Web Serial": Cable,
  Zod: ShieldCheck,
};

type CaseStudyTagProps = {
  label: string;
};

export function CaseStudyTag({ label }: CaseStudyTagProps) {
  const svgPath = svgIcons[label];
  const LucideIcon = lucideIcons[label];
  const hasIcon = svgPath || LucideIcon;

  return (
    <Tag className={hasIcon ? "tag--with-icon" : undefined}>
      {svgPath ? (
        <Image
          src={svgPath}
          alt=""
          width={13}
          height={13}
          className="tag__icon"
          aria-hidden="true"
        />
      ) : LucideIcon ? (
        <LucideIcon aria-hidden="true" className="tag__icon" size={13} />
      ) : null}
      <span>{label}</span>
    </Tag>
  );
}
