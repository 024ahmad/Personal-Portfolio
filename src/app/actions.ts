"use server";

import { Resend } from "resend";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { ok: false as const, error: "Please fill in all required fields." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "ar339497hmad@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  // Dev fallback: if no API key, log instead of sending.
  if (!apiKey) {
    console.log("[contact:dev-no-key]", { name, email, subject, message });
    return {
      ok: true as const,
      dev: true as const,
    };
  }

  try {
    const resend = new Resend(apiKey);
    console.log("[contact] sending email →", { to: toEmail, from: fromEmail, replyTo: email });
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #08060a; color: #f5e6f0; border-radius: 16px; border: 1px solid rgba(255, 45, 135, 0.2);">
          <h2 style="color: #ff2d87; margin: 0 0 16px; font-size: 22px;">New Portfolio Message</h2>
          <div style="background: rgba(255, 45, 135, 0.05); border: 1px solid rgba(255, 45, 135, 0.2); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
            <p style="margin: 4px 0;"><strong style="color: #ff6fb5;">Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 4px 0;"><strong style="color: #ff6fb5;">Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #22e1ff;">${escapeHtml(email)}</a></p>
            ${subject ? `<p style="margin: 4px 0;"><strong style="color: #ff6fb5;">Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
          </div>
          <div style="background: rgba(255, 255, 255, 0.03); border-left: 3px solid #ff2d87; padding: 16px; border-radius: 4px;">
            <p style="margin: 0 0 8px; color: #ff6fb5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: rgba(245, 230, 240, 0.5); text-align: center;">Sent from your portfolio contact form · Cyber Sakura</p>
        </div>
      `,
    });

    if (error) {
      console.error("[resend:error]", JSON.stringify(error, null, 2));
      return {
        ok: false as const,
        error: `Resend error: ${error.message ?? "unknown"}`,
      };
    }

    console.log("[contact] ✓ email sent, id:", data?.id);
    return { ok: true as const };
  } catch (err) {
    console.error("[contact:exception]", err);
    return { ok: false as const, error: "Something went wrong. Try email instead." };
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
