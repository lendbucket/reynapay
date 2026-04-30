"use client";

import { useState, useTransition } from "react";
import { Input, Textarea, Select } from "./input";
import { Button } from "./button";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [pending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitContactForm(formData);
      setState(result);
      if (result.status === "success") {
        const form = document.getElementById("contact-form") as HTMLFormElement | null;
        form?.reset();
      }
    });
  }

  if (state.status === "success") {
    return (
      <div className="bg-[var(--color-success-bg)] border border-[var(--color-success)]/20 rounded-[var(--radius-card)] p-6 text-center">
        <h3 className="text-lg text-[var(--color-success)] mb-2">Message received.</h3>
        <p className="text-[var(--color-text-secondary)] text-[0.9375rem]">We'll respond within one business day. Check your email for confirmation.</p>
        <button type="button" onClick={() => setState(initialState)} className="mt-4 text-sm text-[var(--color-teal)] underline">Send another message</button>
      </div>
    );
  }

  return (
    <form id="contact-form" action={onSubmit} className="space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] w-px h-px" aria-hidden="true" />
      <div className="grid md:grid-cols-2 gap-5">
        <Input label="Full name" name="name" required autoComplete="name" />
        <Input label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Input label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Input label="Company" name="company" autoComplete="organization" />
      </div>
      <Select label="Reason for contact" name="reason" required defaultValue="">
        <option value="" disabled>Choose one…</option>
        <option value="salon">I want to apply as a salon</option>
        <option value="partner">I want to apply as a partner</option>
        <option value="press">Press inquiry</option>
        <option value="support">Existing merchant support</option>
        <option value="other">Other</option>
      </Select>
      <Textarea label="Message" name="message" required placeholder="Tell us a bit about your business and what you're looking for." />
      {state.status === "error" && (
        <div className="bg-[var(--color-error-bg)] border border-[var(--color-error)]/20 rounded-[var(--radius-input)] p-4 text-sm text-[var(--color-error)]" role="alert">
          {state.message ?? "Something went wrong. Please try again or email us directly."}
        </div>
      )}
      <Button type="submit" disabled={pending} className="w-full md:w-auto">{pending ? "Sending…" : "Send message"}</Button>
      <p className="text-xs text-[var(--color-text-muted)]">By submitting this form, you agree to our <a href="/legal/privacy" className="underline">Privacy Policy</a>. We respond within one business day.</p>
    </form>
  );
}
