'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CounterTiles from "@/components/home/counter-tiles"
import { Mail, Phone, MapPin, User, Building, MessageCircle, Upload, Tag, Tent } from "lucide-react"
import { contactInfo } from "@/lib/site-content"

const initialFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  exhibition: '',
  eventCity: '',
  standArea: '',
  budget: '',
  message: '',
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [attachment, setAttachment] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachment(e.target.files?.[0] || null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitMessage(null)

    try {
      const payload = new FormData()
      payload.append("type", "contact")
      payload.append("contactName", formData.name)
      payload.append("companyName", formData.company)
      payload.append("email", formData.email)
      payload.append("phone", formData.phone)
      payload.append("exhibition", formData.exhibition)
      payload.append("eventCity", formData.eventCity)
      payload.append("standArea", formData.standArea)
      payload.append("budget", formData.budget)
      payload.append("message", formData.message)

      if (attachment) {
        payload.append("attachment", attachment)
      }

      const response = await fetch("/api/forms", {
        method: "POST",
        body: payload,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form")
      }

      setFormData(initialFormData)
      setAttachment(null)
      setSubmitMessage("Thank you for your inquiry. Our team will contact you shortly.")
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to submit form")
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <section className="py-16 sm:py-24 fbg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CounterTiles />

        <div className="mx-auto bg-card grid grid-cols-1 md:grid-cols-3 gap-3 rounded-b-lg border border-border p-8 sm:p-12">
          <div>
            <h2 className="text-3xl font-semibold">
              Choose Verlux Stands for your <span className="text-primary">Next Trade Show Event!</span>
            </h2>
            <h3 className="text-xl mt-5 font-semibold">Get a Custom Booth Design & Quote</h3>
            <div className="mt-5">
              {[
                "We will get back to you soon.",
                "Our team is always ready to assist you.",
                "We provide our services across India and Europe.",
                "No automated responses, only personal support.",
                "Get a customized quotation for your project.",
              ].map((item) => (
                <p className="my-3" key={item}><span className="text-primary font-semibold">+</span> {item}</p>
              ))}
            </div>
            <div className="mt-5">
              <div className="flex gap-3 mt-3">
                <Mail size={25} />
                <div>
                  <h6 className="font-semibold">Email</h6>
                  <p className="text-primary"><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Phone size={25} />
                <div>
                  <h6 className="font-semibold">Phone</h6>
                  {contactInfo.phones.map((phone) => (
                    <p key={phone} className="text-primary"><a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a></p>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <MapPin size={45} />
                <div>
                  <h6 className="font-semibold">Greater Noida</h6>
                  <p className="px-2">{contactInfo.addressLines.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="col-span-2 space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex px-2 gap-1 items-center rounded-lg border border-border bg-basckground transition-all">
                <User className="text-primary" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="Contact Name" />
              </div>
              <div className="flex px-2 gap-1 items-center rounded-lg border border-border transition-all">
                <Building className="text-primary" />
                <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="Company Name" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex px-2 gap-1 items-center rounded-lg border border-border transition-all">
                <Mail className="text-primary" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="you@example.com" />
              </div>
              <div className="flex px-2 gap-1 items-center rounded-lg border border-border transition-all">
                <Phone className="text-primary" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="+91 7303531447" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex px-2 gap-1 items-center rounded-lg border border-border transition-all">
                <Tag className="text-primary" />
                <input type="text" name="exhibition" value={formData.exhibition} onChange={handleChange} required className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="Exhibition Name" />
              </div>
              <div className="flex px-2 gap-1 items-center rounded-lg border border-border transition-all">
                <MapPin className="text-primary" />
                <input type="text" name="eventCity" value={formData.eventCity} onChange={handleChange} required className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="Event City" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex px-2 gap-1 items-center rounded-lg border border-border transition-all">
                <Tent className="text-primary" />
                <input type="text" name="standArea" value={formData.standArea} onChange={handleChange} required className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="Stand Dimension & Area" />
              </div>
              <div className="flex px-2 gap-1 items-center rounded-lg border border-border transition-all">
                <Tag className="text-primary" />
                <input type="text" name="budget" value={formData.budget} onChange={handleChange} required className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="Stand Budget" />
              </div>
            </div>

            <div className="flex px-2 gap-1 items-start rounded-lg border border-border transition-all">
              <MessageCircle className="text-primary mt-3" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none text-lg"
                placeholder="Your message..."
              />
            </div>

            <div className="flex px-2 gap-1 items-center rounded-lg border border-border transition-all">
              <Upload className="text-primary" />
              <input
                type="file"
                id="attachment"
                name="attachment"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="w-full py-3 text-foreground placeholder:text-muted-foreground focus:outline-none text-lg"
              />
            </div>

            {submitError && <p className="text-sm text-red-600">{submitError}</p>}
            {submitMessage && <p className="text-sm text-green-700">{submitMessage}</p>}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-secondary-foreground hover:bg-primary/90 py-6 text-base font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
