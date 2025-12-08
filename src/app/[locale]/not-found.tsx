import Link from "next/link"
import { Button } from "@/app/_components/ui/button"

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-primary mb-4">404</h1>
				<p className="text-xl text-muted-foreground mb-8">Page non trouvée / Page not found</p>
				<Button asChild>
					<Link href="/">Retour / Back</Link>
				</Button>
			</div>
		</div>
	)
}
