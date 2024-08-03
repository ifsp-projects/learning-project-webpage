import { About } from './About'
import { Activities } from './Activities'
import { Activity } from './Activity'
import { Statistics } from './Statistics'

export const ProfileDetails: React.FC = () => {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-4 lg:max-w-6xl">
      <About />
      <Statistics />
      <Activities />
      <Activity />
    </section>
  )
}
