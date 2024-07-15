import { ConstantOne } from '@/assets/achievements/ConstantOne'
import { ConstantThree } from '@/assets/achievements/ConstantThree'
import { ConstantTwo } from '@/assets/achievements/ConstantTwo'
import { DedicatedOne } from '@/assets/achievements/DedicatedOne'
import { DedicatedThree } from '@/assets/achievements/DedicatedThree'
import { DedicatedTwo } from '@/assets/achievements/DedicatedTwo'
import { Devoted } from '@/assets/achievements/Devoted'
import { LockedAchievement } from '@/assets/achievements/LockedAchievement'
import { MoreThanAYear } from '@/assets/achievements/MoreThanAYear'
import { Pioneer } from '@/assets/achievements/Pioneer'
import { Punctual } from '@/assets/achievements/Punctual'
import { Container } from '@/components/toolkit/Container'

export const Achievements: React.FC = () => {
  return (
    <Container
      data-cid="achievements-academy"
      as="section"
      className="w-full py-12 lg:py-20"
    >
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-wrap items-center gap-8">
          <ConstantOne className="w-28" />
          <ConstantTwo className="w-28" />
          <ConstantThree className="w-28" />
          <DedicatedOne className="w-28" />
          <DedicatedTwo className="w-28" />
          <DedicatedThree className="w-28" />
          <LockedAchievement className="w-28" />
          <MoreThanAYear className="w-28" />
          <Pioneer className="w-28" />
          <Devoted className="w-28" />
          <Punctual className="w-28" />
        </div>
      </div>
    </Container>
  )
}
