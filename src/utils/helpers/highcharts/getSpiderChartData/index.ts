import { abbreviatePhrase } from '../abbreviatePhrase'
import { GetSpiderChartDataProps } from './types'

export const getSpiderChartData = ({
  categories,
  courses
}: GetSpiderChartDataProps) => {
  const disciplines = categories.find(
    ({ category }) => category === 'disciplines'
  )

  const labels = []
  const data = []

  if (disciplines) {
    disciplines.options.forEach(({ value, label }) => {
      labels.push(abbreviatePhrase(label.toUpperCase()))

      const coursesInThisCategory = courses.filter(course =>
        course.categories.disciplines.some(
          discipline => discipline.value === value
        )
      )

      data.push(coursesInThisCategory.length)
    })
  }

  return {
    labels,
    data
  }
}
