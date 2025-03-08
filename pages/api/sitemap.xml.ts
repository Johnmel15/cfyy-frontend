import { NextApiRequest, NextApiResponse } from "next";

const EXTERNAL_DATA_URL = "https://caring4youandyours.com/";

function generateSiteMap(pages: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${page}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>${page === "/" ? "daily" : "weekly"}</changefreq>
           <priority>${page === "/" ? "1.0" : "0.8"}</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // List of pages to include in sitemap
  const pages = [
    "/",
    "/about",
    "/services",
    "/team",
    "/contact-us",
    // Add more pages as needed
  ];

  return generateSiteMap(pages);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Generate the XML sitemap with the blog data
  const sitemap = SiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
