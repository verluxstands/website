"use client";

import React from "react";
import { brochurePath, contactInfo } from "@/lib/site-content";
import { usePopup } from "@/context/popup-context"


export const CTAButton = ({ children, callback }: { children: React.ReactNode; callback: () => void }) => {
    return (
        <button
            type="button"
            onClick={() => {
                callback();
            }}
            className="group relative overflow-hidden flex items-center justify-center gap-2 bg-red-700 px-6 py-3 rounded-md font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
        >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-[100%]"></span>
            <span className="relative z-10 flex items-center gap-2">
                {children}
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {">"}
                </span>
            </span>
        </button>
    );
};
export const CTALink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return (
        <a
            href={href}
            className="group relative overflow-hidden flex items-center justify-center gap-2 bg-red-700 px-6 py-3 rounded-md font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
        >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-[100%]"></span>
            <span className="relative z-10 flex items-center gap-2">
                {children}
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {">"}
                </span>
            </span>
        </a>
    );
};

const CTASection = () => {
    const { openBrochurePopup, openQuotePopup } = usePopup()

    return (
        <div className="px-6 py-8 md:px-10">
            <div
                className="relative h-52 overflow-hidden rounded-3xl bg-cover bg-center md:h-48"
                style={{ backgroundImage: "url(/legacy/booths/IMG-20250917-WA0020.webp)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-black/80"></div>

                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 px-6 md:flex-row md:justify-around">
                    <CTALink href="/contact">GET FREE DESIGN</CTALink>
                    <CTAButton callback={openBrochurePopup}>DOWNLOAD BROCHURE</CTAButton>
                    <CTAButton callback={openQuotePopup}>REQUEST A CALLBACK</CTAButton>

                </div>
            </div>
        </div>
    );
};

export default CTASection;
