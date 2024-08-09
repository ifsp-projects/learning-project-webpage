import { CommonCustomEventsProps, CustomEventHandler } from './common'
import { CustomEvents } from './customEvents'

export interface DeleteCustomEventProps<EventName extends keyof CustomEvents>
  extends CommonCustomEventsProps<EventName> {
  handler: CustomEventHandler
}
