import { Toaster } from "@/app/_components/ui/sonner"
import "@/app/globals.css"
import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import type { ReactNode } from "react"
import { type Locale, routing } from "@/i18n/routing"
import { APP_URL } from "@/utils/constants/config"
import { inter, spaceGrotesk } from "@/utils/fonts"
import { ReactQueryProvider } from "@/utils/providers/ReactQueryProvider"
import { ThemeProvider } from "@/utils/providers/ThemeProvider"

export const revalidate = 300 // 5 minutes

type Props = {
	children: ReactNode
	params: Promise<{ locale: string }>
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "metadata" })

	return {
		metadataBase: new URL(APP_URL!),
		title: {
			default: t("title"),
			template: `%s | Dokistry`,
		},
		description: t("description"),
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			title: t("title"),
			description: t("description"),
			url: APP_URL || "",
			type: "website",
			siteName: "Dokistry",
			images: [
				{
					url: "/images/preview-dashboard.png",
					width: 1200,
					height: 630,
					alt: t("title"),
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: {
				url: "/images/og-image.png",
				alt: t("title"),
			},
		},
	}
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as Locale)) {
		notFound()
	}

	// Enable static rendering
	setRequestLocale(locale)

	// Providing all messages to the client side
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<ReactQueryProvider>
							<main className="min-h-screen">{children}</main>
						</ReactQueryProvider>
						<Toaster />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
