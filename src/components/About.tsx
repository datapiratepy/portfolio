"use client";

import { motion } from "framer-motion";
import { about } from "@/config/site";
import { Icon } from "@/lib/icons";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title={about.heading} subtitle={about.subheading}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-white/70">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {about.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass card-hover flex flex-col items-start gap-3 rounded-2xl p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <Icon name={h.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-white/85">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
