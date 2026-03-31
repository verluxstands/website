"use client"

import { useState } from "react";
import { Search } from "lucide-react"
import Link from "next/link"
import Events from "@/components/trade-show/events"
import CTASection from "@/components/common/quick-actions"
import ContactSection from '@/components/home/contact-section';
import { TradeShow } from "@/lib/static-trade-shows";


interface ClientEventsProps {
    events: TradeShow[]
}

export default function ClientEvents({ events }: ClientEventsProps) {
    const [seachQuery, setSearchQuery] = useState("")

    function formatDateRange(start: string, end: string) {
        const startDate = new Date(start);
        const endDate = new Date(end);

        const options: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "numeric",
        };

        const startFormatted = startDate.toLocaleDateString("en-US", options);
        const endFormatted = endDate.toLocaleDateString("en-US", {
            ...options,
            year: "numeric",
        });

        return `${startFormatted} – ${endFormatted}`;
    }

    function getDate(date: string) {
        const dateObj = new Date(date);

        // Get day (numeric) and month (short name)
        const formattedDate = dateObj.toLocaleString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: "numeric"
        });
        console.log("new date  ", formattedDate)
        return formattedDate.split(" ")

    }

    return (

        <div className="my-10">

            <div>
                <Events events={events} />
            </div>

            <CTASection />
            <ContactSection />
        </div>

    )
}
