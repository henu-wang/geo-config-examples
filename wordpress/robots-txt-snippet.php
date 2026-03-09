<?php
/**
 * WordPress — robots.txt AI Crawler Configuration
 * AI Search Optimization (GEO)
 *
 * Add this code to your theme's functions.php or a custom plugin.
 *
 * Generate a custom config: https://geoscoreai.com/tools/robots-txt-generator
 * Check your AI visibility: https://geoscoreai.com
 */

/**
 * Customize WordPress robots.txt to allow AI crawlers.
 *
 * WordPress generates a virtual robots.txt by default.
 * This filter appends AI crawler rules to it.
 */
add_filter('robots_txt', 'geo_add_ai_crawler_rules', 10, 2);

function geo_add_ai_crawler_rules($output, $public) {
    // Only add rules if the site is set to be publicly visible
    if ('0' === $public) {
        return $output;
    }

    $ai_crawlers = array(
        'GPTBot',           // OpenAI — ChatGPT
        'ChatGPT-User',    // ChatGPT browse mode
        'Google-Extended',  // Google AI / Gemini
        'PerplexityBot',   // Perplexity AI
        'ClaudeBot',       // Anthropic — Claude
        'Applebot-Extended', // Apple AI / Siri
        'cohere-ai',       // Cohere
        'Bytespider',      // ByteDance AI
        'Meta-ExternalAgent', // Meta AI
    );

    $output .= "\n# AI Search Optimization (GEO)\n";
    $output .= "# Generated with https://geoscoreai.com/tools/robots-txt-generator\n\n";

    foreach ($ai_crawlers as $crawler) {
        $output .= "User-agent: {$crawler}\n";
        $output .= "Allow: /\n";
        $output .= "Disallow: /wp-admin/\n";
        $output .= "Disallow: /wp-includes/\n\n";
    }

    return $output;
}

/**
 * Serve llms.txt from WordPress.
 *
 * Creates a virtual /llms.txt endpoint that returns a plain text
 * summary of your site for AI engines.
 */
add_action('init', 'geo_register_llms_txt_endpoint');

function geo_register_llms_txt_endpoint() {
    add_rewrite_rule('^llms\.txt$', 'index.php?geo_llms_txt=1', 'top');
}

add_filter('query_vars', 'geo_llms_txt_query_var');

function geo_llms_txt_query_var($vars) {
    $vars[] = 'geo_llms_txt';
    return $vars;
}

add_action('template_redirect', 'geo_serve_llms_txt');

function geo_serve_llms_txt() {
    if (!get_query_var('geo_llms_txt')) {
        return;
    }

    header('Content-Type: text/plain; charset=utf-8');

    $site_name = get_bloginfo('name');
    $site_desc = get_bloginfo('description');
    $site_url  = home_url('/');

    echo "# {$site_name}\n\n";
    echo "> {$site_desc}\n\n";
    echo "## About\n\n";
    echo "Visit {$site_url} to learn more.\n\n";
    echo "## Main Sections\n\n";
    echo "- [Home]({$site_url})\n";
    echo "- [Blog]({$site_url}blog/)\n";

    exit;
}
