"use client";

import { type FormEvent, useState } from "react";
import { Send } from "lucide-react";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company")) {
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const sender = String(formData.get("email") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Portfolio inquiry${project ? `: ${project}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${sender}`,
        project ? `Project type: ${project}` : "",
        "",
        message
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client with the message ready to send.");
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass-line js-reveal grid gap-4 rounded-lg p-4 md:p-6"
      aria-label="Contact form"
    >
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-white/76">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="focus-ring min-h-12 rounded-lg border border-white/10 bg-white/[0.045] px-4 text-white placeholder:text-white/36"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-white/76">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="focus-ring min-h-12 rounded-lg border border-white/10 bg-white/[0.045] px-4 text-white placeholder:text-white/36"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="project" className="text-sm font-semibold text-white/76">
          Project type
        </label>
        <select
          id="project"
          name="project"
          className="focus-ring min-h-12 rounded-lg border border-white/10 bg-[#0b1012] px-4 text-white"
          defaultValue="Next.js production build"
        >
          <option>Next.js production build</option>
          <option>v0 prototype to production</option>
          <option>Performance optimization</option>
          <option>AI workflow automation</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-white/76">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="focus-ring resize-y rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-white placeholder:text-white/36"
          placeholder="Tell me what you want to ship."
        />
      </div>

      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-bold text-black transition hover:bg-white"
      >
        Send message
        <Send aria-hidden="true" size={17} />
      </button>

      <p aria-live="polite" className="min-h-6 text-sm text-white/60">
        {status}
      </p>
    </form>
  );
}

