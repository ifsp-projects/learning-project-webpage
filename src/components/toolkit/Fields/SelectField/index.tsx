import { forwardRef } from 'react'

import { Select } from '../../Select'
// import { ErrorField } from '../ErrorField'
import { LabelField } from '../LabelField'
import { SelectFieldProps } from './types'

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ id, label, errorMessage, required, variant, ...props }, ref) => {
    return (
      <fieldset
        className="mb-3 flex w-full flex-col gap-1"
        data-cid="select-input"
      >
        <LabelField
          id={id || 'default'}
          isRequired={required}
          label={label}
          variant={variant}
        />

        <Select id={id} ref={ref} variant={variant} {...props} />

        {/* <ErrorField
          errorMessage={errorMessage || 'Preencha esse campo corretamente'}
        /> */}
      </fieldset>
    )
  }
)

SelectField.displayName = 'SelectField'
