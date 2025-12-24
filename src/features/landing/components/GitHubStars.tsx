"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { formatStarCount, useGitHubStars } from "@/utils/hooks/use-github-stars"

interface GitHubStarsProps {
	repo: string
}

export function GitHubStars({ repo }: GitHubStarsProps) {
	const { data: stars, isLoading } = useGitHubStars(repo)

	return (
		<motion.a
			href={`https://github.com/${repo}`}
			target="_blank"
			rel="noopener noreferrer"
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.25 }}
			className="group relative inline-flex items-center gap-1 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 border-primary/50 transition-all duration-300 overflow-hidden"
		>
			{/* Shimmer effect */}
			<div className="absolute inset-0 github-stars-shimmer" />

			{/* GitHub icon with pulse animation */}
			<motion.div
				animate={{
					scale: [1, 1.08, 1],
				}}
				transition={{
					duration: 2.5,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				className="relative"
			>
				<Github className="h-4 w-4 text-foreground/80 me-1" strokeWidth={2} />
			</motion.div>

			{/* Star count */}
			<span className="relative text-sm font-semibold text-foreground">
				{isLoading ? (
					<span className="inline-block w-8 h-4 bg-muted/50 rounded animate-pulse" />
				) : (
					<motion.span
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="tabular-nums"
					>
						{stars !== undefined ? formatStarCount(stars) : "—"}
					</motion.span>
				)}
			</span>

			{/* Stars label */}
			<span className="relative text-sm text-muted-foreground group-hover:text-foreground transition-colors">
				Stars
			</span>

			{/* Hover glow effect */}
			<div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
		</motion.a>
	)
}
