/* eslint-disable @typescript-eslint/no-explicit-any */

export const getObjectLabel = (object: any[]) => {
  let finalObj = {}

  object.forEach(obj => {
    finalObj = {
      ...finalObj,
      [obj.value]: obj.name ?? obj.label
    }
  })

  return finalObj
}
