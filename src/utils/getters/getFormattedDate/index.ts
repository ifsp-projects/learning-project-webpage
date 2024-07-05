export const getFormattedDate = (rawDate: string) => {
  const months = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez'
  ]

  const date = new Date(rawDate)
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  const formattedDay = day < 10 ? `0${day}` : `${day}`
  const formattedMonth = months[monthIndex]

  return `${formattedDay} ${formattedMonth}, ${year}`
}
