import { Metadata } from "next"


import { getSEO, generateMetadataFromSEO } from "@/lib/seo"
import { DynamicSchema } from "@/components/admin/seo/schema"
import { OrganizationSchema, LocalBusinessSchema, FAQSchema } from "@/components/structured-data"


import TopHeader from '@/components/common/top-header';
import Header from '@/components/common/header';
import HeroAnimated from '@/components/common/hero-animated';
import About from '@/components/home/about';
import Services from '@/components/home/services';
import Process from '@/components/home/process';
import PortfolioEnhanced from '@/components/home/portfolio-enhanced';
import Testimonials from '@/components/home/testimonials';
import GlobalPresenceRedesigned from '@/components/home/global-presence-redesigned';
import GeomapNetwork from '@/components/home/geomap-network';
import ContactSection from '@/components/home/contact-section';
import Footer from '@/components/common/footer';
import CTASection from '@/components/common/quick-actions';
import ServicePartners from '@/components/common/service-partners';
import { contactInfo } from '@/lib/site-content';

// import { SidebarToggleProvider } from "@/lib/sidebar-toggle"

// Generate metadata from CMS
export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEO("home")
  return generateMetadataFromSEO(seo)
}

const homeFaqs = [
  {
    question: "How much does an exhibition stand cost?",
    answer: "Stand cost depends on booth size, design complexity, material selection, venue rules, and the services included. Verlux Stands prepares project-specific proposals based on your event, objectives, and build requirements."
  },
  {
    question: "How long does it take to design and build an exhibition stand?",
    answer: "Lead time depends on the event schedule and booth scope. For a smooth process, exhibitors should ideally begin planning several weeks in advance so design, production, approvals, and logistics can be handled properly."
  },
  {
    question: "Do you offer exhibition stand rental?",
    answer: "Yes. We support both modular and custom exhibition requirements, including rental-led solutions and fully custom builds, depending on the show, frequency of participation, and branding needs."
  },
  {
    question: "What locations do you serve?",
    answer: "We actively support exhibitors across major Indian cities and international markets including Dubai, Germany, France, and Italy."
  }
]

export default async function Home() {
  const seo = await getSEO("home")

  return (
    <>
      <DynamicSchema seo={seo} />
      {/* <OrganizationSchema /> */}
      {/* <LocalBusinessSchema /> */}
      <FAQSchema faqs={homeFaqs} />
      <main>
        <TopHeader />
        <Header />
        <HeroAnimated />
        <About />
        <Services />
        <GlobalPresenceRedesigned />
        <CTASection />
        <Process />
        <PortfolioEnhanced />

        <Testimonials />
        {/* <GeomapNetwork /> */}
        {/* <ServicePartners /> */}
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
