export const generateLoop = (slidesData: unknown[], maxLength: number) => {
  if (slidesData.length > 0) {
    const repeatCount = Math.ceil(maxLength / slidesData.length)
    return Array.from(
      { length: repeatCount * slidesData.length },
      (_, index) => slidesData[index % slidesData.length]
    )
  }
}
