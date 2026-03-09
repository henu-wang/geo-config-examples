"""
Django — urls.py
AI Search Optimization (GEO) configuration

Add these URL patterns to serve robots.txt and llms.txt dynamically.
Include them in your root URLconf.

Generate a custom config: https://geoscoreai.com/tools/robots-txt-generator
Check your AI visibility: https://geoscoreai.com
"""

from django.http import HttpResponse
from django.urls import path


# AI crawlers to allow
AI_CRAWLERS = [
    "GPTBot",           # OpenAI — ChatGPT
    "ChatGPT-User",    # ChatGPT browse mode
    "Google-Extended",  # Google AI / Gemini
    "PerplexityBot",   # Perplexity AI
    "ClaudeBot",       # Anthropic — Claude
    "Applebot-Extended",  # Apple AI / Siri
    "cohere-ai",       # Cohere
    "Bytespider",      # ByteDance AI
    "Meta-ExternalAgent",  # Meta AI
]

# Paths to disallow for all crawlers
DISALLOWED_PATHS = ["/admin/", "/api/", "/private/"]

# Your site URL (update this)
SITE_URL = "https://yoursite.com"


def robots_txt(request):
    """Serve robots.txt with AI crawler rules."""
    lines = [
        "# AI Search Optimization (GEO)",
        "# Generated with https://geoscoreai.com/tools/robots-txt-generator",
        "",
        "User-agent: *",
        "Allow: /",
    ]

    for path_str in DISALLOWED_PATHS:
        lines.append(f"Disallow: {path_str}")

    lines.append("")

    for crawler in AI_CRAWLERS:
        lines.append(f"User-agent: {crawler}")
        lines.append("Allow: /")
        for path_str in DISALLOWED_PATHS:
            lines.append(f"Disallow: {path_str}")
        lines.append("")

    lines.append(f"Sitemap: {SITE_URL}/sitemap.xml")

    return HttpResponse("\n".join(lines), content_type="text/plain")


def llms_txt(request):
    """Serve llms.txt — a plain text summary of the site for AI engines."""
    content = f"""# Your Site Name

> Brief description of your website.

## About

Your site description goes here. Explain what your site offers
and what visitors can find.

## Main Sections

- [Home]({SITE_URL})
- [Blog]({SITE_URL}/blog)
- [Docs]({SITE_URL}/docs)

## Contact

- Website: {SITE_URL}
"""
    return HttpResponse(content, content_type="text/plain")


# Add these to your root urlpatterns
urlpatterns = [
    path("robots.txt", robots_txt, name="robots_txt"),
    path("llms.txt", llms_txt, name="llms_txt"),
]
