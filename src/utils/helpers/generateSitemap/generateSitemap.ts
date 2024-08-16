import { staticRoutesBuilder } from './staticRoutesBuilder'

export const generateSitemap = async (
  language: string,
  lastModified: Date
) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutesBuilder(language, lastModified)}
  </urlset>
  `
