"use server"

import { adminDB } from "@/lib/firebase-admin"
import { SEOPageData, PageConfig } from "@/lib/types/seo"
import { revalidatePath, revalidateTag } from "next/cache"

// SEO Page Actions
export async function createSEOPage(data: SEOPageData) {
  try {
    const slug = data.slug.replace(/^\//, "")
    
    await adminDB!.ref(`seo_pages/${slug}`).set({
      ...data,
      slug,
      createdAt: Date.now(),
      lastUpdated: Date.now(),
    })

    revalidatePath(`/${slug}`)
    revalidateTag("seo-pages", "max")
    
    return { success: true, id: slug }
  } catch (error) {
    console.error("Error creating SEO page:", error)
    return { success: false, error: "Failed to create SEO page" }
  }
}

export async function updateSEOPage(slug: string, data: Partial<SEOPageData>) {
  try {
    const normalizedSlug = slug.replace(/^\//, "")
    
    await adminDB!.ref(`seo_pages/${normalizedSlug}`).update({
      ...data,
      lastUpdated: Date.now(),
    })

    revalidatePath(`/${normalizedSlug}`)
    revalidateTag("seo-pages", "max")
    
    return { success: true }
  } catch (error) {
    console.error("Error updating SEO page:", error)
    return { success: false, error: "Failed to update SEO page" }
  }
}

export async function deleteSEOPage(slug: string) {
  try {
    const normalizedSlug = slug.replace(/^\//, "")
    await adminDB!.ref(`seo_pages/${normalizedSlug}`).remove()

    revalidatePath(`/${normalizedSlug}`)
    revalidateTag("seo-pages", "max")
    
    return { success: true }
  } catch (error) {
    console.error("Error deleting SEO page:", error)
    return { success: false, error: "Failed to delete SEO page" }
  }
}

export async function getSEOPageBySlug(slug: string): Promise<SEOPageData | null> {
  try {
    const normalizedSlug = slug.replace(/^\//, "") || "home"
    const snap = await adminDB!.ref(`seo_pages/${normalizedSlug}`).get()
    
    if (snap.exists()) {
      return { ...(snap.val() as SEOPageData), id: normalizedSlug }
    }
    return null
  } catch (error) {
    console.error("Error fetching SEO page:", error)
    return null
  }
}

export async function getAllSEOPagesAction(): Promise<SEOPageData[]> {
  try {
    const snap = await adminDB!.ref("seo_pages").get()
    if (snap.exists()) {
      const data = snap.val() as Record<string, SEOPageData>
      return Object.entries(data).map(([id, pageData]) => ({
        ...pageData,
        id,
      }))
    }
    return []
  } catch (error) {
    console.error("Error fetching all SEO pages:", error)
    return []
  }
}

// Page Config Actions (for Page Builder)
export async function createPageConfig(data: PageConfig) {
  try {
    const slug = data.slug.replace(/^\//, "")
    
    await adminDB!.ref(`page_builder/${slug}`).set({
      ...data,
      slug,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })

    revalidatePath(`/${slug}`)
    
    return { success: true, id: slug }
  } catch (error) {
    console.error("Error creating page config:", error)
    return { success: false, error: "Failed to create page config" }
  }
}

export async function updatePageConfig(slug: string, data: Partial<PageConfig>) {
  try {
    const normalizedSlug = slug.replace(/^\//, "")
    
    await adminDB!.ref(`page_builder/${normalizedSlug}`).update({
      ...data,
      updatedAt: Date.now(),
    })

    revalidatePath(`/${normalizedSlug}`)
    
    return { success: true }
  } catch (error) {
    console.error("Error updating page config:", error)
    return { success: false, error: "Failed to update page config" }
  }
}

export async function deletePageConfig(slug: string) {
  try {
    const normalizedSlug = slug.replace(/^\//, "")
    await adminDB!.ref(`page_builder/${normalizedSlug}`).remove()

    revalidatePath(`/${normalizedSlug}`)
    
    return { success: true }
  } catch (error) {
    console.error("Error deleting page config:", error)
    return { success: false, error: "Failed to delete page config" }
  }
}

export async function getPageConfigBySlug(slug: string): Promise<PageConfig | null> {
  try {
    const normalizedSlug = slug.replace(/^\//, "") || "home"
    const snap = await adminDB!.ref(`page_builder/${normalizedSlug}`).get()
    
    if (snap.exists()) {
      return { ...(snap.val() as PageConfig), id: normalizedSlug }
    }
    return null
  } catch (error) {
    console.error("Error fetching page config:", error)
    return null
  }
}

export async function getAllPageConfigs(): Promise<PageConfig[]> {
  try {
    const snap = await adminDB!.ref("page_builder").get()
    if (snap.exists()) {
      const data = snap.val() as Record<string, PageConfig>
      return Object.entries(data).map(([id, configData]) => ({
        ...configData,
        id,
      }))
    }
    return []
  } catch (error) {
    console.error("Error fetching all page configs:", error)
    return []
  }
}

// Seed initial SEO data for existing pages
export async function seedInitialSEOData() {
  const pages = [
    {
      slug: "home",
      title: "Verlux Stands | Premium Exhibition Stand Design & Build Company",
      description: "Trusted exhibition stand design and build company for India and Europe. Custom trade show booths, modular displays, and practical turnkey exhibition solutions.",
      keywords: ["exhibition stands", "trade show booths", "exhibition stand design", "custom exhibition stands"],
      canonical: "https://verluxstands-web.vercel.app",
      ogTitle: "Verlux Stands | Premium Exhibition Stand Design & Build Company",
      ogDescription: "Award-winning exhibition stand design company creating custom trade show booths and bespoke exhibition solutions worldwide.",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "Verlux Stands | Premium Exhibition Stand Design & Build",
      twitterDescription: "Award-winning exhibition stand design company.",
      index: true,
      follow: true,
      schemaType: "LocalBusiness" as const,
      schemaData: {},
    },
    {
      slug: "services",
      title: "Exhibition Stand Services | Design, Build & Installation",
      description: "Complete exhibition stand services: concept development, 3D design, custom fabrication, logistics & installation. End-to-end trade show booth solutions for businesses worldwide.",
      keywords: ["exhibition stand services", "trade show booth design", "stand fabrication", "exhibition installation"],
      canonical: "https://verluxstands-web.vercel.app/services",
      ogTitle: "Exhibition Stand Services | Verlux Stands",
      ogDescription: "Complete exhibition stand services from concept to installation.",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "Exhibition Stand Services | Verlux Stands",
      twitterDescription: "Complete exhibition stand services from concept to installation.",
      index: true,
      follow: true,
      schemaType: "Service" as const,
      schemaData: {},
    },
    {
      slug: "portfolio",
      title: "Exhibition Stand Portfolio | Award-Winning Projects & Case Studies",
      description: "Browse recent Verlux Stands projects delivered for exhibitors across India and international trade show markets.",
      keywords: ["exhibition stand portfolio", "trade show booth examples", "exhibition design case studies"],
      canonical: "https://verluxstands-web.vercel.app/portfolio",
      ogTitle: "Exhibition Stand Portfolio | Verlux Stands",
      ogDescription: "Browse 500+ award-winning exhibition stand projects from around the world.",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "Exhibition Stand Portfolio | Verlux Stands",
      twitterDescription: "Browse 500+ award-winning exhibition stand projects.",
      index: true,
      follow: true,
      schemaType: "Organization" as const,
      schemaData: {},
    },
    {
      slug: "about",
      title: "About Verlux Stands | Exhibition Stand Builder in India and Europe",
      description: "Verlux Stands supports exhibitors with custom and modular booth solutions across India and key international markets.",
      keywords: ["about Verlux Stands", "exhibition stand company", "trade show booth builder"],
      canonical: "https://verluxstands-web.vercel.app/about",
      ogTitle: "About Verlux Stands | 15+ Years of Exhibition Excellence",
      ogDescription: "Trusted exhibition stand company for India and Europe.",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "About Verlux Stands",
      twitterDescription: "Trusted exhibition stand company for India and Europe.",
      index: true,
      follow: true,
      schemaType: "Organization" as const,
      schemaData: {},
    },
    {
      slug: "contact",
      title: "Contact Verlux Stands | Get a Free Exhibition Stand Quote",
      description: "Contact our exhibition stand experts for a free consultation. Get quotes for custom trade show booths, modular displays & bespoke exhibition solutions. Response within 24 hours.",
      keywords: ["contact Verlux Stands", "exhibition stand quote", "trade show booth inquiry"],
      canonical: "https://verluxstands-web.vercel.app/contact",
      ogTitle: "Contact Verlux Stands | Get a Free Quote",
      ogDescription: "Contact our exhibition stand experts for a free consultation.",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "Contact Verlux Stands",
      twitterDescription: "Contact our exhibition stand experts for a free consultation.",
      index: true,
      follow: true,
      schemaType: "LocalBusiness" as const,
      schemaData: {},
    },
    {
      slug: "testimonials",
      title: "Client Testimonials & Reviews | Exhibition Stand Success Stories",
      description: "Read feedback from exhibitors and brands that worked with Verlux Stands on booth design and trade show execution.",
      keywords: ["exhibition stand reviews", "trade show booth testimonials", "Verlux Stands reviews"],
      canonical: "https://verluxstands-web.vercel.app/testimonials",
      ogTitle: "Client Testimonials | Verlux Stands",
      ogDescription: "Read verified reviews from leading brands. 98% client satisfaction.",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "Client Testimonials | Verlux Stands",
      twitterDescription: "Read verified reviews from leading brands.",
      index: true,
      follow: true,
      schemaType: "Organization" as const,
      schemaData: {},
    },
    {
      slug: "trade-shows",
      title: "Trade Show Calendar 2025 | Upcoming Industry Events",
      description: "Plan your exhibition presence with upcoming 2025 industry events including Tube & Pipe Fair, Cable & Wire Fair, Drinktec India, and more.",
      keywords: ["trade show calendar 2025", "exhibition calendar", "upcoming trade shows"],
      canonical: "https://verluxstands-web.vercel.app/trade-shows",
      ogTitle: "Trade Show Calendar 2025 | Verlux Stands",
      ogDescription: "Explore upcoming industry trade shows and exhibitions.",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "Trade Show Calendar 2025",
      twitterDescription: "Explore upcoming industry trade shows and exhibitions.",
      index: true,
      follow: true,
      schemaType: "Organization" as const,
      schemaData: {},
    },
    {
      slug: "rental-vs-buying",
      title: "Exhibition Stand Rental vs Buying | Complete Comparison Guide",
      description: "Should you rent or buy an exhibition stand? Compare costs, benefits & ROI. Expert advice from Verlux Stands.",
      keywords: ["exhibition stand rental", "buy vs rent trade show booth", "exhibition stand hire"],
      canonical: "https://verluxstands-web.vercel.app/rental-vs-buying",
      ogTitle: "Exhibition Stand Rental vs Buying | Verlux Stands",
      ogDescription: "Complete comparison guide: Should you rent or buy an exhibition stand?",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "Rental vs Buying | Verlux Stands",
      twitterDescription: "Complete comparison guide for exhibition stands.",
      index: true,
      follow: true,
      schemaType: "FAQPage" as const,
      schemaData: {
        faqs: [
          { question: "Should I rent or buy an exhibition stand?", answer: "It depends on how often you exhibit. Rental is ideal for 1-3 events per year." },
          { question: "How much does exhibition stand rental cost?", answer: "Rental costs vary based on size and complexity, starting around $5,000-10,000 per event." },
        ],
      },
    },
    {
      slug: "major-cities",
      title: "Exhibition Stand Services by Location | India, Dubai, Germany, France and Italy",
      description: "Verlux Stands delivers exhibition solutions across major Indian cities and key international markets with practical local support.",
      keywords: ["exhibition stands India", "trade show booths Dubai", "exhibition builders Germany"],
      canonical: "https://verluxstands-web.vercel.app/major-cities",
      ogTitle: "Exhibition Stand Services Worldwide | Verlux Stands",
      ogDescription: "Exhibition stand design and build across India and key international markets.",
      ogImage: "/images/hero-stand.jpg",
      twitterTitle: "Global Locations | Verlux Stands",
      twitterDescription: "Exhibition stand services across India and key international markets.",
      index: true,
      follow: true,
      schemaType: "Organization" as const,
      schemaData: {},
    },
  ]

  try {
    for (const page of pages) {
      await adminDB!.ref(`seo_pages/${page.slug}`).set({
        ...page,
        createdAt: Date.now(),
        lastUpdated: Date.now(),
      })
    }

    return { success: true, message: `Seeded ${pages.length} pages` }
  } catch (error) {
    console.error("Error seeding SEO data:", error)
    return { success: false, error: "Failed to seed SEO data" }
  }
}
