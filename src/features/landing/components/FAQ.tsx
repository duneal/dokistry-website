"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export function FAQ() {
	const t = useTranslations("faq")
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const faqItems = [
		"isItFree",
		"howToInstall",
		"supportedRegistries",
		"userManagement",
		"howToContribute",
		"reportBug",
		"isItActive",
	] as const

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section id="faq" className="py-16 pt-12 relative overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0 section-faq-bg" />

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

				<div className="max-w-3xl mx-auto">
					{faqItems.map((itemKey, index) => (
						<motion.div
							key={itemKey}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="mb-3"
						>
							<div
								className="group relative bg-card/40 dark:bg-card/60 backdrop-blur-sm border border-border/30 dark:border-border/50 rounded-xl overflow-hidden hover:border-primary/40 dark:hover:border-primary/30 hover:bg-card/60 dark:hover:bg-card/70 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
								onClick={() => toggleItem(index)}
							>
								{/* Subtle gradient overlay on hover */}
								<div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

								<button
									type="button"
									className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl relative z-10"
									aria-expanded={openIndex === index}
									aria-controls={`faq-answer-${index}`}
								>
									<h3 className="font-grotesk text-lg font-semibold pr-8 text-foreground group-hover:text-primary transition-colors duration-300">
										{t(`${itemKey}.question`)}
									</h3>
									<ChevronDown
										className={`w-5 h-5 text-muted-foreground shrink-0 transition-all duration-300 ${
											openIndex === index ? "transform rotate-180 text-primary" : ""
										} group-hover:text-primary`}
									/>
								</button>

								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											id={`faq-answer-${index}`}
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden relative z-10"
										>
											<div className="px-6 pb-5 pt-0 border-t border-border/20 dark:border-border/30">
												<p className="text-muted-foreground leading-relaxed pt-4">
													{t(`${itemKey}.answer`)}
												</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
