"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/config/site";
import { Icon } from "@/lib/icons";
import { Section } from "./ui/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills & Technologies"
      subtitle="The stack I use to take problems from raw data to deployed insight."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass card-hover group rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-ink-950">
                <Icon name={group.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75 transition-colors group-hover:border-brand-500/30 group-hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
