export const delay = async (ms: number) => {
  // eslint-disable-next-line promise/param-names
  await new Promise(r => setTimeout(r, ms))
}
