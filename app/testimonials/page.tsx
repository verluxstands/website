import { Metadata } from "next"
import TopHeader from "@/components/common/top-header"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import PageHeader from "@/components/common/page-header"
import { ReviewSchema, BreadcrumbSchema } from "@/components/structured-data"
import { DynamicSchema } from "@/components/admin/seo/schema"
import { getSEO, generateMetadataFromSEO } from "@/lib/seo"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { legacyTestimonials } from "@/lib/site-content"

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEO("testimonials")
  return generateMetadataFromSEO(seo)
}

const testimonials = legacyTestimonials.map((item) => ({
  quote: item.quote,
  author: item.author,
  company: item.company,
  rating: item.rating,
}))

export default async function TestimonialsPage() {
  const seo = await getSEO("testimonials")
  const reviewsForSchema = testimonials.map(t => ({
    author: t.author,
    rating: t.rating,
    reviewBody: t.quote
  }))

  return (
    <>
      <DynamicSchema seo={seo} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://verluxstands-web.vercel.app" },
        { name: "Testimonials", url: "https://verluxstands-web.vercel.app/testimonials" }
      ]} />
      <ReviewSchema reviews={reviewsForSchema} />
      <main className="min-h-screen bg-background">
        <TopHeader />
        <Header />
        <PageHeader
          subtitle="Client Stories"
          title="What Our Clients Say"
          backgroundImage="/legacy/brands/IMG-20250928-WA0003.jpg"
        />

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors relative"
                >
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t border-border pt-6">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">Ready to join our list of satisfied clients?</p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
