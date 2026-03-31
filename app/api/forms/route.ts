import { NextResponse } from "next/server"
import {
  sendLeadNotification,
  type BrochureLeadPayload,
  type ContactLeadPayload,
  type QuoteLeadPayload,
} from "@/lib/smtp"

export const runtime = "nodejs"

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : ""
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidPhone(value: string) {
  return /^[+\d\s()-]{7,20}$/.test(value)
}

function validateBaseFields(data: {
  contactName: string
  companyName: string
  email: string
  phone: string
}) {
  if (!data.contactName || !data.companyName || !data.email || !data.phone) {
    return "Missing required fields"
  }

  if (!isValidEmail(data.email)) {
    return "Invalid email address"
  }

  if (!isValidPhone(data.phone)) {
    return "Invalid phone number"
  }

  return null
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const type = asString(formData.get("type")) as "contact" | "quote" | "brochure"

    if (!["contact", "quote", "brochure"].includes(type)) {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 })
    }

    const baseFields = {
      contactName: asString(formData.get("contactName")),
      companyName: asString(formData.get("companyName")),
      email: asString(formData.get("email")),
      phone: asString(formData.get("phone")),
    }

    const baseError = validateBaseFields(baseFields)

    if (baseError) {
      return NextResponse.json({ error: baseError }, { status: 400 })
    }

    const uploadedFile = formData.get("attachment")
    let attachment:
      | {
          filename: string
          content: Buffer
          contentType?: string
        }
      | undefined

    if (uploadedFile instanceof File && uploadedFile.size > 0) {
      const bytes = await uploadedFile.arrayBuffer()
      attachment = {
        filename: uploadedFile.name,
        content: Buffer.from(bytes),
        contentType: uploadedFile.type || undefined,
      }
    }

    if (type === "contact") {
      const payload: ContactLeadPayload = {
        type,
        ...baseFields,
        exhibition: asString(formData.get("exhibition")),
        eventCity: asString(formData.get("eventCity")),
        standArea: asString(formData.get("standArea")),
        budget: asString(formData.get("budget")),
        message: asString(formData.get("message")),
      }

      await sendLeadNotification(payload, attachment)
      return NextResponse.json({ success: true })
    }

    if (type === "quote") {
      const payload: QuoteLeadPayload = {
        type,
        ...baseFields,
        countryCode: asString(formData.get("countryCode")),
        message: asString(formData.get("message")),
      }

      if (!payload.message) {
        return NextResponse.json({ error: "Message is required" }, { status: 400 })
      }

      await sendLeadNotification(payload, attachment)
      return NextResponse.json({ success: true })
    }

    const payload: BrochureLeadPayload = {
      type,
      ...baseFields,
      countryCode: asString(formData.get("countryCode")),
    }

    await sendLeadNotification(payload)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}
