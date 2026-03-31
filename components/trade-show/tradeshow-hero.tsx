"use client"

import Image from "next/image"
import { CalendarDays, MapPin } from "lucide-react"
import QuoteButton from "@/components/common/quote-button"
import { useCountdown } from "@/components/trade-show/timeleft"
import { TradeShow } from "@/lib/static-trade-shows"

interface TradeShowHeroProps {
    tradeShow: TradeShow
}

export default function TradeShowHero({ tradeShow }: TradeShowHeroProps) {
    const countdown = useCountdown(tradeShow.startDate)

    return (
        <section className="relative min-h-screen py-8 flex items-center justify-center text-white">
            <div className="absolute inset-0">
                <Image
                    src={tradeShow.heroImage}
                    alt={tradeShow.title}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <div className="mx-auto mb-8 w-40 p-2 h-40 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                    {tradeShow.image && (
                        <Image
                            src={tradeShow.image}
                            alt={`${tradeShow.title} logo`}
                            width={130}
                            height={100}
                            className="object-contain rounded"
                        />
                    )}
                </div>

                <h1 className="text-3xl md:text-6xl font-bold tracking-wide">
                    {tradeShow.title}
                </h1>

                <p className="mt-4 px-8 md:p-0 text-lg text-white/80">
                    {tradeShow.subtitle}
                </p>

                <div className="flex flex-wrap items-center justify-center md:gap-6 gap-3 mt-6 text-sm md:text-base text-white/90">
                    <div className="flex items-center gap-2">
                        <CalendarDays size={18} />
                        <span>{tradeShow.startDate} - {tradeShow.endDate}</span>
                    </div>

                    <div className="w-px h-5 bg-white/40 hidden md:block" />

                    <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span>{tradeShow.location}</span>
                    </div>
                </div>

                <div className="mt-8">
                    <QuoteButton
                        name="REQUEST QUOTE"
                        type="button"
                        className="btn-white"
                    />
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    {Object.entries(countdown).map(([label, value]) => (
                        <div key={label} className="flex gap-2 flex-col text-center">
                            <div className="flex gap-2">
                                {value
                                    .toString()
                                    .padStart(2, "0")
                                    .split("")
                                    .map((num: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className="bg-primary rounded px-2 md:px-5 py-2 text-xs md:text-2xl font-bold"
                                        >
                                            {num}
                                        </div>
                                    ))}
                            </div>

                            <div className="text-xs md:text-sm mt-1 font-black">
                                {label.toUpperCase()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
