"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { hero, socials } from "@/config/site";
import { Icon } from "@/lib/icons";

function useRotatingWord(words: readonly string[], interval = 2200) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return words[i];
}

export function Hero() {
  const word = useRotatingWord(hero.rotatingWords);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-28 sm:px-6"
    >
      {/* Ambient layers */}
      <div className="absolute inset-0 -z-20 bg-radial-faint" />
      <div className="absolute inset-0 -z-10 bg-grid" />
      <motion.div
        className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-brand-500/25 blur-[120px]"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-12 -z-10 h-72 w-72 rounded-full bg-accent-500/20 blur-[120px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/75"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl"
        >
          {hero.headlinePrefix}{" "}
          <span className="relative inline-block">
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="text-gradient inline-block"
            >
              {word}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/65 sm:text-lg"
        >
          {hero.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={hero.primaryCta.href}
            className="group flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:scale-[1.03]"
          >
            {hero.primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={hero.secondaryCta.href}
            download
            className="glass flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            {hero.secondaryCta.label}
          </a>
          <a
            href={hero.tertiaryCta.href}
            className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white/75 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {hero.tertiaryCta.label}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              aria-label={s.label}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white/70 transition-all hover:-translate-y-0.5 hover:text-white"
            >
              <Icon name={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
