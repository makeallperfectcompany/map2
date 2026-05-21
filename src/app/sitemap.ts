import type { MetadataRoute } from "next";
import { getSitemapItems, SITE_URL } from "@/content/navigation/siteMap";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getSitemapItems().map((item) => ({
    url: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.changeFrequency ?? "monthly",
    priority: item.priority ?? 0.5,
  }));
}
