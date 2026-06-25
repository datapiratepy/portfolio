"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { contact, site, socials } from "@/config/site";
import { Icon } from "@/lib/icons";
import { Section } from "./ui/Section";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): boolean {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!emailRe.test(form.email)) e.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    // Backend endpoint (e.g. Formspree). Falls back to mailto if not set.
    if (contact.formEndpoint) {
      try {
        setStatus("sending");
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error();
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } catch {
        setStatus("error");
      }
    } else {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }
  }

  function field(name: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  }

  return (
    <Section id="contact" eyebrow="Contact" title={contact.heading} subtitle={contact.subheading}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Left: direct links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-sm text-white/60">
            Reach me directly through any of these channels:
          </p>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="glass card-hover flex items-center gap-4 rounded-2xl p-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white/85">{s.label}</p>
                <p className="truncate text-xs text-white/45">
                  {s.href.replace("mailto:", "").replace("https://", "")}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Right: form */}
        <motion.form
          onSubmit={onSubmit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="glass-strong space-y-5 rounded-3xl p-6 sm:p-8"
        >
          <Field
            label="Name"
            value={form.name}
            onChange={(v) => field("name", v)}
            error={errors.name}
            placeholder="Your name"
          />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(v) => field("email", v)}
            error={errors.email}
            placeholder="you@example.com"
          />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/75">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => field("message", e.target.value)}
              placeholder="Tell me about the role or project…"
              className={cn(
                "w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand-400",
                errors.message ? "border-red-400/60" : "border-white/10"
              )}
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : status === "sent" ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Message ready
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Message
              </>
            )}
          </button>

          {status === "sent" && (
            <p className="text-center text-xs text-emerald-400">
              Thanks! Your message is on its way.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-xs text-red-400">
              Something went wrong. Please email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-white/75">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand-400",
          error ? "border-red-400/60" : "border-white/10"
        )}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
