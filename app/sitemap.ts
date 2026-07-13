import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://fiplex.co.tz"; return ["", "/technology", "/software", "/about"].map((path, index) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: (index === 0 ? "weekly" : "monthly") as "weekly" | "monthly", priority: index === 0 ? 1 : .8 })); }
