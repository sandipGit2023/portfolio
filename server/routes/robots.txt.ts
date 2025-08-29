export default defineEventHandler(async(event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://sandipghodasara.com'

  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/

# Allow all other content
Allow: /about
Allow: /work
Allow: /contact
Allow: /assets/
Allow: /images/`

  setHeader(event, 'Content-Type', 'text/plain')
  return robotsTxt
})
