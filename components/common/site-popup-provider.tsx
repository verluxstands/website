"use client"

import { usePathname } from "next/navigation"
import { PopupProvider } from "@/context/popup-context"

export default function SitePopupProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname?.startsWith("/admin")) {
    return <>{children}</>
  }

  return <PopupProvider>{children}</PopupProvider>
}
