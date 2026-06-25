import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28", className)}
    >
      {(eyebrow || title || subtitle) && (
        <Reveal className="mb-12 text-center">
          {eyebrow && (
            <span className="mb-3 inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-300">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
              {subtitle}
            </p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
