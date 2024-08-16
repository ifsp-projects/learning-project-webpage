import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    './src/constants/paths/index.ts',
    './src/utils/helpers/generateSitemap/index.ts'
  ],
  format: ['cjs'],
  outDir: '.cjs'
})
