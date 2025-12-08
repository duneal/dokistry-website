import { Toaster } from "@/app/_components/ui/sonner"
import Layout from "@/app/(pages)/layout"
import "@/app/globals.css"
import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { APP_URL } from "@/utils/constants/config"
import { inter, spaceGrotesk } from "@/utils/fonts"
import { ReactQueryProvider } from "@/utils/providers/ReactQueryProvider"
import { ThemeProvider } from "@/utils/providers/ThemeProvider"

export const revalidate = 300 // 5 minutes

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL(APP_URL!),
		title: {
			default: "Manage your self-hosted Docker registries | Dokistry",
			template: `%s | Dokistry`,
		},
		description:
			"Monitor and manage self-hosted Docker registries, images, and users from a single modern interface.",
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			title: "Manage your self-hosted Docker registries | Dokistry",
			description:
				"Monitor and manage self-hosted Docker registries, images, and users from a single modern interface.",
			url: APP_URL || "",
			type: "website",
			siteName: "Dokistry",
			images: [
				{
					url: "/images/preview-dashboard.png",
					width: 1200,
					height: 630,
					alt: "Manage your self-hosted Docker registries | Dokistry",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "Manage your self-hosted Docker registries | Dokistry",
			description:
				"Monitor and manage self-hosted Docker registries, images, and users from a single modern interface.",
			images: {
				url: "/images/og-image.png",
				alt: "Manage your self-hosted Docker registries | Dokistry",
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
