import Image from 'next/image';
import QuoteButton from "@/components/common/quote-button"

export default function About() {
  return (
    <section id="about" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-7 sm:px-10 lg:px-15">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
              Verlux Stands, <span className="text-primary">Your Exhibition Stand Builder in India and Europe</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Verlux Stands is a trusted exhibition stand design and build company delivering luxury, modern, and functional booths for exhibitors across India and key international markets.
              </p>
              <p>
                We handle the full journey from concept and 3D design to fabrication, logistics, installation, and dismantling, so exhibitors can focus on leads, meetings, and brand visibility during the show.
              </p>
              <p>
                Whether you need a modular booth, a custom-built stand, or support for a major trade fair in Delhi, Mumbai, Dubai, Germany, France, or Italy, our team builds displays that are practical, memorable, and aligned with your brand goals.
              </p>
            </div>
            <div className="mt-10 flex w-full flex-wrap justify-around gap-5">
              <QuoteButton name="GET FREE QUOTE" type="button" />
              <QuoteButton name="OUR WORK" type="link" link="/portfolio" />
            </div>
          </div>

          <div className="relative z-2 rounded-3xl lg:block">
            <Image
              src="/legacy/booths/IMG-20250917-WA0008.webp"
              alt="Verlux Stands manufacturing and design facility"
              width={1200}
              height={900}
              className="max-h-100 w-full rounded-4xl object-cover"
              priority
            />
            <div className="background-card absolute inset-0 hidden rounded-4xl md:block lg:block" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-16 sm:mt-20 sm:grid-cols-4 sm:gap-8 sm:pt-20">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-accent sm:text-4xl">98%</div>
            <p className="text-sm text-muted-foreground sm:text-base">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-accent sm:text-4xl">120+</div>
            <p className="text-sm text-muted-foreground sm:text-base">Exhibition Served</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-accent sm:text-4xl">150+</div>
            <p className="text-sm text-muted-foreground sm:text-base">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-accent sm:text-4xl">5+</div>
            <p className="text-sm text-muted-foreground sm:text-base">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
