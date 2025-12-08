"use client"

import { Check, Globe } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"
import { Button } from "@/app/_components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu"
import { type Locale, usePathname, useRouter } from "@/i18n/routing"
import { type FlagCode, flags } from "./flags"

const languages = [
	{ code: "en", label: "English" },
	{ code: "fr", label: "Français" },
	{ code: "es", label: "Español" },
	{ code: "de", label: "Deutsch" },
	{ code: "pt", label: "Português" },
	{ code: "zh", label: "中文" },
	{ code: "ja", label: "日本語" },
	{ code: "ko", label: "한국어" },
	{ code: "it", label: "Italiano" },
	{ code: "ru", label: "Русский" },
	{ code: "nl", label: "Nederlands" },
	{ code: "pl", label: "Polski" },
	{ code: "sv", label: "Svenska" },
	{ code: "tr", label: "Türkçe" },
	{ code: "uk", label: "Українська" },
	{ code: "ar", label: "العربية" },
	{ code: "hi", label: "हिन्दी" },
	{ code: "vi", label: "Tiếng Việt" },
	{ code: "id", label: "Indonesia" },
	{ code: "cs", label: "Čeština" },
] as const

export function LanguageSwitcher() {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const t = useTranslations("nav")
	const [isPending, startTransition] = useTransition()

	const handleLanguageChange = (newLocale: Locale) => {
		startTransition(() => {
			router.replace(pathname, { locale: newLocale })
		})
	}

	// Find current language and put it first
	const currentLang = languages.find((l) => l.code === locale)
	const otherLangs = languages.filter((l) => l.code !== locale)

	const renderFlag = (code: FlagCode) => {
		const FlagComponent = flags[code]
		return <FlagComponent className="w-6 h-4 shrink-0" />
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="w-9 h-9 cursor-pointer hover:bg-primary/10 hover:text-primary transition-all duration-200"
					disabled={isPending}
				>
					<Globe className="h-5 w-5" />
					<span className="sr-only">{t("selectLanguage")}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="w-48 max-h-80 overflow-y-auto p-1.5 bg-popover/95 backdrop-blur-md border-border/60 shadow-lg shadow-black/10"
			>
				{/* Current language first */}
				{currentLang && (
					<DropdownMenuItem
						key={currentLang.code}
						disabled
						className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-primary/15 text-primary font-medium mb-1"
					>
						{renderFlag(currentLang.code as FlagCode)}
						<span className="flex-1">{currentLang.label}</span>
						<Check className="h-4 w-4 text-primary" />
					</DropdownMenuItem>
				)}

				{/* Separator */}
				<div className="h-px bg-border/50 my-1" />

				{/* Other languages */}
				{otherLangs.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => handleLanguageChange(lang.code as Locale)}
						disabled={isPending}
						className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-all duration-150 hover:bg-gray-100 hover:text-foreground"
					>
						{renderFlag(lang.code as FlagCode)}
						<span className="flex-1 text-sm">{lang.label}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
