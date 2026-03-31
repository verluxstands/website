'use client';

import { Phone, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePopup } from "@/context/popup-context"
import { contactInfo } from "@/lib/site-content"

export default function TopHeader() {
  const { openBrochurePopup, openQuotePopup } = usePopup()

  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-8lxl mx-auto px-4 sm:px-3 lg:px-10">
        <div className="flex items-center justify-between h-15">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-bold text-foreground">Verlux Stands</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-lg font-medium">{contactInfo.phones[0]}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-lg font-medium">{contactInfo.email}</span>
            </div>
          </div>

          <div className="items-center hidden sm:flex gap-3">
            <Button
              variant="outline"
              onClick={openQuotePopup}
              className="border-primary text-primay hover:bg-primary hover:text-primary-foreground"
            >
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              onClick={openBrochurePopup}
              className="border-primary hover:bg-primary/90 text-primary"
            >
              Download Brochure
            </Button>
          </div>
          <Button
            onClick={openBrochurePopup}
            variant="outline" size="sm" className="px-1 h-8 md:hidden sm:hidden lg:hidden flex border-primary text-primary">
            Brochure <Download size={12} />
          </Button>
        </div>
      </div>
    </div >
  );
}
