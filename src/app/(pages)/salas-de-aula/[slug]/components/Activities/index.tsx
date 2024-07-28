import { Container } from '@/components/toolkit/Container'

import { ActivityItem } from './ActivityItem'
import { ACTIVITIES } from './data'
import { Activity } from './types'

export const Activities: React.FC = () => {
  return (
    <Container as="section" data-cid="classroom-activities">
      <section className="flex w-full flex-col gap-8 rounded-sm border border-slate-300 bg-white px-4 py-8">
        <h2 className="text-lg font-semibold lg:text-xl">Atividades</h2>
        <div className="flex w-full flex-col">
          {ACTIVITIES.map((activity: Activity, index: number) => (
            <ActivityItem
              activity={activity}
              key={`${activity.title}-${index}`}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}
