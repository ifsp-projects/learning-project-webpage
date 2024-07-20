import { forwardRef } from 'react'

import { Input } from '../../Input'
// import { ErrorField } from '../ErrorField'
import { LabelField } from '../LabelField'
import { InputFieldProps } from './types'

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, errorMessage, required, variant, ...props }, ref) => {
    return (
      <fieldset className="mb-3 flex flex-col gap-1" data-cid="input-field">
        <LabelField
          id={id || 'default'}
          isRequired={required}
          label={label}
          variant={variant}
        />

        <Input id={id} ref={ref} variant={variant} {...props} />

        {/* <ErrorField
          errorMessage={errorMessage || 'Preencha esse campo corretamente'}
        /> */}
      </fieldset>
    )
  }
)

InputField.displayName = 'InputField'
