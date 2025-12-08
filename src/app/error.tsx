"use client"

import { AlertTriangle, RefreshCw } from "lucide-react"
import { useEffect } from "react"
import { Button } from "@/app/_components/ui/button"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log error to an error reporting service in production
		console.error(error)
	}, [error])

	return (
		<div className="min-h-screen flex items-center justify-center bg-background px-4">
			<div className="text-center max-w-md">
				<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
					<AlertTriangle className="w-8 h-8 text-destructive" />
				</div>
				<h1 className="text-3xl font-bold text-foreground mb-2">Something went wrong</h1>
				<p className="text-muted-foreground mb-6">
					An unexpected error occurred. Please try again or contact support if the problem persists.
				</p>
				{error.digest && (
					<p className="text-xs text-muted-foreground mb-4 font-mono">Error ID: {error.digest}</p>
				)}
				<Button onClick={reset} className="gap-2">
					<RefreshCw className="w-4 h-4" />
					Try again
				</Button>
			</div>
		</div>
	)
}
