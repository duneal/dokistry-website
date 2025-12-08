import type { MetadataRoute } from "next"

import { APP_URL } from "@/utils/constants/config"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/admin/", "/_next/", "/private/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/api/", "/admin/", "/private/"],
			},
			{
				userAgent: "Bingbot",
				allow: "/",
				disallow: ["/api/", "/admin/", "/private/"],
			},
		],
		sitemap: `${APP_URL}/sitemap.xml`,
	}
}
