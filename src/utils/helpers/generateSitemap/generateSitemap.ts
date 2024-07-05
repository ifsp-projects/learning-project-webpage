import { homepageRouteBuilder } from './homepageRouteBuilder'
// import { postsRoutesBuilder } from './postsRoutesBuilder'
import { staticRoutesBuilder } from './staticRoutesBuilder'

export const generateSitemap = async (
  language,
  lastModified
) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${homepageRouteBuilder(language, lastModified)}
  ${staticRoutesBuilder(language, lastModified)}
  </urlset>
  `
