// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap"); // supports write({url, changefreq, priority}) [web:14]

const BASE_URL = "https://www.opuspaintsfranchise.com";

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about-us", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
  { url: "/terms-and-conditions", changefreq: "yearly", priority: 0.3 },
  { url: "/thankyou", changefreq: "yearly", priority: 0.1 }
];

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: BASE_URL });
    routes.forEach((route) => sitemap.write(route)); // { url, changefreq, priority } entries [web:14]
    sitemap.end();

    const xml = await streamToPromise(sitemap);

    const publicDir = path.resolve(__dirname, "..", "public");
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml.toString(), "utf8");
    console.log("✅ Sitemap generated in public/sitemap.xml");
    process.exit(0);
  } catch (error) {
    console.error("❌ Sitemap generation error:", error);
    process.exit(1);
  }
})();
