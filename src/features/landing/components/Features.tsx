"use client"

import { motion } from "framer-motion"
import { Container, Eye, Layers, Tag, Trash2, Users } from "lucide-react"
import { useTranslations } from "next-intl"

const featureKeys = [
	{ icon: Container, key: "registryManagement" },
	{ icon: Eye, key: "imageInspection" },
	{ icon: Tag, key: "tagInspection" },
	{ icon: Trash2, key: "tagsDeletion" },
	{ icon: Layers, key: "multiRegistry" },
	{ icon: Users, key: "userManagement" },
] as const

export function Features() {
	const t = useTranslations("features")

	return (
		<section id="features" className="py-24 pb-16 relative overflow-hidden">
			{/* Background effects - smooth transition from hero */}
			<div className="absolute inset-0 section-features-bg" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
					{featureKeys.map((feature, index) => (
						<motion.div
							key={feature.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative"
						>
							{/* Animated gradient glow on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

							{/* Main card with glassmorphism effect */}
							<div className="relative bg-card/50 dark:bg-card/70 backdrop-blur-md border border-border/40 dark:border-border/50 rounded-xl p-6 h-full overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/50 dark:hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20">
								{/* Subtle gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 dark:to-primary/10 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/10 dark:group-hover:from-primary/10 dark:group-hover:via-primary/5 dark:group-hover:to-primary/15 transition-all duration-500 pointer-events-none" />

								{/* Decorative corner accent */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/0 to-primary/5 dark:to-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

								<div className="relative z-10">
									{/* Icon with animated background */}
									<div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-primary/10 dark:group-hover:from-primary/30 dark:group-hover:to-primary/15 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
										<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										<feature.icon className="w-7 h-7 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
									</div>

									<h3 className="font-grotesk text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
										{t(`${feature.key}.title`)}
									</h3>

									<p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
										{t(`${feature.key}.description`)}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
