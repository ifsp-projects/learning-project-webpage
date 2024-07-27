import { Container } from '@/components/toolkit/Container'
import { CLASSROOM_NAVBAR_LINKS } from './data'

export const ClassroomNavbar: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 p-4 lg:p-8"
      data-cid="classroom-navbar"
    >
      <ul className="mx-auto flex w-full max-w-3xl items-center justify-between">
        {CLASSROOM_NAVBAR_LINKS.map((link: string, index: number) => (
          <li
            className="w-full cursor-pointer pb-2 text-center text-sm transition-all duration-300 first:border-b first:border-teal-600 first:font-semibold first:text-teal-600 hover:text-teal-600"
            key={`${link}-${index}`}
          >
            {link}
          </li>
        ))}
      </ul>
    </Container>
  )
}
