import { StrapiCourse } from '@/types/strapi/strapiCourse'
import { CategoryTranslated } from '@/utils/strapi/getAllCategoriesFilters/types'

export interface GetSpiderChartDataProps {
  categories: CategoryTranslated[]
  courses: StrapiCourse[]
}
