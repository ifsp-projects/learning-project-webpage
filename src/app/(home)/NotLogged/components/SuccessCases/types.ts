// import { ButtonCopy } from "@/types/components/button"
import { ImageCopy } from '@/types/components/image'

export interface SuccessCaseProps {
  description: string
  profile: ImageCopy
  title: string
}

export interface SuccessCaseCardProps {
  copy: SuccessCaseProps
}
