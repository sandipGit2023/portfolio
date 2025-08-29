// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        // SEO Meta Tags
        { name: 'description', content: 'Sandip Ghodasara - Senior Software Engineer specializing in Laravel, Vue.js, React, and Node.js. Crafting high-performance APIs, intuitive admin panels, and AI-powered solutions.' },
        { name: 'keywords', content: 'Sandip Ghodasara, Software Engineer, Laravel Developer, Vue.js Developer, React Developer, Node.js Developer, Full Stack Developer, API Development, Web Development, Ahmedabad, Gujarat, India, Senior Software Engineer Sandip Ghodasara' },
        { name: 'author', content: 'Sandip Ghodasara' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        // Local SEO
        { name: 'geo.region', content: 'IN-GJ' },
        { name: 'geo.placename', content: 'Ahmedabad, Gujarat, India' },
        { name: 'geo.position', content: '23.0225;72.5714' },
        { name: 'ICBM', content: '23.0225, 72.5714' },
        // Open Graph Meta Tags
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sandip Ghodasara - Senior Software Engineer' },
        { property: 'og:description', content: 'Passionate Software Engineer crafting high-performance APIs, intuitive admin panels, and AI-powered solutions to drive innovation, efficiency, and scalability.' },
        { property: 'og:image', content: '/sandip_img.png' },
        { property: 'og:url', content: 'https://sandipghodasara.com' },
        { property: 'og:site_name', content: 'Sandip Ghodasara Portfolio' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter Card Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Sandip Ghodasara - Senior Software Engineer' },
        { name: 'twitter:description', content: 'Passionate Software Engineer crafting high-performance APIs, intuitive admin panels, and AI-powered solutions.' },
        { name: 'twitter:image', content: '/sandip_img.png' },
        { name: 'twitter:creator', content: '@sandipghodasara' },
        // Additional SEO
        { name: 'theme-color', content: '#00ff99' },
        { name: 'msapplication-TileColor', content: '#00ff99' },
        { name: 'application-name', content: 'Sandip Ghodasara Portfolio' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://sandipghodasara.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'apple-touch-icon', href: '/sandip_img.png' },
      ],
    },
  },
  css: ['~/assets/css/main.css', '@fontsource/space-mono'],
  runtimeConfig: {
    public: {
      siteUrl: 'https://sandipghodasara.com',
      siteName: 'Sandip Ghodasara Portfolio',
      siteDescription: 'Senior Software Engineer specializing in Laravel, Vue.js, React, and Node.js',
    },
  },
  compatibilityDate: '2024-11-01',
  // SEO Configuration
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
