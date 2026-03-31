import "server-only"

import nodemailer from "nodemailer"

type LeadType = "contact" | "quote" | "brochure"

interface BaseLeadPayload {
  type: LeadType
  contactName: string
  companyName: string
  email: string
  phone: string
}

export interface ContactLeadPayload extends BaseLeadPayload {
  type: "contact"
  exhibition?: string
  eventCity?: string
  standArea?: string
  budget?: string
  message?: string
}

export interface QuoteLeadPayload extends BaseLeadPayload {
  type: "quote"
  message: string
  countryCode?: string
}

export interface BrochureLeadPayload extends BaseLeadPayload {
  type: "brochure"
  countryCode?: string
}

export type LeadPayload = ContactLeadPayload | QuoteLeadPayload | BrochureLeadPayload

function getRequiredEnv(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (value === undefined) return fallback
  return value === "true"
}

let cachedTransporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter
  }

  cachedTransporter = nodemailer.createTransport({
    host: getRequiredEnv("SMTP_HOST"),
    port: Number(getRequiredEnv("SMTP_PORT")),
    secure: parseBoolean(process.env.SMTP_SECURE, false),
    auth: {
      user: getRequiredEnv("SMTP_USER"),
      pass: getRequiredEnv("SMTP_PASS"),
    },
  })

  return cachedTransporter
}

function getLeadSubject(type: LeadType) {
  switch (type) {
    case "contact":
      return "New website contact enquiry"
    case "quote":
      return "New website quote request"
    case "brochure":
      return "New brochure download request"
  }
}

function getLeadHeading(type: LeadType) {
  switch (type) {
    case "contact":
      return "Website contact enquiry"
    case "quote":
      return "Website quote request"
    case "brochure":
      return "Website brochure request"
  }
}

function renderAdminHtml(payload: LeadPayload) {
  const rows: Array<[string, string | undefined]> = [
    ["Lead type", payload.type],
    ["Name", payload.contactName],
    ["Company", payload.companyName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Country code", "countryCode" in payload ? payload.countryCode : undefined],
    ["Exhibition", "exhibition" in payload ? payload.exhibition : undefined],
    ["Event city", "eventCity" in payload ? payload.eventCity : undefined],
    ["Stand area", "standArea" in payload ? payload.standArea : undefined],
    ["Budget", "budget" in payload ? payload.budget : undefined],
    ["Message", "message" in payload ? payload.message : undefined],
  ]

  const visibleRows = rows.filter(([, value]) => value && value.trim().length > 0)

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="margin-bottom:16px;">${getLeadHeading(payload.type)}</h2>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#e5e7eb;">
        ${visibleRows
          .map(
            ([label, value]) => `
              <tr>
                <td style="font-weight:700;background:#f9fafb;">${label}</td>
                <td>${value}</td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `
}

function renderAdminText(payload: LeadPayload) {
  const lines = [
    `Lead type: ${payload.type}`,
    `Name: ${payload.contactName}`,
    `Company: ${payload.companyName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    "countryCode" in payload && payload.countryCode ? `Country code: ${payload.countryCode}` : "",
    "exhibition" in payload && payload.exhibition ? `Exhibition: ${payload.exhibition}` : "",
    "eventCity" in payload && payload.eventCity ? `Event city: ${payload.eventCity}` : "",
    "standArea" in payload && payload.standArea ? `Stand area: ${payload.standArea}` : "",
    "budget" in payload && payload.budget ? `Budget: ${payload.budget}` : "",
    "message" in payload && payload.message ? `Message: ${payload.message}` : "",
  ]

  return lines.filter(Boolean).join("\n")
}

function renderAutoReplyHtml(payload: LeadPayload) {
  const brochureLine =
    payload.type === "brochure"
      ? "<p>We have recorded your brochure request. You can also download the brochure directly from the website.</p>"
      : "<p>Our team has received your enquiry and will get back to you shortly.</p>"

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="margin-bottom:16px;">Thank you, ${payload.contactName}</h2>
      ${brochureLine}
      <p><strong>Company:</strong> ${payload.companyName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p>Regards,<br />Verlux Stands</p>
    </div>
  `
}

function renderAutoReplyText(payload: LeadPayload) {
  const base = [
    `Thank you, ${payload.contactName}.`,
    payload.type === "brochure"
      ? "We have recorded your brochure request."
      : "Our team has received your enquiry and will get back to you shortly.",
    "",
    `Company: ${payload.companyName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    "",
    "Regards,",
    "Verlux Stands",
  ]

  return base.join("\n")
}

export async function sendLeadNotification(
  payload: LeadPayload,
  attachment?: { filename: string; content: Buffer; contentType?: string }
) {
  const transporter = getTransporter()
  const fromName = process.env.SMTP_FROM_NAME || "Verlux Stands Website"
  const fromEmail = getRequiredEnv("SMTP_FROM_EMAIL")
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || fromEmail

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: adminEmail,
    replyTo: payload.email,
    subject: getLeadSubject(payload.type),
    html: renderAdminHtml(payload),
    text: renderAdminText(payload),
    attachments: attachment ? [attachment] : [],
  })

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: payload.email,
    replyTo: adminEmail,
    subject: "We received your enquiry",
    html: renderAutoReplyHtml(payload),
    text: renderAutoReplyText(payload),
  })
}
