import { Container } from '@/components/toolkit/Container'

import { CourseDescription } from './CourseDescription'
import { COURSE_DESCRIPTION } from './data'

// TODO = MELHORIAS VISUAIS NESSA SECTION (ESSA É PROVISÓRIA)
export const GeneralView: React.FC = () => {
  return (
    <Container as="section" data-cid="classroom-general-view">
      <section className="flex w-full flex-1 flex-col-reverse gap-8 rounded-sm border border-slate-300 bg-white px-4 py-8 lg:flex-row">
        <article className="flex w-full flex-col gap-4">
          <h2 className="text-lg font-semibold text-green-600 lg:text-xl">
            Algoritmos e Programação
          </h2>
          <CourseDescription htmlContent={COURSE_DESCRIPTION} />
        </article>
        {/* <figure className="group w-auto overflow-hidden">
          <Image
            alt="course-image"
            width={800}
            height={800}
            className="rounded-sm transition-all duration-300 selection:bg-transparent group-hover:scale-[1.01]"
            src="https://w0.peakpx.com/wallpaper/1021/487/HD-wallpaper-technology-code-programming-programmer.jpg"
          />
        </figure> */}
      </section>
    </Container>
  )
}
