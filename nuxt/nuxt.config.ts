/**
 * Nuxt 3 — nuxt.config.ts
 * AI Search Optimization (GEO) configuration
 *
 * This config serves robots.txt via routeRules and sets up
 * the llms.txt file in the public/ directory.
 *
 * Generate a custom config: https://geoscoreai.com/tools/robots-txt-generator
 * Check your AI visibility: https://geoscoreai.com
 */

export default defineNuxtConfig({
  // Serve robots.txt with correct content type
  routeRules: {
    "/robots.txt": {
      headers: {
        "Content-Type": "text/plain",
      },
    },
    "/llms.txt": {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  },

  // For programmatic robots.txt, use the @nuxtjs/robots module:
  // modules: ['@nuxtjs/robots'],
  // robots: {
  //   rules: [
  //     { UserAgent: '*', Allow: '/', Disallow: ['/api/', '/admin/'] },
  //     { UserAgent: 'GPTBot', Allow: '/' },
  //     { UserAgent: 'ChatGPT-User', Allow: '/' },
  //     { UserAgent: 'Google-Extended', Allow: '/' },
  //     { UserAgent: 'PerplexityBot', Allow: '/' },
  //     { UserAgent: 'ClaudeBot', Allow: '/' },
  //     { UserAgent: 'Applebot-Extended', Allow: '/' },
  //     { UserAgent: 'cohere-ai', Allow: '/' },
  //     { UserAgent: 'Bytespider', Allow: '/' },
  //     { UserAgent: 'Meta-ExternalAgent', Allow: '/' },
  //   ],
  //   sitemap: 'https://yoursite.com/sitemap.xml',
  // },

  // If not using the module, place a robots.txt file in public/:
  //
  // public/robots.txt contents:
  //
  // User-agent: *
  // Allow: /
  // Disallow: /api/
  // Disallow: /admin/
  //
  // User-agent: GPTBot
  // Allow: /
  //
  // User-agent: ChatGPT-User
  // Allow: /
  //
  // User-agent: Google-Extended
  // Allow: /
  //
  // User-agent: PerplexityBot
  // Allow: /
  //
  // User-agent: ClaudeBot
  // Allow: /
  //
  // User-agent: Applebot-Extended
  // Allow: /
  //
  // User-agent: cohere-ai
  // Allow: /
  //
  // User-agent: Bytespider
  // Allow: /
  //
  // User-agent: Meta-ExternalAgent
  // Allow: /
  //
  // Sitemap: https://yoursite.com/sitemap.xml
});
