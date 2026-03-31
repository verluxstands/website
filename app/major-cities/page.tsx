import { Metadata } from "next"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import TopHeader from '@/components/common/top-header';
import PageHeader from "@/components/common/page-header"
import { DynamicSchema } from "@/components/admin/seo/schema"
import { getSEO, generateMetadataFromSEO } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { indiaCities, internationalMarkets } from "@/lib/site-content"

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEO("major-cities")
  return generateMetadataFromSEO(seo)
}

const cities = [
  {
    city: "Delhi/NCR",
    country: "India",
    venues: ["India Expo Centre", "Pragati Maidan", "Yashobhoomi"],
    projects: 120,
    description: "A core market for Verlux Stands with strong access to major industrial and trade events.",
  },
  {
    city: "Mumbai",
    country: "India",
    venues: ["Bombay Exhibition Centre", "Jio World Convention Centre", "NESCO"],
    projects: 90,
    description: "A strong commercial hub for high-value exhibitions, product launches, and business networking.",
  },
  {
    city: "Bengaluru",
    country: "India",
    venues: ["BIEC", "KTPO", "Palace Grounds"],
    projects: 70,
    description: "A key destination for technology, manufacturing, and innovation-focused exhibitions.",
  },
  {
    city: "Kolkata",
    country: "India",
    venues: ["Biswa Bangla Mela Prangan", "Milan Mela", "Science City"],
    projects: 45,
    description: "An important eastern India market with steady opportunities in trade and industrial fairs.",
  },
  {
    city: "Chennai",
    country: "India",
    venues: ["Chennai Trade Centre", "CICC", "Regional Expo Venues"],
    projects: 50,
    description: "A strong destination for engineering, automotive, and manufacturing exhibitions.",
  },
  {
    city: "Hyderabad",
    country: "India",
    venues: ["HITEX", "HICC", "N Convention"],
    projects: 55,
    description: "A growing market where business events reward well-organized, high-clarity stand design.",
  },
  {
    city: "Ahmedabad",
    country: "India",
    venues: ["Helipad Exhibition Centre", "Convention Centres", "Regional Expo Venues"],
    projects: 40,
    description: "A strong industrial city for exhibitors targeting western India and manufacturing sectors.",
  },
  {
    city: "Dubai",
    country: "UAE",
    venues: ["Dubai World Trade Centre", "DWTC", "Expo City Dubai"],
    projects: 60,
    description: "An international gateway market where luxury presentation and efficient execution matter.",
  },
  {
    city: "Frankfurt",
    country: "Germany",
    venues: ["Messe Frankfurt", "Congress Center", "Festhalle"],
    projects: 65,
    description: "One of Europe’s most important exhibition markets for industrial, automotive, and B2B events.",
  },
  {
    city: "Paris",
    country: "France",
    venues: ["Paris Expo", "Paris Nord Villepinte", "Le Bourget"],
    projects: 48,
    description: "A premium market where visual quality, flow, and brand presentation drive stronger booth impact.",
  },
]

const regions = [
  { name: "Indian Cities", countries: indiaCities.join(", ") },
  { name: "International Markets", countries: internationalMarkets.join(", ") },
  { name: "Projects", countries: "120+ exhibition projects delivered" },
  { name: "Coverage", countries: "India, Dubai, Germany, France, Italy" },
]

export default async function MajorCitiesPage() {
  const seo = await getSEO("major-cities")

  return (
    <main className="min-h-screen bg-background">
      <DynamicSchema seo={seo} />
      <TopHeader />
      <Header />
      <PageHeader
        subtitle="Global Presence"
        title="Major Exhibiting Cities"
        backgroundImage="/legacy/booths/IMG-20250917-WA0019.webp"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {regions.map((region, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{region.name}</h3>
                <p className="text-sm text-muted-foreground">{region.countries}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cities.map((location, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold">{location.city}</h3>
                      <p className="text-muted-foreground">{location.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-2xl font-bold text-primary">{location.projects}+</p>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{location.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-2">Key Venues:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.venues.map((venue, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full"
                        >
                          {venue}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-border hover:bg-secondary hover:text-foreground bg-transparent">
                      Enquire for {location.city}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
