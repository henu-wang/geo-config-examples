# GEO Config Examples — Copy-Paste AI Search Optimization

Ready-to-use configuration files for making your website visible to AI search engines (ChatGPT, Perplexity, Google AI, Claude, and more).

## What is GEO?

**Generative Engine Optimization (GEO)** is the practice of optimizing your website so AI-powered search engines can discover, crawl, and reference your content. As users increasingly rely on AI assistants for answers, traditional SEO alone is no longer enough — you need to ensure AI crawlers can access your site.

Key GEO practices include:

- Allowing AI crawlers in your `robots.txt`
- Providing an `llms.txt` file that summarizes your site for large language models
- Using structured data that AI engines can parse
- Writing content in clear, factual formats that AI can cite

## Frameworks

| Framework | Directory | Key Files |
|-----------|-----------|-----------|
| **Next.js** (App Router) | [`nextjs/`](./nextjs/) | `robots.ts`, `llms.txt` |
| **Nuxt 3** | [`nuxt/`](./nuxt/) | `nuxt.config.ts` |
| **WordPress** | [`wordpress/`](./wordpress/) | `robots-txt-snippet.php` |
| **Gatsby** | [`gatsby/`](./gatsby/) | `gatsby-config.js` |
| **Astro** | [`astro/`](./astro/) | `robots.txt` |
| **Django** | [`django/`](./django/) | `urls.py` |
| **Laravel** | [`laravel/`](./laravel/) | `routes.php` |
| **Ruby on Rails** | [`rails/`](./rails/) | `config/robots.txt` |

## Quick Start

1. Find your framework above
2. Copy the config file into your project
3. Customize the domain and site details
4. Deploy and verify with [GEO Score AI](https://geoscoreai.com)

## AI Crawlers Included

These configs allow the following AI crawlers by default:

| Crawler | Service |
|---------|---------|
| `GPTBot` | ChatGPT / OpenAI |
| `ChatGPT-User` | ChatGPT browse mode |
| `Google-Extended` | Google AI / Gemini |
| `PerplexityBot` | Perplexity AI |
| `ClaudeBot` | Claude / Anthropic |
| `Applebot-Extended` | Apple AI / Siri |
| `cohere-ai` | Cohere |
| `Bytespider` | ByteDance AI |
| `Meta-ExternalAgent` | Meta AI |

## Useful Tools

- **[GEO Score AI](https://geoscoreai.com)** — Scan your website's AI search visibility
- **[Robots.txt Generator](https://geoscoreai.com/tools/robots-txt-generator)** — Generate a custom robots.txt with AI crawler rules
- **[AI Crawler Checker](https://geoscoreai.com/tools/ai-crawler-checker)** — Check which AI crawlers can access your site

## Contributing

Contributions are welcome! To add a new framework or improve existing configs:

1. Fork this repository
2. Create a new directory for your framework (or edit an existing one)
3. Include clear comments explaining each configuration option
4. Add a comment header linking to the robots.txt generator tool
5. Submit a pull request with a description of what you added

Please ensure all config files:
- Include the standard AI crawler list
- Have inline comments for clarity
- Link to https://geoscoreai.com/tools/robots-txt-generator in the file header

## License

MIT License — use these configs freely in any project.
