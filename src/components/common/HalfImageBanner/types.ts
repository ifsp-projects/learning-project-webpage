import { ImageCopy } from '@/types/components/image'
import { HTMLAttributes, PropsWithChildren } from 'react'

export interface HalfImageBannerProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  image: ImageCopy
}
