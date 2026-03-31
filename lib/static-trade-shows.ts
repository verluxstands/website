export interface TradeShowContentBlock {
  id: string
  type: "heading" | "text" | "image" | "video" | "quote" | "stats" | "columns" | "cta" | "divider" | "list"
  [key: string]: unknown
}

export interface TradeShowInfoItem {
  heading: string
  content: string
}

export interface TradeShow {
  id: string
  slug: string
  title: string
  subtitle: string
  image: string
  heroImage: string
  startDate: string
  endDate: string
  location: string
  externalUrl?: string
  status: "published" | "draft"
  exhibitionInfo: TradeShowInfoItem[]
  blocks: TradeShowContentBlock[]
}

export const TRADE_SHOWS: TradeShow[] = [
  {
    id: "tube-pipe-fair-2025",
    slug: "tube-pipe-fair-2025",
    title: "Tube & Pipe Fair 2025",
    subtitle: "A focused industry gathering in New Delhi for tube, pipe, and allied manufacturing sectors.",
    image: "/legacy/events/tube and pipe fair.jpg",
    heroImage: "/legacy/events/tube and pipe fair.jpg",
    startDate: "2025-11-04",
    endDate: "2025-11-06",
    location: "New Delhi, India",
    externalUrl: "https://www.tradeindia.com/tradeshows/129615/tube-pipe-fair-2025.html",
    status: "published",
    exhibitionInfo: [
      { heading: "Exhibition", content: "Tube & Pipe Fair 2025" },
      { heading: "Industry", content: "Tube and Pipe Manufacturing" },
      { heading: "Venue", content: "New Delhi Exhibition Circuit" },
      { heading: "Audience", content: "Industrial buyers and suppliers" },
      { heading: "Date", content: "04 Nov to 06 Nov 2025" },
    ],
    blocks: [
      { id: "tp-h2-1", type: "heading", level: "h2", align: "left", text: "Prepare for Tube & Pipe Fair 2025" },
      { id: "tp-t-1", type: "text", html: "<p>One of the leading upcoming industrial exhibitions in New Delhi, Tube & Pipe Fair 2025 is relevant for suppliers, machinery companies, fabricators, and process specialists.</p><p>Verlux Stands helps exhibitors plan a clean, practical booth that supports meetings, product displays, and clear technical storytelling.</p>" },
      { id: "tp-s-1", type: "stats", items: [{ value: "3", label: "Event Days" }, { value: "B2B", label: "Audience" }, { value: "India", label: "Market" }, { value: "Lead Gen", label: "Goal" }] },
      { id: "tp-c-1", type: "cta", text: "Request your Tube & Pipe Fair stand proposal" },
    ],
  },
  {
    id: "cable-wire-fair-2025",
    slug: "cable-wire-fair-2025",
    title: "Cable & Wire Fair 2025",
    subtitle: "A dedicated platform for cable, wire, connectivity, and manufacturing technologies.",
    image: "/legacy/events/cable and wire.jpg",
    heroImage: "/legacy/events/cable and wire.jpg",
    startDate: "2025-11-04",
    endDate: "2025-11-06",
    location: "New Delhi, India",
    externalUrl: "https://www.tradeindia.com/tradeshows/129006/cable-wire-fair-2025.html",
    status: "published",
    exhibitionInfo: [
      { heading: "Exhibition", content: "Cable & Wire Fair 2025" },
      { heading: "Industry", content: "Cable and Wire Technology" },
      { heading: "Venue", content: "New Delhi Exhibition Circuit" },
      { heading: "Audience", content: "Manufacturers and sourcing teams" },
      { heading: "Date", content: "04 Nov to 06 Nov 2025" },
    ],
    blocks: [
      { id: "cw-h2-1", type: "heading", level: "h2", align: "left", text: "Stand planning for Cable & Wire Fair" },
      { id: "cw-t-1", type: "text", html: "<p>This event is a strong fit for brands that need to explain process, product quality, and technical differentiation clearly. Exhibitors benefit from a stand that balances product samples, graphics, and seated discussions.</p>" },
      { id: "cw-l-1", type: "list", ordered: false, items: ["Prioritize easy-to-read technical messaging.", "Create a front display zone for cable and component samples.", "Keep a small meeting area for distributor and buyer discussions."] },
      { id: "cw-c-1", type: "cta", text: "Talk to Verlux about Cable & Wire Fair 2025" },
    ],
  },
  {
    id: "bharat-metal-expo-2025",
    slug: "bharat-metal-expo-2025",
    title: "Bharat Metal Expo 2025",
    subtitle: "A major business platform for metal, fabrication, and manufacturing ecosystems.",
    image: "/legacy/events/bharat metal.jpg",
    heroImage: "/legacy/events/bharat metal.jpg",
    startDate: "2025-11-04",
    endDate: "2025-11-06",
    location: "New Delhi, India",
    externalUrl: "https://www.tradeindia.com/tradeshows/145745/bharat-metal-expo-2025.html",
    status: "published",
    exhibitionInfo: [
      { heading: "Exhibition", content: "Bharat Metal Expo 2025" },
      { heading: "Industry", content: "Metals and Fabrication" },
      { heading: "Venue", content: "New Delhi Exhibition Circuit" },
      { heading: "Audience", content: "Industrial buyers and manufacturers" },
      { heading: "Date", content: "04 Nov to 06 Nov 2025" },
    ],
    blocks: [
      { id: "bm-h2-1", type: "heading", level: "h2", align: "left", text: "Why Bharat Metal Expo matters" },
      { id: "bm-t-1", type: "text", html: "<p>For heavy industry events, clarity and credibility are essential. Your booth should communicate capability fast, while making room for meaningful procurement and partnership conversations.</p>" },
      { id: "bm-c-1", type: "cta", text: "Start planning for Bharat Metal Expo 2025" },
    ],
  },
  {
    id: "drinktec-india-2025",
    slug: "drinktec-india-2025",
    title: "Drinktec India 2025",
    subtitle: "A specialist exhibition for beverage, liquid food, and packaging technologies.",
    image: "/legacy/events/drinktec.jpg",
    heroImage: "/legacy/events/drinktec.jpg",
    startDate: "2025-11-13",
    endDate: "2025-11-15",
    location: "Mumbai, India",
    externalUrl: "https://www.tradeindia.com/tradeshows/142636/drinktec-india-2025.html",
    status: "published",
    exhibitionInfo: [
      { heading: "Exhibition", content: "Drinktec India 2025" },
      { heading: "Industry", content: "Food and Beverage Processing" },
      { heading: "Venue", content: "Mumbai Exhibition Circuit" },
      { heading: "Audience", content: "Processing, filling, and packaging buyers" },
      { heading: "Date", content: "13 Nov to 15 Nov 2025" },
    ],
    blocks: [
      { id: "di-h2-1", type: "heading", level: "h2", align: "left", text: "Showcase your beverage technology clearly" },
      { id: "di-t-1", type: "text", html: "<p>Drinktec India is ideal for brands that need to combine machinery, technical messaging, and visitor engagement. A well-planned stand can balance hardware display with cleaner branding and lead capture zones.</p>" },
      { id: "di-c-1", type: "cta", text: "Request a Drinktec India booth concept" },
    ],
  },
  {
    id: "non-woven-tech-asia-2025",
    slug: "non-woven-tech-asia-2025",
    title: "Non-woven Tech Asia",
    subtitle: "A focused event for technical textiles, non-wovens, and related manufacturing solutions.",
    image: "/legacy/events/nonwomen tech.jpg",
    heroImage: "/legacy/events/nonwomen tech.jpg",
    startDate: "2025-11-06",
    endDate: "2025-11-08",
    location: "New Delhi, India",
    externalUrl: "https://nonwoventechasia.com/",
    status: "published",
    exhibitionInfo: [
      { heading: "Exhibition", content: "Non-woven Tech Asia" },
      { heading: "Industry", content: "Technical Textiles and Non-wovens" },
      { heading: "Venue", content: "New Delhi Exhibition Circuit" },
      { heading: "Audience", content: "Manufacturers and industrial buyers" },
      { heading: "Date", content: "06 Nov to 08 Nov 2025" },
    ],
    blocks: [
      { id: "nw-h2-1", type: "heading", level: "h2", align: "left", text: "Make a stronger impact at Non-woven Tech Asia" },
      { id: "nw-t-1", type: "text", html: "<p>Technical textile exhibitions need sharp positioning and disciplined messaging. Verlux Stands helps brands translate complex industrial products into exhibition experiences that are easier to understand and easier to remember.</p>" },
      { id: "nw-c-1", type: "cta", text: "Enquire about your Non-woven Tech Asia stand" },
    ],
  },
  {
    id: "cmpl-2025",
    slug: "cmpl-2025",
    title: "CMPL",
    subtitle: "A focused business event in New Delhi for exhibitors targeting industrial and professional buyers.",
    image: "/legacy/events/IMG-20250920-WA0004.jpg",
    heroImage: "/legacy/events/IMG-20250920-WA0004.jpg",
    startDate: "2025-11-20",
    endDate: "2025-11-21",
    location: "New Delhi, India",
    externalUrl: "https://www.cmplexpo.com/",
    status: "published",
    exhibitionInfo: [
      { heading: "Exhibition", content: "CMPL" },
      { heading: "Industry", content: "Industrial Trade" },
      { heading: "Venue", content: "New Delhi Exhibition Circuit" },
      { heading: "Audience", content: "Trade visitors and procurement teams" },
      { heading: "Date", content: "20 Nov to 21 Nov 2025" },
    ],
    blocks: [
      { id: "cm-h2-1", type: "heading", level: "h2", align: "left", text: "Compact event, focused opportunities" },
      { id: "cm-t-1", type: "text", html: "<p>Even shorter-format exhibitions can deliver strong ROI with the right stand strategy. For CMPL, the emphasis should be on crisp product presentation, efficient meetings, and a stand layout that gets to the point quickly.</p>" },
      { id: "cm-c-1", type: "cta", text: "Discuss your CMPL exhibition requirements" },
    ],
  },
]

export function getTradeShows() {
  return TRADE_SHOWS.filter((show) => show.status === "published")
}

export function getTradeShowBySlug(slug: string) {
  return TRADE_SHOWS.find((show) => show.slug === slug)
}
