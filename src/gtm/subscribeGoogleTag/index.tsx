export const subscribeGoogleTag = (window: any, event: string) => {
  const eventName = `${event}`

  window.dataLayer.push({
    event: eventName
  })
}
