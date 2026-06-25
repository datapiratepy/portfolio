"use client";

import { motion } from "framer-motion";
import { Trophy, Award, GraduationCap, Medal } from "lucide-react";
import { achievements } from "@/config/site";
import { Section } from "./ui/Section";

const tagIcon = {
  Hackathon: Trophy,
  Certification: Award,
  Academic: GraduationCap,
  Competition: Medal,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Achievements"
      subtitle="Wins, honors and milestones worth highlighting."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => {
          const Ico = tagIcon[a.tag] ?? Award;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass card-hover flex flex-col gap-3 rounded-2xl p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <Ico className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-accent-300">
                {a.tag}
              </span>
              <h3 className="font-display text-base font-semibold leading-snug">{a.title}</h3>
              <p className="text-sm text-white/55">{a.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
