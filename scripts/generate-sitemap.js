// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

const BASE_URL = "https://www.opuspaintfranchise.com";

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/privacy-policy", changefreq: "monthly", priority: 0.8 },
  { url: "/terms-and-conditions", changefreq: "monthly", priority: 0.8 },
  { url: "/thankyou", changefreq: "yearly", priority: 0.3 },
];

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: BASE_URL });
    routes.forEach((route) => sitemap.write(route));
    sitemap.end();

    const xml = await streamToPromise(sitemap);

    // Ensure public directory exists
    const publicDir = path.resolve(__dirname, "..", "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    const publicPath = path.join(publicDir, "sitemap.xml");
    fs.writeFileSync(publicPath, xml.toString(), "utf8");

    console.log("✅ Sitemap generated at:", publicPath);
    process.exit(0);
  } catch (error) {
    console.error("❌ Sitemap generation error:", error);
    process.exit(1);
  }
})();
