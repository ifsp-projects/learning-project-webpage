import { CustomEvents } from './customEvents'

export type CustomEventHandler = (event: Event) => void

export interface CommonCustomEventsProps<EventName = keyof CustomEvents> {
  eventName: EventName
}
