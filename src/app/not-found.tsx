import { Home } from "lucide-react"
import Link from "next/link"
import { Button } from "@/app/_components/ui/button"

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background px-4">
			<div className="text-center max-w-md">
				<h1 className="text-8xl font-bold text-primary mb-4">404</h1>
				<h2 className="text-2xl font-semibold text-foreground mb-2">Page not found</h2>
				<p className="text-muted-foreground mb-8">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<Button asChild className="gap-2">
					<Link href="/">
						<Home className="w-4 h-4" />
						Back to home
					</Link>
				</Button>
			</div>
		</div>
	)
}
