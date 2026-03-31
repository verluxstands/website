'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award } from "lucide-react"
import { usePopup } from "@/context/popup-context"

 

const heroTexts = [
  {
    titlePart1: 'WORLD-CLASS EXHIBITION',
    titlePart2: 'STAND BUILDERS &',
    titlePart3: 'BOOTH DESIGNERS',
    subtitle: 'Welcome to Verlux Stands, your trusted global exhibition stand builder, offering complete and innovative exhibiting solutions with excellence.',
  },
  {
    titlePart1: 'CREATIVE DESIGN &',
    titlePart2: 'EXPERT',
    titlePart3: 'EXECUTION',
    subtitle: 'We craft exceptional exhibition stands that amplify your brand presence and captivate audiences through innovative design and precision.',
  },
  {
    titlePart1: 'WORLDWIDE NETWORK,',
    titlePart2: 'LOCAL',
    titlePart3: 'EXCELLENCE',
    subtitle: 'Serving clients globally with cutting-edge designs and dedicated on-site support for all your exhibition needs.',
  },
  {
    titlePart1: 'VISION TO REALITY',
    titlePart2: 'IN EVERY',
    titlePart3: 'PROJECT',
    subtitle: 'Your exhibition dreams come true through our comprehensive design, manufacturing, and professional installation services.',
  },
];

const benefits = [
  { icon: '✓', title: 'Free Design', description: 'Custom designs tailored to your brand' },
  { icon: '✓', title: 'Free Estimate', description: 'Transparent pricing, no surprises' },
  { icon: '✓', title: 'No Hidden Costs', description: 'Honest and fair pricing always' },
  { icon: '✓', title: 'Best Price', description: 'Competitive rates without compromise' },
  { icon: '✓', title: 'Idea Fulfillment', description: 'Your vision becomes reality' },
  { icon: '✓', title: '24/7 Standby', description: 'Always ready to support you' },
];

export default function HeroAnimated() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedTitlePart3, setDisplayedTitlePart3] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { openQuotePopup } = usePopup()


  // Text rotation
  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
      setIsTyping(true);
      setDisplayedTitlePart3('');
    }, 10000);
    return () => clearInterval(textTimer);
  }, []);

  // Typing animation for the last word only
  useEffect(() => {
    const currentText = heroTexts[currentTextIndex];
    let titleIndex = 0;

    const titleTimer = setInterval(() => {
      if (titleIndex <= currentText.titlePart3.length) {
        setDisplayedTitlePart3(currentText.titlePart3.substring(0, titleIndex));
        titleIndex++;
      } else {
        clearInterval(titleTimer);
        setIsTyping(false);
      }
    }, 80);

    return () => clearInterval(titleTimer);
  }, [currentTextIndex]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 opacity-100`}
        >
          <Image
            src={'/images/hero-exhibition.jpg'}
            alt={`Exhibition stand`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Premium Dark Overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-red-500" /> */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/75 to-black/5" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        {/* Main Heading - Static title with animated last word */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight text-balance tracking-wide">
          <div>{heroTexts[currentTextIndex].titlePart1}</div>
          <div>{heroTexts[currentTextIndex].titlePart2}</div>
          <div className="text-[#C4A066]">
            {displayedTitlePart3}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        </h1>

        {/* Subtitle - Static text */}
        <p className="text-base sm:text-lg lg:text-xl text-white/85 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
          {heroTexts[currentTextIndex].subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
          <Button
            onClick={openQuotePopup}
            className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#C4A066] bg-transparent text-[#C4A066] hover:bg-[#C4A066] hover:text-[#111111] font-sans font-bold text-base sm:text-lg rounded-md transition-all duration-300"
          >
            Get Free Quote
          </Button>
          <Link
            href="/portfolio"
            className="px-8 sm:px-10 py-1 border-2 border-[#E5D5B8] bg-transparent text-[#E5D5B8] hover:bg-[#E5D5B8] hover:text-[#111111] font-sans font-bold text-base sm:text-lg rounded-md transition-all duration-300"
          >
            View Portfolio
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-2 md:px-4 text-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 text-white/80 text-xs sm:text-sm font-sans hover:text-white transition-colors ${index < benefits.length - 1 ? 'border-r border-white/30 pr-3 md:pr-4' : ''
                }`}
            >
              <Award size={16} className="text-[#C4A066] flex-shrink-0" />
              <span className="font-medium">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>

       s

    </section>
  );
}
