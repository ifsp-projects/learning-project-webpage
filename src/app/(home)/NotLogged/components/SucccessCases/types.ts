import { ImageCopy } from '@/types/components/image'

export interface SuccessCaseProps {
  description: string
  image: ImageCopy
  title: string
}

export interface SuccessCaseCardProps {
  copy: SuccessCaseProps
}
