import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  Code2,
  Database,
  BarChart3,
  BrainCircuit,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/config/site";

const map: Record<IconName, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  external: ExternalLink,
  code: Code2,
  database: Database,
  chart: BarChart3,
  brain: BrainCircuit,
  sparkles: Sparkles,
  wrench: Wrench,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Cmp = map[name] ?? ExternalLink;
  return <Cmp className={className} aria-hidden="true" />;
}
