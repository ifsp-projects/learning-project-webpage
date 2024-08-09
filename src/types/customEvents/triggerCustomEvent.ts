import { CommonCustomEventsProps } from './common'
import { CustomEvents } from './customEvents'

export interface TriggerCustomEventProps<EventName extends keyof CustomEvents>
  extends CommonCustomEventsProps<EventName> {
  data: CustomEvents[EventName]
}
