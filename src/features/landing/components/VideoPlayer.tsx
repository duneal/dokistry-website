"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Pause, Play } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

interface VideoPlayerProps {
	src: string
	poster?: string
	className?: string
	captions?: string
}

export function VideoPlayer({ src, poster, className = "", captions }: VideoPlayerProps) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [showControls, setShowControls] = useState(true)
	const [progress, setProgress] = useState(0)
	const [videoError, setVideoError] = useState(false)
	const [videoSrc, setVideoSrc] = useState(src)
	const [posterSrc, setPosterSrc] = useState(poster)
	const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null)

	// Set absolute URL after mount to avoid hydration mismatch
	useEffect(() => {
		const getAbsoluteUrl = (path: string | undefined) => {
			if (!path) return undefined
			if (path.startsWith("http://") || path.startsWith("https://")) {
				return path
			}
			return `${window.location.origin}${path.startsWith("/") ? "" : "/"}${path}`
		}

		setVideoSrc(getAbsoluteUrl(src) || src)
		setPosterSrc(getAbsoluteUrl(poster))
	}, [src, poster])

	const togglePlay = useCallback(() => {
		if (!videoRef.current) return

		if (isPlaying) {
			videoRef.current.pause()
		} else {
			videoRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}, [isPlaying])

	const handleTimeUpdate = useCallback(() => {
		if (!videoRef.current) return
		const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
		setProgress(currentProgress)
	}, [])

	const handleVideoEnd = useCallback(() => {
		setIsPlaying(false)
		setShowControls(true)
		if (videoRef.current) {
			videoRef.current.currentTime = 0
		}
	}, [])

	const handleMouseMove = useCallback(() => {
		setShowControls(true)
		if (hideControlsTimeout.current) {
			clearTimeout(hideControlsTimeout.current)
		}
		if (isPlaying) {
			hideControlsTimeout.current = setTimeout(() => {
				setShowControls(false)
			}, 2500)
		}
	}, [isPlaying])

	const handleMouseLeave = useCallback(() => {
		if (isPlaying) {
			hideControlsTimeout.current = setTimeout(() => {
				setShowControls(false)
			}, 1000)
		}
	}, [isPlaying])

	useEffect(() => {
		return () => {
			if (hideControlsTimeout.current) {
				clearTimeout(hideControlsTimeout.current)
			}
		}
	}, [])

	return (
		<motion.div
			initial={{ opacity: 0, y: 30, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
			className={`relative group ${className}`}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{/* Glow effect behind the video */}
			<div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

			{/* Video container with border and shadow */}
			<div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card/50 backdrop-blur-sm aspect-video">
				{videoError ? (
					<div className="absolute inset-0 flex items-center justify-center bg-muted/20">
						<p className="text-muted-foreground text-sm">Video unavailable</p>
					</div>
				) : (
					<video
						ref={videoRef}
						src={videoSrc}
						poster={posterSrc}
						className="w-full h-full object-cover"
						onTimeUpdate={handleTimeUpdate}
						onEnded={handleVideoEnd}
						onError={() => setVideoError(true)}
						onClick={togglePlay}
						playsInline
						preload="metadata"
					>
						<track
							kind="captions"
							src={captions || "data:text/vtt;base64,V0VCVlRUCg=="}
							label="Captions"
							default={!!captions}
						/>
					</video>
				)}

				{/* Custom play/pause button overlay */}
				<AnimatePresence>
					{showControls && !videoError && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="absolute inset-0 flex items-center justify-center"
						>
							<motion.button
								type="button"
								onClick={togglePlay}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg backdrop-blur-sm transition-colors cursor-pointer"
								aria-label={isPlaying ? "Pause video" : "Play video"}
							>
								{/* Pulsing ring effect when paused */}
								{!isPlaying && (
									<motion.div
										className="absolute inset-0 rounded-full border-2 border-primary"
										animate={{
											scale: [1, 1.3, 1.3],
											opacity: [0.5, 0, 0],
										}}
										transition={{
											duration: 2,
											repeat: Number.POSITIVE_INFINITY,
											ease: "easeOut",
										}}
									/>
								)}

								<AnimatePresence mode="wait">
									{isPlaying ? (
										<motion.div
											key="pause"
											initial={{ scale: 0, rotate: -90 }}
											animate={{ scale: 1, rotate: 0 }}
											exit={{ scale: 0, rotate: 90 }}
											transition={{ duration: 0.2 }}
										>
											<Pause className="w-8 h-8" strokeWidth={2.5} />
										</motion.div>
									) : (
										<motion.div
											key="play"
											initial={{ scale: 0, rotate: -90 }}
											animate={{ scale: 1, rotate: 0 }}
											exit={{ scale: 0, rotate: 90 }}
											transition={{ duration: 0.2 }}
										>
											<Play className="w-8 h-8 ml-1" strokeWidth={2.5} />
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Progress bar */}
				<div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30">
					<motion.div
						className="h-full bg-primary"
						style={{ width: `${progress}%` }}
						transition={{ duration: 0.1 }}
					/>
				</div>
			</div>
		</motion.div>
	)
}
