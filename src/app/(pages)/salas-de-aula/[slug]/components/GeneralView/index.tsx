import { Container } from '@/components/toolkit/Container'
import { CourseDescription } from './CourseDescription'
import { COURSE_DESCRIPTION } from './data'

export const GeneralView: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-4"
      data-cid="classroom-general-view"
    >
      <h2 className="text-lg font-semibold lg:text-xl">
        Algoritmos e Programação
      </h2>
      <CourseDescription htmlContent={COURSE_DESCRIPTION} />
    </Container>
  )
}
