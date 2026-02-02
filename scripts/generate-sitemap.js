// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

const BASE_URL = "https://www.opuspaintfranchise.com";
const today = new Date().toISOString().split("T")[0];

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0, lastmod: today },
  { url: "/about-us", changefreq: "monthly", priority: 0.8, lastmod: today },
  { url: "/contact", changefreq: "monthly", priority: 0.8, lastmod: today },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.3, lastmod: today },
  { url: "/terms-and-conditions", changefreq: "yearly", priority: 0.3, lastmod: today },
  // ❌ recommended to remove thankyou from sitemap
  // { url: "/thankyou", changefreq: "yearly", priority: 0.1, lastmod: today },
];

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    routes.forEach((route) => sitemap.write(route));
    sitemap.end();

    const xml = await streamToPromise(sitemap);

    const publicDir = path.resolve(__dirname, "..", "public");
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

    fs.writeFileSync(
      path.join(publicDir, "sitemap.xml"),
      xml.toString(),
      "utf8"
    );

    console.log("✅ Sitemap generated with <lastmod>");
    process.exit(0);
  } catch (error) {
    console.error("❌ Sitemap generation error:", error);
    process.exit(1);
  }
})();
