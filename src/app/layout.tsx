import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Toaster } from "@/app/_components/ui/sonner"
import Layout from "@/app/(pages)/layout"
import { APP_URL } from "@/utils/constants/config"
import { inter, spaceGrotesk } from "@/utils/fonts"
import { ReactQueryProvider } from "@/utils/providers/ReactQueryProvider"
import { ThemeProvider } from "@/utils/providers/ThemeProvider"
import "@/app/globals.css"

export const revalidate = 300 // 5 minutes

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL(APP_URL!),
		title: {
			default: "Dokistry - Modern Docker Registry Management",
			template: `%s | Dokistry`,
		},
		description:
			"Preview and manage Docker registries, images, and users from a single modern interface.",
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			title: "Dokistry - Modern Docker Registry Management",
			description:
				"Preview and manage Docker registries, images, and users from a single modern interface.",
			url: APP_URL || "",
			type: "website",
			siteName: "Dokistry",
			images: [
				{
					url: "/images/og-image.png",
					width: 1200,
					height: 630,
					alt: "Dokistry - Docker Registry Management",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "Dokistry - Modern Docker Registry Management",
			description:
				"Preview and manage Docker registries, images, and users from a single modern interface.",
			images: {
				url: "/images/og-image.png",
				alt: "Dokistry - Docker Registry Management",
			},
		},
	}
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<ReactQueryProvider>
						<Layout>{children}</Layout>
					</ReactQueryProvider>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
