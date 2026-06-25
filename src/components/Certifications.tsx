"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/config/site";
import { Section } from "./ui/Section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      subtitle="Verified, hands-on credentials that back up the skills."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.credentialUrl || "#"}
            target={c.credentialUrl?.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass card-hover group relative flex flex-col gap-3 overflow-hidden rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <Award className="h-5 w-5" />
              </span>
              <ExternalLink className="h-4 w-4 text-white/30 transition-colors group-hover:text-brand-300" />
            </div>
            <h3 className="font-display text-base font-semibold leading-snug">{c.title}</h3>
            <p className="text-sm text-white/55">{c.issuer}</p>
            <span className="mt-auto text-xs font-medium uppercase tracking-wider text-white/40">
              {c.date}
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
