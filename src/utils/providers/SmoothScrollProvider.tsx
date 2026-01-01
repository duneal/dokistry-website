"use client"

import Lenis from "lenis"
import type { ReactNode } from "react"
import { useEffect } from "react"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1,
			wheelMultiplier: 1,
		})

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		return () => {
			lenis.destroy()
		}
	}, [])

	return <>{children}</>
}
