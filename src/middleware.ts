import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
	// Match all pathnames except for
	// - /api (API routes)
	// - /_next (Next.js internals)
	// - /images, /icons, /favicons (static files)
	// - /favicon.ico, /sitemap.xml, /robots.txt (meta files)
	matcher: ["/((?!api|_next|images|icons|favicons|favicon.ico|sitemap.xml|robots.txt).*)"],
}
