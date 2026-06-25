"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, GraduationCap, Sparkles } from "lucide-react";
import { experience } from "@/config/site";
import { Section } from "./ui/Section";

const typeIcon = {
  Internship: Briefcase,
  Hackathon: Trophy,
  Education: GraduationCap,
  Other: Sparkles,
};

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Experience"
      subtitle="Internships, hackathons and milestones along the way."
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-500/60 via-white/10 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experience.map((item, i) => {
            const Ico = typeIcon[item.type] ?? Sparkles;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={`${item.role}-${i}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  left ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
                }`}
              >
                {/* Node */}
                <span
                  className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-ink-950 left-0 sm:left-auto ${
                    left ? "sm:-right-4" : "sm:-left-4"
                  }`}
                >
                  <Ico className="h-4 w-4" />
                </span>

                <div className="glass card-hover rounded-2xl p-5">
                  <span className="mb-2 inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
                    {item.type}
                  </span>
                  <h3 className="font-display text-base font-semibold">{item.role}</h3>
                  <p className="text-sm text-white/60">
                    {item.org} · {item.period}
                  </p>
                  <ul className={`mt-3 space-y-1.5 text-sm text-white/60 ${left ? "sm:list-none" : ""}`}>
                    {item.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
