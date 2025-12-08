import { setRequestLocale } from "next-intl/server"
import { CTA, Features, Footer, Hero, Navigation } from "@/features/landing"

type Props = {
	params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
	const { locale } = await params
	setRequestLocale(locale)

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
