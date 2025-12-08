import type { MetadataRoute } from "next"

import { routing } from "@/i18n/routing"
import { APP_URL } from "@/utils/constants/config"

export const revalidate = 3600 // 1 hour

type SitemapEntry = MetadataRoute.Sitemap[number]

const staticPages = [
	{
		path: "/",
		priority: 1.0,
		changeFrequency: "monthly" as const,
		lastModified: new Date("2025-12-08"),
	},
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = APP_URL
	const locales = routing.locales
	const defaultLocale = routing.defaultLocale

	const sitemapEntries: SitemapEntry[] = []

	// Generate entries for each static page
	for (const page of staticPages) {
		// Create alternates object for hreflang
		const languages: Record<string, string> = {}

		for (const locale of locales) {
			const localePath = locale === defaultLocale ? "" : `/${locale}`
			languages[locale] = `${baseUrl}${localePath}${page.path}`
		}

		// Add x-default pointing to the default locale
		languages["x-default"] = `${baseUrl}${page.path}`

		// Add entry for each locale
		for (const locale of locales) {
			const localePath = locale === defaultLocale ? "" : `/${locale}`
			const url = `${baseUrl}${localePath}${page.path}`

			sitemapEntries.push({
				url,
				lastModified: page.lastModified,
				changeFrequency: page.changeFrequency,
				priority: page.priority,
				alternates: {
					languages,
				},
			})
		}
	}

	return sitemapEntries
}
