/**
 * Next.js App Router — robots.ts
 * AI Search Optimization (GEO) configuration
 *
 * Place this file at: app/robots.ts
 *
 * Generate a custom config: https://geoscoreai.com/tools/robots-txt-generator
 * Check your AI visibility: https://geoscoreai.com
 */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all standard search engines
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
      {
        // OpenAI — ChatGPT
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // ChatGPT browse mode
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // Google AI / Gemini
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // Perplexity AI
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // Anthropic — Claude
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // Apple AI / Siri
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // Cohere AI
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // ByteDance AI
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // Meta AI
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: "https://yoursite.com/sitemap.xml",
  };
}
