"use client"

import { useEffect } from "react"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="text-4xl font-bold">Erreur</h1>
			<p className="mt-4 text-lg">Une erreur s'est produite</p>
			<button
				type="button"
				onClick={reset}
				className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
			>
				Réessayer
			</button>
		</div>
	)
}