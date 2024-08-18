import { RefObject, useEffect, useMemo, useState } from 'react'

export const useIntersectionObserver = (
  options: IntersectionObserverInit,
  ref: RefObject<HTMLElement>
): boolean => {
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const optionsMemo = useMemo(() => {
    return options
  }, [options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo)
    const currentTarget = ref.current

    if (currentTarget) observer.observe(currentTarget)

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [ref, optionsMemo])

  return isVisible
}
