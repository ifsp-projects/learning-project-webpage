export const subscribeGoogleTag = (window: Window, event: string) => {
  const eventName = `${event}`

  window.dataLayer.push({
    event: eventName
  })
}
