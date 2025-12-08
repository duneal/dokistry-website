"use client"

import { Languages } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu"

const languages = [
	{ code: "en", label: "English", flag: "🇬🇧" },
	{ code: "fr", label: "Français", flag: "🇫🇷" },
]

export function LanguageSwitcher() {
	// Placeholder - logic to be implemented
	const currentLanguage = "en"

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="w-9 h-9 cursor-pointer">
					<Languages className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
					<span className="sr-only">Select language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-40">
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => {
							// Logic to be implemented
							console.log(`Language changed to: ${lang.code}`)
						}}
						className={currentLanguage === lang.code ? "bg-accent" : ""}
					>
						<span className="mr-2">{lang.flag}</span>
						<span>{lang.label}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
