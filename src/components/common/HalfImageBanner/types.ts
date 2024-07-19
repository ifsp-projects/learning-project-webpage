import { HTMLAttributes, PropsWithChildren } from 'react'

import { ImageCopy } from '@/types/components/image'

export interface HalfImageBannerProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  image: ImageCopy
}
