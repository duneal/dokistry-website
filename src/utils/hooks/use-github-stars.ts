"use client"

import { useQuery } from "@tanstack/react-query"

interface GitHubRepoData {
	stargazers_count: number
}

async function fetchGitHubStars(repo: string): Promise<number> {
	const response = await fetch(`https://api.github.com/repos/${repo}`, {
		headers: {
			Accept: "application/vnd.github.v3+json",
		},
		cache: "no-store",
	})

	if (!response.ok) {
		throw new Error(`Failed to fetch GitHub stars: ${response.status}`)
	}

	const data: GitHubRepoData = await response.json()
	return data.stargazers_count
}

export function useGitHubStars(repo: string) {
	return useQuery({
		queryKey: ["github-stars", repo],
		queryFn: () => fetchGitHubStars(repo),
		staleTime: 1000 * 60 * 60, // 1 hour
		gcTime: 1000 * 60 * 60 * 24, // 24 hours
		retry: 2,
		refetchOnWindowFocus: false,
	})
}

export function formatStarCount(count: number): string {
	if (count >= 1000) {
		return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`
	}
	return count.toString()
}
