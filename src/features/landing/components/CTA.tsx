"use client"

import { motion } from "framer-motion"
import { Github, Star } from "lucide-react"
import { Button } from "@/app/_components/ui/button"

export function CTA() {
	return (
		<section id="get-started" className="py-24 relative overflow-hidden">
			{/* Background effects - smooth transition from features */}
			<div className="absolute inset-0 section-cta-bg" />
			<div className="absolute inset-0 section-cta-glow" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto"
				>
					<div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-12 text-center shadow-card">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
							<Star className="w-4 h-4 text-primary" />
							<span className="text-sm font-medium text-primary">Open Source Project</span>
						</div>

						<h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-6">Get Started Today</h2>

						<p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
							Join the community and start managing your Docker registries more efficiently. It's
							free, open source, and ready to deploy.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 group"
								asChild
							>
								<a
									href="https://github.com/duneal/dokistry"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-5 w-5" />
									Star on GitHub
									<Star className="ml-2 h-4 w-4 group-hover:fill-primary-foreground transition-all" />
								</a>
							</Button>

							<Button
								size="lg"
								variant="outline"
								className="border-border/50 hover:bg-card dark:hover:text-white font-medium px-8"
								asChild
							>
								<a
									href="https://github.com/duneal/dokistry#installation"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Documentation
								</a>
							</Button>
						</div>

						<div className="mt-10 pt-10 border-t border-border/30">
							<p className="text-sm text-muted-foreground">
								Built for developers, by developers • MIT Licensed
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
