import { Resend } from "resend";

const TO_EMAIL = "support@reynapay.com";
const FROM_EMAIL = "Reyna Pay Website <noreply@reynapay.com>";

interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  reason: string;
  message: string;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set. Contact submission logged but not sent:", payload);
    return;
  }
  const resend = new Resend(apiKey);
  const subject = `[Reyna Pay] ${payload.reason} — ${payload.name}`;
  const text = [
    `New contact form submission from reynapay.com`,
    ``,
    `Reason: ${payload.reason}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    payload.company ? `Company: ${payload.company}` : null,
    ``,
    `Message:`,
    payload.message,
  ].filter(Boolean).join("\n");
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #1a1313; margin: 0 0 16px;">New contact form submission</h2>
      <p style="color: #4a4a4a; margin: 0 0 24px;">From <strong>reynapay.com</strong></p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #878787; width: 120px;">Reason</td><td style="padding: 8px 0; color: #1a1313;"><strong>${escapeHtml(payload.reason)}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #878787;">Name</td><td style="padding: 8px 0; color: #1a1313;">${escapeHtml(payload.name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #878787;">Email</td><td style="padding: 8px 0; color: #1a1313;"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
        ${payload.phone ? `<tr><td style="padding: 8px 0; color: #878787;">Phone</td><td style="padding: 8px 0; color: #1a1313;">${escapeHtml(payload.phone)}</td></tr>` : ""}
        ${payload.company ? `<tr><td style="padding: 8px 0; color: #878787;">Company</td><td style="padding: 8px 0; color: #1a1313;">${escapeHtml(payload.company)}</td></tr>` : ""}
      </table>
      <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e8eaed;">
        <p style="color: #878787; margin: 0 0 8px; font-size: 13px;">Message</p>
        <p style="color: #1a1313; margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(payload.message)}</p>
      </div>
    </div>
  `;
  const result = await resend.emails.send({ from: FROM_EMAIL, to: TO_EMAIL, replyTo: payload.email, subject, text, html });
  if (result.error) throw new Error(`Resend send failed: ${result.error.message}`);
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
