import * as fs from 'fs'

import { generateSitemap } from './generateSitemap'

const sitemapBuilder = async () => {
  const lastModified = new Date()

  const sitemapResponse = await generateSitemap('pt', lastModified)
  fs.writeFileSync(`public/sitemap.xml`, sitemapResponse)
}

sitemapBuilder()
