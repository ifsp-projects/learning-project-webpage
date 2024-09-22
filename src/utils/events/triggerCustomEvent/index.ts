import { CustomEvents } from '@/types/customEvents/customEvents'
import { TriggerCustomEventProps } from '@/types/customEvents/triggerCustomEvent'

export const triggerCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  data
}: TriggerCustomEventProps<EventName>) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}
