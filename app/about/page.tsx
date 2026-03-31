import { Metadata } from "next"
import Image from "next/image"
import TopHeader from '@/components/common/top-header';
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import PageHeader from "@/components/common/page-header"
import { DynamicSchema } from "@/components/admin/seo/schema"
import { getSEO, generateMetadataFromSEO } from "@/lib/seo"
import { CheckCircle2 } from "lucide-react"
import { internationalMarkets, indiaCities } from "@/lib/site-content"

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEO("about")
  return generateMetadataFromSEO(seo)
}

const stats = [
  { number: "98%", label: "Client Satisfaction" },
  { number: "150+", label: "Projects Completed" },
  { number: "120+", label: "Exhibitions Served" },
  { number: "5+", label: "Countries Served" },
]

const strengths = [
  "Custom and modular stand design under one roof",
  "In-house coordination from concept to dismantling",
  "Support for exhibitions across India and Europe",
  "Practical booths built for visibility, meetings, and lead generation",
]

export default async function AboutPage() {
  const seo = await getSEO("about")

  return (
    <main className="min-h-screen bg-background">
      <DynamicSchema seo={seo} />
      <TopHeader />
      <Header />
      <PageHeader
        title="About Us"
        subtitle="Join hands with a dependable exhibition stand builder for India and Europe."
        backgroundImage="/legacy/booths/IMG-20250917-WA0017.webp"
      />

      <section className="border-b border-border bgd-card py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="mb-2 font-serif text-4xl font-bold text-primary md:text-5xl">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/legacy/booths/IMG-20250917-WA0004.webp"
                  alt="Verlux exhibition booth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                A Dependable Exhibition Stand Builder with Complete Services
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Verlux Stands provides exhibitors with practical guidance from early ideas to final delivery. Whether you need a custom stand or a modular booth, our team manages design, production, logistics, installation, and show-floor support.
                </p>
                <p>
                  We focus on creating stands that reflect your brand clearly, attract the right audience, and support meaningful conversations during the event. Every project is planned around your objectives, venue requirements, and budget.
                </p>
                <p>
                  With experience across Delhi/NCR, Mumbai, Bengaluru, Dubai, Germany, France, and Italy, Verlux Stands helps brands maintain a reliable exhibition presence in both domestic and international markets.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {strengths.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Our Reach</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Exhibition Support Across Key Markets
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold">Major Indian Cities</h3>
              <div className="flex flex-wrap gap-3">
                {indiaCities.map((city) => (
                  <span key={city} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold">International Markets</h3>
              <div className="flex flex-wrap gap-3">
                {internationalMarkets.map((market) => (
                  <span key={market} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/80">Verlux Stands</p>
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Plan your next exhibition with a team that understands execution.
            </h2>
            <p className="mx-auto max-w-2xl text-primary-foreground/80">
              We build exhibition environments that are clear, functional, and designed around business outcomes, not just surface aesthetics.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
