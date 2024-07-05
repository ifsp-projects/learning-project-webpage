import * as fs from 'fs'

import { locales } from '@/constants/internationalization'

import { generateSitemap } from './generateSitemap'

const sitemapBuilder = async () => {
  const lastModified = new Date()
  locales.forEach(async lang => {
    const sitemapResponse = await generateSitemap(lang, lastModified)
    fs.writeFileSync(
      `public/sitemap${lang === 'pt' ? '' : '-' + lang}.xml`,
      sitemapResponse
    )
  })
}

sitemapBuilder()
