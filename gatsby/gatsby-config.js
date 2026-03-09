/**
 * Gatsby — gatsby-config.js
 * AI Search Optimization (GEO) with gatsby-plugin-robots-txt
 *
 * Install: npm install gatsby-plugin-robots-txt
 *
 * Generate a custom config: https://geoscoreai.com/tools/robots-txt-generator
 * Check your AI visibility: https://geoscoreai.com
 */

module.exports = {
  siteMetadata: {
    siteUrl: "https://yoursite.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://yoursite.com",
        sitemap: "https://yoursite.com/sitemap.xml",
        policy: [
          // Default: allow all crawlers
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // OpenAI — ChatGPT
          {
            userAgent: "GPTBot",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // ChatGPT browse mode
          {
            userAgent: "ChatGPT-User",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // Google AI / Gemini
          {
            userAgent: "Google-Extended",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // Perplexity AI
          {
            userAgent: "PerplexityBot",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // Anthropic — Claude
          {
            userAgent: "ClaudeBot",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // Apple AI / Siri
          {
            userAgent: "Applebot-Extended",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // Cohere AI
          {
            userAgent: "cohere-ai",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // ByteDance AI
          {
            userAgent: "Bytespider",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
          // Meta AI
          {
            userAgent: "Meta-ExternalAgent",
            allow: "/",
            disallow: ["/admin/", "/private/"],
          },
        ],
      },
    },
  ],
};
