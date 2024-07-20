import * as yup from 'yup'

import { DEFAULT_MESSAGES_ERRORS } from '@/constants/errors/defaultMessageErrors'

export const CreateClassroomFormSchema = () => {
  const messageErrors = DEFAULT_MESSAGES_ERRORS

  return yup.object().shape({
    name: yup.string().required(messageErrors.requiredField),
    description: yup.string().required(messageErrors.requiredField),
    instituition: yup.string().required(messageErrors.requiredField),
    period: yup.string().required(messageErrors.requiredField)
  })
}
