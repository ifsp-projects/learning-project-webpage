import { ButtonProps } from '@/components/toolkit/Button/types'
import { CustomEvents } from '@/types/customEvents/customEvents'

export interface ModalButtonProps<
  TCustomEventVariant extends keyof CustomEvents
> extends ButtonProps {
  customEventData: CustomEvents[TCustomEventVariant]
  customEventVariant: TCustomEventVariant
}
