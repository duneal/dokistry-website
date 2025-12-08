import { Github } from "lucide-react"
import Image from "next/image"

export function Footer() {
	return (
		<footer className="border-t border-border/30 py-12 relative">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<a href="#" className="flex items-center">
						<Image
							src="/images/full_logo_white.svg"
							alt="Dokistry"
							width={120}
							height={32}
							className="h-8 w-auto"
						/>
					</a>

					<div className="flex items-center gap-8">
						<a
							href="https://github.com/duneal/dokistry"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
						>
							<Github className="w-5 h-5" />
							<span className="text-sm">GitHub</span>
						</a>

						<a
							href="https://github.com/duneal/dokistry#readme"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<span className="text-sm">Documentation</span>
						</a>

						<a
							href="https://github.com/duneal/dokistry/issues"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							<span className="text-sm">Issues</span>
						</a>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-border/20 text-center">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Dokistry. Open source under MIT License.
					</p>
				</div>
			</div>
		</footer>
	)
}
