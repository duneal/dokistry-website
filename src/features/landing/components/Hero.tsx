"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/app/_components/ui/button"
import { GitHubStars } from "./GitHubStars"

const GITHUB_REPO = "duneal/dokistry"

export function Hero() {
	const t = useTranslations("hero")

	const stats = [
		{ label: t("stats.openSource"), value: t("stats.openSourceValue") },
		{ label: t("stats.registries"), value: t("stats.registriesValue") },
		{ label: t("stats.modernUi"), value: t("stats.modernUiValue") },
	]

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-background">
			{/* Background effects */}
			<div className="absolute inset-0 bg-gradient-subtle" />
			<div className="absolute inset-0 hero-radial-gradient" />

			{/* Grid pattern */}
			<div className="absolute inset-0 hero-grid-pattern" />

			<div className="container mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-4xl mx-auto sm:mt-0 mt-[110px]"
				>
					{/* Badges */}
					<div className="flex flex-wrap items-center justify-center gap-3 mb-8">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2 }}
							className="items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hidden sm:inline-flex"
						>
							<Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
							<span className="text-sm font-medium text-primary">{t("badge")}</span>
						</motion.div>

						<GitHubStars repo={GITHUB_REPO} />
					</div>

					{/* Main heading */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="font-grotesk text-5xl md:text-7xl font-bold mb-6 leading-tight"
					>
						{t("title")}
						<br />
						<span className="text-primary">{t("titleHighlight")}</span>
					</motion.h1>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light"
					>
						{t("description")}
					</motion.p>

					{/* CTAs */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<Button
							size="lg"
							className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium group px-8"
							asChild
						>
							<a
								href="https://github.com/duneal/dokistry"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="mr-2 h-5 w-5" />
								{t("viewOnGithub")}
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</a>
						</Button>

						<Button
							size="lg"
							variant="outline"
							className="border-border/50 hover:bg-card dark:hover:text-white font-medium px-8"
							asChild
						>
							<a href="#features">{t("exploreFeatures")}</a>
						</Button>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7 }}
						className="mt-16 flex flex-wrap justify-center gap-12"
					>
						{stats.map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-3xl font-grotesk font-bold text-primary mb-1">
									{stat.value}
								</div>
								<div className="text-sm text-muted-foreground">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
