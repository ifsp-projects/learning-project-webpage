export const abbreviatePhrase = (phrase: string): string => {
  const words = phrase.split(' ')

  if (words.length < 2) {
    return phrase
  }

  const firstWordAbbreviated = words[0].substring(0, 3)
  const lastWordAbbreviated = words[words.length - 1]

  return `${firstWordAbbreviated}. ${lastWordAbbreviated}`
}
