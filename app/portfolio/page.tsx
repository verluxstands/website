import { Metadata } from "next"
import TopHeader from "@/components/common/top-header"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import PageHeader from "@/components/common/page-header"
import { DynamicSchema } from "@/components/admin/seo/schema"
import { getSEO, generateMetadataFromSEO } from "@/lib/seo"
import PortfolioGrid from "@/components/portfolio-grid"
import ContactSection from "@/components/home/contact-section"
import { legacyPortfolioProjects } from "@/lib/site-content"

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEO("portfolio")
  return generateMetadataFromSEO(seo)
}

const projects = legacyPortfolioProjects

export default async function PortfolioPage() {
  const seo = await getSEO("portfolio")

  return (
    <main className="min-h-screen bg-background">
      <DynamicSchema seo={seo} />
      <TopHeader />
      <Header />
      <PageHeader
        subtitle="Our Work"
        title="Stories of Success"
        backgroundImage="/legacy/booths/IMG-20250917-WA0002.webp"
      />

      <section className="py-14 md:py-10">
        <div className="container mx-auto px-6">
          <PortfolioGrid projects={projects} />
        </div>
      <ContactSection />
      </section>

      <Footer />
    </main>
  )
}
