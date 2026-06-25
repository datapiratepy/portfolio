"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects, projectCategories } from "@/config/site";
import { cn } from "@/lib/utils";
import { Section } from "./ui/Section";

type Filter = "All" | (typeof projectCategories)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      subtitle="A mix of analytics, data science, ML and AI builds — each solving a concrete problem."
    >
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === f ? "text-ink-950" : "text-white/65 hover:text-white"
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="glass card-hover group flex flex-col overflow-hidden rounded-2xl"
            >
              {/* Image / gradient banner */}
              <div className="relative h-44 overflow-hidden">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative h-full w-full bg-gradient-to-br from-brand-600/40 via-ink-800 to-accent-600/30">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <span className="absolute bottom-4 left-5 font-display text-4xl font-extrabold text-white/15">
                      {p.category}
                    </span>
                  </div>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                  {p.category}
                </span>
                {p.featured && (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-ink-950">
                    <Star className="h-3 w-3" /> Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.description}</p>

                <div className="mt-4 space-y-2.5 text-sm">
                  <Detail label="Problem" value={p.problem} />
                  <Detail label="Solution" value={p.solution} />
                  <Detail label="Impact" value={p.impact} />
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2.5 pt-1">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-gradient px-3 py-2 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-white/60">
      <span className="font-semibold text-brand-300">{label}: </span>
      {value}
    </p>
  );
}
