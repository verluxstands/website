"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { legacyTestimonials } from "@/lib/site-content";

export default function Testimonials() {
  const testimonials = legacyTestimonials.map((item) => ({
    content: item.quote,
    author: item.author,
    role: item.company,
    rating: item.rating,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Feedback from exhibitors who trusted Verlux Stands for their booth design and delivery.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full disabled:opacity-40 z-10"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === testimonials.length - 1}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full disabled:opacity-40 z-10"
          >
            <ChevronRight />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 flex-shrink-0 p-4">
                  <div className="bg-card rounded-lg border border-border p-6 sm:p-8 hover:shadow-lg hover:border-accent transition-all duration-300 h-full">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    <div className="pt-6 border-t border-border">
                      <p className="font-bold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
