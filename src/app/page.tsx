import { CTA, Features, Footer, Hero, Navigation } from "@/features/landing"

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navigation />
			<Hero />
			<Features />
			<CTA />
			<Footer />
		</div>
	)
}
