export const brochurePath = "/Verlux_Stands_brochure.pdf"

export const contactInfo = {
  email: "marketing@verluxstands.com",
  phones: ["+91 8920253275","+91 7303531447", ],
  whatsappPhone: "+91 8920253275",
  addressLines: [
    "No. 1, Manikam Market, Unchi Dankaur",
    "Greater Noida, Gautam Buddha Nagar",
    "Uttar Pradesh - 201110",
  ],
}

export const legacyTestimonials = [
  {
    quote:
      "We were impressed with the creativity and attention to detail. The booth design perfectly reflected our brand and attracted a lot of visitors at the event.",
    author: "Marketing Manager",
    company: "Mangalam Ornaments",
    image: "/legacy/brands/IMG-20250928-WA0003.jpg",
    rating: 5,
  },
  {
    quote:
      "The team delivered exactly what we wanted - modern, functional, and eye-catching. Our booth stood out among competitors and brought us great leads.",
    author: "Director",
    company: "Forever Forest",
    image: "/legacy/brands/IMG-20250928-WA0002.jpg",
    rating: 5,
  },
  {
    quote:
      "From design to execution, everything was smooth and professional. The booth was not only beautiful but also practical for our team's needs.",
    author: "CEO",
    company: "DD Jewellers",
    image: "/legacy/brands/IMG-20250928-WA0007.jpg",
    rating: 5,
  },
  {
    quote:
      "Excellent service and great communication throughout the project. They understood our vision and brought it to life beyond expectations.",
    author: "Event Coordinator",
    company: "The Indian Essence",
    image: "/legacy/brands/IMG-20250928-WA0004.jpg",
    rating: 5,
  },
  {
    quote:
      "We received so many compliments on our booth! It truly made an impact and gave us the professional presence we were aiming for.",
    author: "Sales Head",
    company: "DYNA",
    image: "/legacy/brands/dyna.png",
    rating: 5,
  },
]

const portfolioImageNames = [
  "IMG-20250917-WA0001.webp",
  "IMG-20250917-WA0002.webp",
  "IMG-20250917-WA0003.webp",
  "IMG-20250917-WA0004.webp",
  "IMG-20250917-WA0005.webp",
  "IMG-20250917-WA0006.webp",
  "IMG-20250917-WA0007.webp",
  "IMG-20250917-WA0008.webp",
  "IMG-20250917-WA0009.webp",
  "IMG-20250917-WA0010.webp",
  "IMG-20250917-WA0011.webp",
  "IMG-20250917-WA0012.webp",
  "IMG-20250917-WA0013.webp",
  "IMG-20250917-WA0014.webp",
  "IMG-20250917-WA0015.webp",
  "IMG-20250917-WA0016.webp",
  "IMG-20250917-WA0017.webp",
  "IMG-20250917-WA0018.webp",
  "IMG-20250917-WA0019.webp",
  "IMG-20250917-WA0020.webp",
  "IMG-20250917-WA0021.webp",
  "IMG-20250917-WA0022.webp",
  "IMG-20250917-WA0023.webp",
  "IMG-20250917-WA0024.webp",
  "IMG-20250917-WA0027.webp",
]

export const legacyPortfolioProjects = portfolioImageNames.map((fileName, index) => ({
  title: `Exhibition Booth ${String(index + 1).padStart(2, "0")}`,
  category: "Custom Exhibition Stand",
  image: `/legacy/booths/${fileName}`,
  client: "Verlux Stands Portfolio",
  location: "India & Europe",
  size: "Custom Build",
}))

export const indiaCities = [
  "Delhi/NCR",
  "Mumbai",
  "Bengaluru",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
]

export const internationalMarkets = ["India", "Dubai", "Germany", "France", "Italy"]
