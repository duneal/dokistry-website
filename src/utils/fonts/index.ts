import { Inter, Space_Grotesk } from "next/font/google"

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
})

export const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	display: "swap",
})

export const FONT_FAMILIES = {
	sans: ["var(--font-inter)", "system-ui", "sans-serif"],
	grotesk: ["var(--font-space-grotesk)", "sans-serif"],
	mono: ["Fira Code", "monospace"],
} as const

export type FontFamily = keyof typeof FONT_FAMILIES
