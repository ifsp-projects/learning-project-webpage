'use client'

export const animateCSS = async (
  element: string,
  animation: string,
  prefix?: string
) => {
  try {
    const animationName = `${prefix}${animation}`
    const node = document.querySelector(element)

    if (!node) {
      throw new Error(`Element with selector '${element}' not found.`)
    }

    const alreadyAnimated = node.classList.contains(`${prefix}animated`)
    const alreadyHasAnimation = node.classList.contains(animationName)

    if (!alreadyAnimated || !alreadyHasAnimation) {
      node.classList.add(`${prefix}animated`, animationName)
    }

    await new Promise(resolve => {
      function handleAnimationEnd(event: { stopPropagation: () => void }) {
        event.stopPropagation()
        if (node) {
          node.classList.remove(`${prefix}animated`, animationName)
          node.removeEventListener('animationend', handleAnimationEnd)
          resolve('Animation ended')
        }
      }

      node.addEventListener('animationend', handleAnimationEnd, {
        once: true
      })
    })
  } catch (error) {
    console.error(error)
  }
}
