"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { site } from "@/config/site";
import { Section } from "./ui/Section";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="My Resume" subtitle="Prefer the one-pager? Preview or download it below.">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-strong mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl p-8 sm:flex-row sm:p-10"
      >
        <div className="flex h-40 w-32 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/30 to-accent-600/20">
          <FileText className="h-14 w-14 text-brand-300" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-display text-xl font-semibold">{site.name} — Resume</h3>
          <p className="mt-2 text-sm text-white/60">
            A concise summary of my education, skills, projects and experience in Data &amp; AI.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href={site.resumePath}
              target="_blank"
              rel="noreferrer noopener"
              className="glass flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Eye className="h-4 w-4" /> Preview
            </a>
            <a
              href={site.resumePath}
              download
              className="flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
