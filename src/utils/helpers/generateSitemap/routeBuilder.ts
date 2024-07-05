export const routeBuilder = (route, lastModified, priority) =>
  `<url><loc>${route}</loc><lastmod>${lastModified}</lastmod><priority>${priority}</priority></url>`
