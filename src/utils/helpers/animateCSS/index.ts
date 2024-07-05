'use client'

export const animateCSS = async (element, animation, prefix = 'animate__') => {
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
      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation()
        node.classList.remove(`${prefix}animated`, animationName)
        node.removeEventListener('animationend', handleAnimationEnd)
        resolve('Animation ended')
      }

      node.addEventListener('animationend', handleAnimationEnd, {
        once: true
      })
    })
  } catch (error) {
    console.error(error)
  }
}
