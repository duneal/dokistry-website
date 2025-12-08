import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
	locales: [
		"en",
		"fr",
		"es",
		"de",
		"pt",
		"zh",
		"ja",
		"ko",
		"it",
		"ru",
		"nl",
		"pl",
		"sv",
		"tr",
		"uk",
		"ar",
		"hi",
		"vi",
		"id",
		"cs",
	],
	defaultLocale: "fr",
})

export type Locale = (typeof routing.locales)[number]

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
