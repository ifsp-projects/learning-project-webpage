/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fetchContent } from '@/utils/getters/croctFetchContent'

import {
  CroctComponentProps,
  CroctComponentTemplate,
  CroctComponentType
} from './types'

export const croctComponent = async <K extends keyof CroctComponentTemplate>(
  props: CroctComponentProps<K>
): Promise<CroctComponentType<K>> => {
  // @ts-ignore
  return await fetchContent(props.slotId, props.fallback)
}
