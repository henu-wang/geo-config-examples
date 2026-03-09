<?php
/**
 * Laravel — routes/web.php
 * AI Search Optimization (GEO) configuration
 *
 * Add these routes to your routes/web.php file.
 *
 * Generate a custom config: https://geoscoreai.com/tools/robots-txt-generator
 * Check your AI visibility: https://geoscoreai.com
 */

use Illuminate\Support\Facades\Route;

/**
 * AI crawlers to allow.
 */
$aiCrawlers = [
    'GPTBot',           // OpenAI — ChatGPT
    'ChatGPT-User',    // ChatGPT browse mode
    'Google-Extended',  // Google AI / Gemini
    'PerplexityBot',   // Perplexity AI
    'ClaudeBot',       // Anthropic — Claude
    'Applebot-Extended', // Apple AI / Siri
    'cohere-ai',       // Cohere
    'Bytespider',      // ByteDance AI
    'Meta-ExternalAgent', // Meta AI
];

/**
 * Serve robots.txt with AI crawler rules.
 */
Route::get('/robots.txt', function () use ($aiCrawlers) {
    $siteUrl = config('app.url', 'https://yoursite.com');

    $disallowed = ['/admin/', '/api/', '/private/'];

    $lines = [
        '# AI Search Optimization (GEO)',
        '# Generated with https://geoscoreai.com/tools/robots-txt-generator',
        '',
        'User-agent: *',
        'Allow: /',
    ];

    foreach ($disallowed as $path) {
        $lines[] = "Disallow: {$path}";
    }
    $lines[] = '';

    foreach ($aiCrawlers as $crawler) {
        $lines[] = "User-agent: {$crawler}";
        $lines[] = 'Allow: /';
        foreach ($disallowed as $path) {
            $lines[] = "Disallow: {$path}";
        }
        $lines[] = '';
    }

    $lines[] = "Sitemap: {$siteUrl}/sitemap.xml";

    return response(implode("\n", $lines), 200)
        ->header('Content-Type', 'text/plain');
});

/**
 * Serve llms.txt — a plain text summary for AI engines.
 */
Route::get('/llms.txt', function () {
    $siteName = config('app.name', 'Your Site');
    $siteUrl  = config('app.url', 'https://yoursite.com');

    $content = <<<TXT
# {$siteName}

> Brief description of your website.

## About

Your site description goes here.

## Main Sections

- [Home]({$siteUrl})
- [Blog]({$siteUrl}/blog)
- [Docs]({$siteUrl}/docs)

## Contact

- Website: {$siteUrl}
TXT;

    return response($content, 200)
        ->header('Content-Type', 'text/plain');
});
