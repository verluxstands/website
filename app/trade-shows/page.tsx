import { Metadata } from "next"
import TopHeader from "@/components/common/top-header"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import PageHeader from "@/components/common/page-header"
import { DynamicSchema } from "@/components/admin/seo/schema"
import { getSEO, generateMetadataFromSEO } from "@/lib/seo"
import ClientEvents from "@/components/trade-show/events-calender"
import { getTradeShows } from "@/lib/static-trade-shows"

// Generate metadata from CMS
export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEO("trade-shows")
  return generateMetadataFromSEO(seo)
}


export default async function TradeShowCalendarPage() {
  const seo = await getSEO("trade-shows")
  const events = getTradeShows()


  return (
    <main className="min-h-screen bg-background">
      <DynamicSchema seo={seo} />
      <TopHeader />
      <Header />
      <PageHeader
        subtitle="Upcoming Events"
        title="Trade Show Calendar 2026"
        backgroundImage={"/legacy/booths/IMG-20250917-WA0002.webp"}

      />

      <section className="py-10">
        <div className="container bg-transparent mx-auto px-6">

          <ClientEvents events={events} />

        </div>
      </section>

      <Footer />
    </main>
  )
}
