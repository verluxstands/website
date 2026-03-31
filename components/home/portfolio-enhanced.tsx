'use client';

import { useState } from 'react';
import Image from 'next/image';
import { legacyPortfolioProjects } from '@/lib/site-content';

export default function PortfolioEnhanced() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const portfolioItems = legacyPortfolioProjects.slice(0, 8);

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center sm:mb-20">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            OUR PORTFOLIO
          </h2>
         
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.image}
              className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl sm:h-72"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 blur-sm' : 'scale-100 blur-0'
                }`}
              />

              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-40' : 'opacity-20'
                }`}
              />

              <div className="absolute inset-0 flex items-end justify-start p-6">
                <h3 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
              </div>

              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm animate-fade-in-scale">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
