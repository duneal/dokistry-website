"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { ThemeSwitcher } from "./ThemeSwitcher"

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const t = useTranslations("nav")

	const navItems = [
		{ label: t("home"), href: "#" },
		{ label: t("features"), href: "#features" },
		{ label: t("getStarted"), href: "#get-started" },
	]

	return (
		<motion.nav
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-background/80 backdrop-blur-lg border-b border-border/50 dark:border-border"
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<a href="#" className="flex items-center group">
						<Image
							src="/images/full_logo_white.svg"
							alt="Dokistry"
							width={140}
							height={36}
							className="h-9 w-auto"
							priority
						/>
					</a>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
							>
								{item.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
							</a>
						))}
					</div>

					{/* Right Section */}
					<div className="flex items-center gap-3">
						<ThemeSwitcher />
						<LanguageSwitcher />

						{/* Mobile Menu Button */}
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="md:hidden py-4 border-t border-border/50"
					>
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</a>
						))}
					</motion.div>
				)}
			</div>
		</motion.nav>
	)
}
