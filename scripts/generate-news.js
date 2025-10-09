const fs = require("fs");
const path = require("path");

async function extractMetadata(url) {
  try {
    console.log(`Fetching metadata for: ${url}`);

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Sec-Ch-Ua": '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"macOS"',
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1"
      },
    });

    if (!response.ok) {
      console.warn(`⚠️  HTTP ${response.status} for ${url} - using fallback data`);
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }

    const html = await response.text();

    // Extract title
    const titleMatch =
      html.match(/<title[^>]*>([^<]+)<\/title>/i) ||
      html.match(
        /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      );

    // Extract description
    const descriptionMatch =
      html.match(
        /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      ) ||
      html.match(
        /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      );

    // Extract image
    const imageMatch =
      html.match(
        /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      ) ||
      html.match(
        /<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      );

    // Extract domain
    const domain = new URL(url).hostname.replace("www.", "");

    const title = titleMatch
      ? titleMatch[1]
          .trim()
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, "&")
          .replace(/&#x27;/g, "'")
      : "Article";
    const description = descriptionMatch
      ? descriptionMatch[1]
          .trim()
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, "&")
          .replace(/&#x27;/g, "'")
      : "No description available";
    const image = imageMatch ? imageMatch[1].trim() : null;

    return {
      title,
      description,
      image,
      domain,
      publishDate: new Date().toISOString().split("T")[0],
    };
  } catch (error) {
    console.error(`❌ Error extracting metadata from ${url}:`, error.message);

    // Enhanced fallback data with better titles based on URL
    const domain = new URL(url).hostname.replace("www.", "");
    const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
    
    // Try to create a better title from URL path
    let fallbackTitle = "Article";
    if (pathSegments.length > 0) {
      fallbackTitle = pathSegments[pathSegments.length - 1]
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/\.[^/.]+$/, ""); // Remove file extension if present
    }

    return {
      title: fallbackTitle || "Article",
      description: `Article from ${domain} - Content temporarily unavailable`,
      image: null,
      domain,
      publishDate: new Date().toISOString().split("T")[0],
      error: true, // Flag to indicate this used fallback data
    };
  }
}

async function generateStaticNews() {
  try {
    // Read the news JSON file
    const newsFilePath = path.join(__dirname, "..", "data", "news.json");
    const newsData = JSON.parse(fs.readFileSync(newsFilePath, "utf8"));

    console.log(`Processing ${newsData.length} articles...`);

    // Extract metadata for each URL
    const enrichedData = [];
    let successCount = 0;
    let errorCount = 0;

    for (const item of newsData) {
      console.log(`\n📰 Processing article ${enrichedData.length + 1}/${newsData.length}`);
      
      const metadata = await extractMetadata(item.url);

      enrichedData.push({
        ...item,
        ...metadata,
      });

      if (metadata.error) {
        errorCount++;
        console.log(`⚠️  Used fallback data for: ${item.url}`);
      } else {
        successCount++;
        console.log(`✅ Successfully extracted: ${metadata.title}`);
      }

      // Add a delay to be respectful to servers and avoid rate limiting
      if (enrichedData.length < newsData.length) {
        console.log(`⏳ Waiting 3 seconds before next request...`);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }

    // Write the enriched data to a new file
    const outputPath = path.join(__dirname, "..", "data", "enriched-news.json");
    fs.writeFileSync(outputPath, JSON.stringify(enrichedData, null, 2));

    console.log(`\n🎉 Generated enriched news data: ${outputPath}`);
    console.log(`� Processing Summary:`);
    console.log(`   • Total articles: ${enrichedData.length}`);
    console.log(`   • Successfully extracted: ${successCount}`);
    console.log(`   • Used fallback data: ${errorCount}`);
    
    if (errorCount > 0) {
      console.log(`\n💡 Note: ${errorCount} article(s) used fallback data due to website restrictions.`);
      console.log(`   This is normal for sites with bot protection (403/429 errors).`);
    }

    return enrichedData;
  } catch (error) {
    console.error("❌ Error generating static news:", error);
    return [];
  }
}

// Run if called directly
if (require.main === module) {
  generateStaticNews();
}

module.exports = { generateStaticNews, extractMetadata };
