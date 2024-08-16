import { ObjectItem } from './types'

export const getObjectLabel = (
  object: ObjectItem[]
): Record<string, string | undefined> => {
  const finalObj: Record<string, string | undefined> = {}

  object.forEach((obj: ObjectItem) => {
    finalObj[obj.value] = obj.name ?? obj.label
  })

  return finalObj
}
