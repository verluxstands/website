"use client"
import EventCard from "@/components/trade-show/event-card"
import { TradeShow } from "@/lib/static-trade-shows"

interface EventsProps {
    events: TradeShow[]
}

export default function Events({ events }: EventsProps) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 sm:gap-12 md:gap-8 lg:gap-10 px-10">
            {[...events]
                .sort((a, b) => {
                    const now = new Date().getTime()

                    const aStart = new Date(a.startDate).getTime()
                    const bStart = new Date(b.startDate).getTime()

                    const aEnd = new Date(a.endDate).getTime()
                    const bEnd = new Date(b.endDate).getTime()

                    // 1️⃣ Upcoming events first (closest upcoming first)
                    if (aStart > now && bStart > now) {
                        return aStart - bStart
                    }

                    // 2️⃣ If only one is upcoming
                    if (aStart > now) return -1
                    if (bStart > now) return 1

                    // 3️⃣ Ongoing next
                    const aOngoing = aStart <= now && aEnd >= now
                    const bOngoing = bStart <= now && bEnd >= now

                    if (aOngoing && !bOngoing) return -1
                    if (!aOngoing && bOngoing) return 1

                    // 4️⃣ Completed (latest completed first)
                    return bEnd - aEnd
                })
                .filter((event) => event.status === 'published').map((event, index) => (
                    <EventCard key={event.id + index} data={event} />
                ))}
        </div>
    )
}
