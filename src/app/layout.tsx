import type { ReactNode } from "react"

// Root layout is minimal since we use [locale] layout for i18n
// This file is required by Next.js but actual layout is in [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
	return children
}
