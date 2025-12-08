import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

import { securityHeaders } from "@/utils/constants/next"

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "standalone",
	poweredByHeader: false,
	compress: true,

	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [],
	},

	async headers() {
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
			{
				source: "/images/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/favicons/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		]
	},

	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},

	webpack: (config) => {
		// Handle SVG files with @svgr/webpack
		config.module.rules.push({
			test: /[.]svg$/,
			use: ["@svgr/webpack"],
		})

		return config
	},
}

export default withNextIntl(nextConfig)
