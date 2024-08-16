// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const routeBuilder = (route, lastModified, priority) =>
  `<url><loc>${route}</loc><lastmod>${lastModified}</lastmod><priority>${priority}</priority></url>`
