import fs from "fs";
import path from "path";

const baseUrl = "https://wta-fe.web.app";
const routesDir = "./src/routes";

function getRoutes(dir, base = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let routes = [];

  for (const entry of entries) {
    const name = entry.name;

    // Skip special files/folders
    if (name.startsWith("+") === false && entry.isFile()) continue;

    if (name.startsWith("(")) continue; // group folders
    if (name.startsWith("_")) continue; // private
    if (name.startsWith("[")) continue; // dynamic

    const fullPath = path.join(dir, name);

    if (entry.isDirectory()) {
      routes = routes.concat(getRoutes(fullPath, `${base}/${name}`));
    }

    if (name === "+page.svelte") {
      routes.push(base || "/");
    }
  }

  return routes;
}

function generateSitemap() {
  const routes = getRoutes(routesDir);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>
`,
  )
  .join("")}
</urlset>`;

  fs.writeFileSync("./static/sitemap.xml", xml);

  console.log("sitemap.xml generated");
}

generateSitemap();
