'use client';

import Image from 'next/image';
import { useState } from 'react';
import { internationalMarkets } from '@/lib/site-content';

export default function GlobalPresenceRedesigned() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const locations = [
    { id: 1, country: 'INDIA', image: '/legacy/booths/IMG-20250917-WA0002.webp' },
    { id: 2, country: 'DUBAI', image: '/legacy/booths/IMG-20250917-WA0006.webp' },
    { id: 3, country: 'ITALY', image: '/legacy/booths/IMG-20250917-WA0009.webp' },
    { id: 4, country: 'GERMANY', image: '/legacy/booths/IMG-20250917-WA0013.webp' },
    { id: 5, country: 'FRANCE', image: '/legacy/booths/IMG-20250917-WA0015.webp' },
  ];

  return (
    <section id="global" className=" py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          MAJOR EXHIBITION MARKETS WE SERVE
        </h2>

        <p className="mx-auto mb-12 max-w-4xl text-center text-sm leading-relaxed text-foreground sm:mb-16 sm:text-base">
          Verlux Stands supports exhibitors in India, Dubai, Germany, France, and Italy with stand design, booth production, logistics coordination, and on-site execution. Our focus is to keep your exhibition experience clear, reliable, and result-driven across every market.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group relative max-h-40 cursor-pointer overflow-hidden rounded-2xl shadow-4xl sm:h-56"
              onMouseEnter={() => setHoveredCard(location.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full w-full">
                <Image
                  src={location.image}
                  alt={location.country}
                  fill
                  className={`object-cover transition-all duration-500 ${hoveredCard === location.id ? 'scale-100' : 'scale-110'}`}
                  priority={location.id <= 3}
                />
                <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="px-4 text-center text-2xl font-bold text-white sm:text-3xl">
                  {location.country}
                </h3>
              </div>

              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredCard === location.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-30 w-52 border-1 border-white"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A02D38]/10">
              <svg className="h-6 w-6 text-[#A02D38]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <h4 className="mb-2 font-bold text-primary">7 Major Indian Cities</h4>
            <p className="text-sm text-muted-foreground">Coverage across Delhi/NCR, Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad, and Ahmedabad.</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A02D38]/10">
              <svg className="h-6 w-6 text-[#A02D38]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h4 className="mb-2 font-bold text-primary">5 International Markets</h4>
            <p className="text-sm text-muted-foreground">Direct trade show support for exhibitors entering or growing in key overseas markets.</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A02D38]/10">
              <svg className="h-6 w-6 text-[#A02D38]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
            </div>
            <h4 className="mb-2 font-bold text-primary">120+ Projects Delivered</h4>
            <p className="text-sm text-muted-foreground">A portfolio shaped by practical booth planning, fabrication quality, and reliable execution.</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Active markets: {internationalMarkets.join(', ')}.
        </p>
      </div>
    </section>
  );
}
