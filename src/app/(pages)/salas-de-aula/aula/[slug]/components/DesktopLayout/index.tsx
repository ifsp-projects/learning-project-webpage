import { Container } from '@/components/toolkit/Container'

import { ContentContainer } from './ContentContainer'
import { Sidebar } from './Sidebar'

export const ClassDesktopLayout: React.FC = () => {
  return (
    <main className="hidden justify-between lg:flex">
      <Container
        as="section"
        className="w-full max-w-full"
        data-cid="classroom-desktop"
        wrapperClassName="max-w-full w-full"
        disableSidePadding
      >
        <div className="flex w-full">
          <Sidebar />
          <ContentContainer />
        </div>
      </Container>
    </main>
  )
}
