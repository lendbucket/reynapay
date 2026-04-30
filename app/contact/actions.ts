"use server";

import { z } from "zod";
import { sendContactEmail } from "@/lib/resend";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message?: string };

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional().or(z.literal("")),
  company: z.string().max(200).optional().or(z.literal("")),
  reason: z.enum(["salon", "partner", "press", "support", "other"]),
  message: z.string().min(10).max(5000),
  website: z.string().max(0).optional().or(z.literal("")),
});

const REASON_LABELS: Record<string, string> = {
  salon: "Salon application",
  partner: "Partner application",
  press: "Press inquiry",
  support: "Existing merchant support",
  other: "Other",
};

export async function submitContactForm(formData: FormData): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    phone: formData.get("phone") ?? "",
    company: formData.get("company") ?? "",
    reason: formData.get("reason") ?? "",
    message: formData.get("message") ?? "",
    website: formData.get("website") ?? "",
  };
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return { status: "error", message: "Please check the form and try again. All required fields must be filled." };
  }
  const data = parsed.data;
  if (data.website && data.website.length > 0) {
    return { status: "success" };
  }
  try {
    await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      company: data.company || undefined,
      reason: REASON_LABELS[data.reason] ?? data.reason,
      message: data.message,
    });
    return { status: "success" };
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return { status: "error", message: "We couldn't send your message right now. Please email us directly at support@reynapay.com." };
  }
}
