import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { brochurePath, contactInfo } from "@/lib/site-content"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-start justify-center flex-col gap-0 mb-4">
               
              <span className="text-base font-bold">Verlux Stands</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted exhibition stand builder, offering creative and customized exhibiting solutions across India and Europe.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  {contactInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-secondary transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-secondary transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <div>
                  {contactInfo.addressLines.map((line) => (
                    <p key={line} className="text-sm">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-2xl">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-secondary transition-colors">Custom Exhibition Stand</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Double Decker Stands</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Outdoor Exhibition Stands</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Country Pavilion Stands</Link></li>
              <li><a href={brochurePath} className="hover:text-secondary transition-colors">Download Brochure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="/rental-vs-buying" className="hover:text-secondary transition-colors">Custom Exhibits</Link></li>
              <li><Link href="/trade-shows" className="hover:text-secondary transition-colors">Trade Shows Calendar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/major-cities" className="hover:text-secondary transition-colors">Delhi/NCR</Link></li>
              <li><Link href="/major-cities" className="hover:text-secondary transition-colors">Mumbai</Link></li>
              <li><Link href="/major-cities" className="hover:text-secondary transition-colors">Dubai</Link></li>
              <li><Link href="/major-cities" className="hover:text-secondary transition-colors">Germany</Link></li>
              <li><Link href="/major-cities" className="hover:text-secondary transition-colors">France</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 sm:pt-10">
          <p className="text-center text-sm text-primary-foreground/70">
            Copyright © {currentYear} Verlux Stands Private Limited | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
