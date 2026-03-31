import type { ElementType } from "react"
import { Globe } from "lucide-react"
import { CTAButton } from "@/components/common/quick-actions"
import { TradeShow, TradeShowContentBlock } from "@/lib/static-trade-shows"

function RenderHeading({ block }: { block: TradeShowContentBlock }) {
    const baseClass = "font-bold leading-tight"
    const styles: Record<string, string> = {
        h2: `text-3xl md:text-4xl ${baseClass} text-primary border-l-4 border-primary pl-4`,
        h3: `text-2xl md:text-3xl ${baseClass} text-primary`,
        h4: `text-xl md:text-2xl ${baseClass} text-primary/80`,
    }
    const align: Record<string, string> = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }

    const Tag = ((block.level as string) || "h2") as ElementType
    return <Tag className={`${styles[String(block.level)] ?? styles.h2} ${align[String(block.align)] ?? "text-left"}`}>{String(block.text ?? "")}</Tag>
}

function RenderText({ block }: { block: TradeShowContentBlock }) {
    return (
        <div
            className="event-rich-text prose-invert max-w-none text-gray-700 leading-relaxed text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: String(block.html ?? "") }}
        />
    )
}

function RenderImage({ block }: { block: TradeShowContentBlock }) {
    if (!block.url) return null
    const widthClass: Record<string, string> = {
        full: "w-full",
        wide: "w-full md:w-[85%] mx-auto",
        medium: "w-full md:w-[60%] mx-auto",
    }
    return (
        <figure className={widthClass[String(block.width)] ?? "w-full"}>
            <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <img
                    src={String(block.url)}
                    alt={String(block.alt || block.caption || "")}
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>
            {Boolean(block.caption) && (
                <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                    {String(block.caption)}
                </figcaption>
            )}
        </figure>
    )
}

function RenderVideo({ block }: { block: TradeShowContentBlock }) {
    const url = String(block.url ?? "")
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
    const vm = url.match(/vimeo\.com\/(\d+)/)
    const embed = yt ? `https://www.youtube.com/embed/${yt[1]}` : vm ? `https://player.vimeo.com/video/${vm[1]}` : null
    if (!embed) return null

    return (
        <figure className="w-full">
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl" style={{ aspectRatio: "16/9" }}>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-10" />
                <iframe
                    src={embed}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title={String(block.caption || "Event video")}
                />
            </div>
            {Boolean(block.caption) && (
                <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                    {String(block.caption)}
                </figcaption>
            )}
        </figure>
    )
}

function RenderQuote({ block }: { block: TradeShowContentBlock }) {
    return (
        <blockquote className="relative pl-6 border-l-4 border-primary bg-white/[0.03] shadow-sm rounded-r-xl py-6 pr-6">
            <span className="absolute top-3 right-5 text-6xl text-primary/90 font-serif leading-none select-none">
                &rdquo;
            </span>
            <p className="text-lg md:text-xl text-primary italic leading-relaxed mb-4">
                &ldquo;{String(block.text ?? "")}&rdquo;
            </p>
            {Boolean(block.author) && (
                <footer className="flex items-center gap-3">
                    <div className="w-6 h-px bg-primary" />
                    <div>
                        <span className="text-black/70 font-semibold text-sm">{String(block.author)}</span>
                        {Boolean(block.role) && (
                            <span className="text-gray-700 text-sm"> {" · "}{String(block.role)}</span>
                        )}
                    </div>
                </footer>
            )}
        </blockquote>
    )
}

function RenderStats({ block }: { block: TradeShowContentBlock }) {
    const items = Array.isArray(block.items) ? (block.items as Array<{ value: string; label: string }>) : []
    return (
        <div
            className="grid gap-px bg-primary/30 rounded-xl overflow-hidden border border-primary/20"
            style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, 1fr)` }}
        >
            {items.map((item: any, i: number) => (
                <div key={i} className="bg-[#0d0d0d] px-6 py-8 text-center group hover:bg-primary/10 transition-colors duration-300">
                    <div className="text-3xl md:text-4xl font-extrabold text-primary leading-none mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                        {String(item.value ?? "")}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                        {String(item.label ?? "")}
                    </div>
                </div>
            ))}
        </div>
    )
}

function RenderColumns({ block }: { block: TradeShowContentBlock }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="event-rich-text prose-invert text-gray-300 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: String(block.left ?? "") }} />
            <div className="event-rich-text prose-invert text-gray-300 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: String(block.right ?? "") }} />
        </div>
    )
}

function RenderCTA({ block }: { block: TradeShowContentBlock }) {
    return <CTAButton>{String(block.text || "Get Free Quote")}</CTAButton>
}

function RenderDivider() {
    return (
        <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
            <div className="w-2 h-2 rotate-45 bg-primary shrink-0" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
        </div>
    )
}

function RenderList({ block }: { block: TradeShowContentBlock }) {
    const items = Array.isArray(block.items) ? (block.items as string[]) : []
    const Tag = block.ordered ? "ol" : "ul"
    return (
        <Tag className={`space-y-2 text-gray-300 text-base leading-relaxed ${block.ordered ? "list-decimal pl-5" : "list-none pl-0"}`}>
            {items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                    {!block.ordered && <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
                    <span>{item}</span>
                </li>
            ))}
        </Tag>
    )
}

function RenderBlock({ block }: { block: TradeShowContentBlock }) {
    switch (block.type) {
        case "heading": return <RenderHeading block={block} />
        case "text": return <RenderText block={block} />
        case "image": return <RenderImage block={block} />
        case "video": return <RenderVideo block={block} />
        case "quote": return <RenderQuote block={block} />
        case "stats": return <RenderStats block={block} />
        case "columns": return <RenderColumns block={block} />
        case "cta": return <RenderCTA block={block} />
        case "divider": return <RenderDivider />
        case "list": return <RenderList block={block} />
        default: return null
    }
}

export default function TradeShowDetailsSection({ tradeShow }: { tradeShow: TradeShow }) {
    const blocks = tradeShow.blocks ?? []

    if (!blocks.length) return null

    return (
        <>
            <style>{`
                .event-rich-text p  { margin-bottom: 1em; }
                .event-rich-text h2 { font-size: 1.5rem; font-weight: 700; color: #A21E22; margin: 1.25em 0 .5em; }
                .event-rich-text h3 { font-size: 1.25rem; font-weight: 600; color: #A21E22; margin: 1em 0 .4em; }
                .event-rich-text ul { list-style: disc; padding-left: 1.4em; margin-bottom: 1em; }
                .event-rich-text ol { list-style: decimal; padding-left: 1.4em; margin-bottom: 1em; }
                .event-rich-text li { margin-bottom: .35em; }
                .event-rich-text a  { color: #cc2222; text-decoration: underline; }
                .event-rich-text strong { color: #424242; font-weight: 700; }
                .event-rich-text em { font-style: italic; color: #464646; }
            `}</style>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-3 px-1 md:px-6 grid-cols-1">
                <div className="lg:col-span-2 p-3 order-2">
                    <div className="flex flex-col gap-10">
                        {blocks.filter((block) => block.type !== "video").map((block) => (
                            <div key={block.id}>
                                <RenderBlock block={block} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3 order-1 md:order-3">
                    {blocks.filter((block) => block.type === "video").map((block) => (
                        <div key={block.id}>
                            <RenderBlock block={block} />
                        </div>
                    ))}
                    <div className="p-3">
                        <div className="py-3 px-3 bg-primary rounded-lg">
                            <h3 className="text-white text-lg uppercase font-black">Exhibition Info</h3>
                        </div>
                        <div className="mt-4 pl-2">
                            {tradeShow.exhibitionInfo.map((item, index) => (
                                <div className="flex flex-wrap gap-2" key={item.content + index}>
                                    <div><Globe className="text-primary" size={20} /></div>
                                    <div className="text-black/90 font-semibold text-lg">{item.heading}:-</div>
                                    <div className="text-[17px]">{item.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
