const fs = require("fs");
const path = require("path");

async function extractMetadata(url) {
  try {
    console.log(`Fetching metadata for: ${url}`);

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "Sec-Ch-Ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"macOS"',
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
      },
    });

    if (!response.ok) {
      console.warn(
        `⚠️  HTTP ${response.status} for ${url} - using fallback data`,
      );
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

    // Extract publication date - multiple patterns to catch different formats
    let publishDate = extractPublicationDate(html, url);

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
      publishDate,
    };
  } catch (error) {
    console.error(`❌ Error extracting metadata from ${url}:`, error.message);

    // Enhanced fallback data with better titles based on URL
    const domain = new URL(url).hostname.replace("www.", "");
    const pathSegments = new URL(url).pathname.split("/").filter(Boolean);

    // Try to create a better title from URL path
    let fallbackTitle = "Article";
    if (pathSegments.length > 0) {
      fallbackTitle = pathSegments[pathSegments.length - 1]
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
        .replace(/\.[^/.]+$/, ""); // Remove file extension if present
    }

    return {
      title: fallbackTitle || "Article",
      description: `Article from ${domain} - Content temporarily unavailable`,
      image: null,
      domain,
      publishDate: new Date().toISOString().split("T")[0], // Fallback to today's date
      error: true, // Flag to indicate this used fallback data
    };
  }
}

function extractPublicationDate(html, url) {
  // Multiple patterns to extract publication date in various formats
  const datePatterns = [
    // Open Graph publication time
    /<meta[^>]*property=["']article:published_time["'][^>]*content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]*property=["']og:published_time["'][^>]*content=["']([^"']+)["'][^>]*>/i,

    // Schema.org/JSON-LD datePublished
    /"datePublished"\s*:\s*"([^"]+)"/i,
    /"datePublished"\s*:\s*"([^"]*T[^"]*)"/i,

    // HTML meta tags
    /<meta[^>]*name=["']published["'][^>]*content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]*name=["']date["'][^>]*content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]*name=["']publish_date["'][^>]*content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]*name=["']DC\.date\.issued["'][^>]*content=["']([^"']+)["'][^>]*>/i,

    // HTML time element
    /<time[^>]*datetime=["']([^"']+)["'][^>]*>/i,
    /<time[^>]*datetime=["']([^"']*T[^"']*)["'][^>]*>/i,

    // Common date patterns in content
    /"publishDate"\s*:\s*"([^"]+)"/i,
    /"pubdate"\s*:\s*"([^"]+)"/i,

    // NewsArticle schema
    /"datePublished"\s*:\s*"([^"]{4}-[^"]{2}-[^"]{2})"/i,
  ];

  for (const pattern of datePatterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      const rawDate = match[1].trim();
      try {
        const parsedDate = new Date(rawDate);
        if (!isNaN(parsedDate.getTime())) {
          console.log(
            `📅 Found publication date: ${rawDate} -> ${
              parsedDate.toISOString().split("T")[0]
            }`,
          );
          return parsedDate.toISOString().split("T")[0];
        }
      } catch (e) {
        // Continue to next pattern if this one fails
        continue;
      }
    }
  }

  // Try to extract from JSON-LD structured data
  const jsonLdMatches = html.match(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  );
  if (jsonLdMatches) {
    for (const jsonLdScript of jsonLdMatches) {
      try {
        const jsonContent = jsonLdScript
          .replace(/<script[^>]*>|<\/script>/gi, "")
          .trim();
        const structuredData = JSON.parse(jsonContent);

        // Handle array of structured data
        const dataArray = Array.isArray(structuredData)
          ? structuredData
          : [structuredData];

        for (const data of dataArray) {
          const date =
            data.datePublished ||
            data.publishDate ||
            data.dateCreated ||
            (data.article && data.article.datePublished) ||
            (data.NewsArticle && data.NewsArticle.datePublished);

          if (date) {
            const parsedDate = new Date(date);
            if (!isNaN(parsedDate.getTime())) {
              console.log(`📅 Found publication date in JSON-LD: ${date}`);
              return parsedDate.toISOString().split("T")[0];
            }
          }
        }
      } catch (e) {
        // If JSON parsing fails, continue to next script
        continue;
      }
    }
  }

  // Fallback: Try to extract from URL patterns (common in news sites)
  const urlDatePatterns = [
    /(\d{4})[\/\-](\d{2})[\/\-](\d{2})/, // YYYY/MM/DD or YYYY-MM-DD
    /(\d{2})[\/\-](\d{2})[\/\-](\d{4})/, // MM/DD/YYYY or MM-DD-YYYY
  ];

  for (const pattern of urlDatePatterns) {
    const match = url.match(pattern);
    if (match) {
      let dateStr;
      if (match[0].includes("/")) {
        const parts = match[0].split("/");
        if (parts[0].length === 4) {
          dateStr = `${parts[0]}-${parts[1]}-${parts[2]}`; // YYYY-MM-DD
        } else {
          dateStr = `${parts[2]}-${parts[0]}-${parts[1]}`; // YYYY-MM-DD from MM/DD/YYYY
        }
      } else {
        const parts = match[0].split("-");
        if (parts[0].length === 4) {
          dateStr = match[0]; // YYYY-MM-DD
        } else {
          dateStr = `${parts[2]}-${parts[0]}-${parts[1]}`; // YYYY-MM-DD from MM-DD-YYYY
        }
      }

      try {
        const parsedDate = new Date(dateStr);
        if (!isNaN(parsedDate.getTime())) {
          console.log(`📅 Extracted publication date from URL: ${dateStr}`);
          return parsedDate.toISOString().split("T")[0];
        }
      } catch (e) {
        continue;
      }
    }
  }

  console.log(`❌ Could not extract publication date, using today's date`);
  return new Date().toISOString().split("T")[0]; // Final fallback
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
    let dateExtractedCount = 0;

    for (const item of newsData) {
      console.log(
        `\n📰 Processing article ${enrichedData.length + 1}/${newsData.length}`,
      );

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

        // Check if we got a real publication date (not today's date)
        const today = new Date().toISOString().split("T")[0];
        if (metadata.publishDate !== today) {
          dateExtractedCount++;
        }
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
    console.log(`📊 Processing Summary:`);
    console.log(`   • Total articles: ${enrichedData.length}`);
    console.log(`   • Successfully extracted: ${successCount}`);
    console.log(`   • Used fallback data: ${errorCount}`);
    console.log(`   • Actual publication dates found: ${dateExtractedCount}`);

    if (errorCount > 0) {
      console.log(
        `\n💡 Note: ${errorCount} article(s) used fallback data due to website restrictions.`,
      );
      console.log(
        `   This is normal for sites with bot protection (403/429 errors).`,
      );
    }

    return enrichedData;
  } catch (error) {
    console.error("❌ Error generating static news:", error);
    return [];
  }
}

// Run if called directly
// if (require.main === module) {
//   generateStaticNews();
// }

module.exports = {
  generateStaticNews,
  extractMetadata,
  extractPublicationDate,
};
