"use client"

import { motion } from "framer-motion"
import { Container, Eye, Layers, Tag, Trash2, Users } from "lucide-react"

const features = [
	{
		icon: Container,
		title: "Registry Management",
		description:
			"Preview and manage Docker registries with an intuitive interface. Connect multiple registries seamlessly.",
	},
	{
		icon: Eye,
		title: "Image Inspection",
		description:
			"View detailed information about images and tag sizes. Monitor disk usage across your registries.",
	},
	{
		icon: Tag,
		title: "Tag Inspection",
		description:
			"Inspect and analyze tags on each registry. Get comprehensive metadata at a glance.",
	},
	{
		icon: Trash2,
		title: "Tags Deletion",
		description: "Delete tags directly from the interface. Clean up unused resources efficiently.",
	},
	{
		icon: Layers,
		title: "Multi-Registry",
		description:
			"Manage multiple registries from one instance. Switch between registries effortlessly.",
	},
	{
		icon: Users,
		title: "User Management",
		description:
			"Add and manage users with admin privileges. Control access to your registries securely.",
	},
]

export function Features() {
	return (
		<section id="features" className="py-24 relative overflow-hidden">
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
					<h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Comprehensive Docker registry management in one powerful interface
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							<div className="relative bg-card border border-border/50 rounded-lg p-6 h-full hover:border-primary/30 shadow-card transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
									<feature.icon className="w-6 h-6 text-primary" />
								</div>

								<h3 className="font-grotesk text-xl font-semibold mb-3">{feature.title}</h3>

								<p className="text-muted-foreground leading-relaxed">{feature.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
