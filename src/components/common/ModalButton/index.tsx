'use client'

import { Button } from '@/components/toolkit/Button'
import { CustomEvents } from '@/types/customEvents/customEvents'
import { triggerCustomEvent } from '@/utils/events/triggerCustomEvent'

import { ModalButtonProps } from './types'

export const ModalButton = <K extends keyof CustomEvents>(
  props: ModalButtonProps<K>
) => {
  const { children, onClick, customEventData, customEventVariant, ...rest } =
    props

  return (
    <Button
      onClick={event => {
        triggerCustomEvent({
          eventName: customEventVariant,
          data: customEventData
        })
        if (onClick) onClick(event)
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
