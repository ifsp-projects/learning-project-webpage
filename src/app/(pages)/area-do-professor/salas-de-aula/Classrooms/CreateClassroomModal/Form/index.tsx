import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/common/Button'
import { InputField } from '@/components/toolkit/Fields/InputField'
import { SelectField } from '@/components/toolkit/Fields/SelectField'
import { Spin } from '@/components/toolkit/Spin'
import { yupResolver } from '@hookform/resolvers/yup'

import { CreateClassroomFormSchema } from './schemas'
import { CreateClassroomFormInputs } from './types'

export const Form: React.FC = () => {
  const formMethods = useForm<CreateClassroomFormInputs>({
    resolver: yupResolver(CreateClassroomFormSchema())
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = formMethods

  const onSubmit = async (values: CreateClassroomFormInputs) => {
    const data: CreateClassroomFormInputs = {
      name: values.name,
      description: values.description,
      instituition: values.instituition,
      period: values.period
    }

    console.log(`Mandar para API futuramente: ${data}`)

    if (isSubmitSuccessful) {
      toast.success('Sala de Aula criada com sucesso!')
    }
  }

  const schoolOptions = [
    { label: 'IFSP Capivari', value: 'ifsp_capivari' },
    { label: 'IFSP São Paulo', value: 'ifsp_sp' }
  ]

  const periodOptions = [
    { label: 'Manhã', value: 'morning' },
    { label: 'Tarde', value: 'afternoon' },
    { label: 'Noite', value: 'night' }
  ]

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        autoComplete="off"
        className="w-full"
        errorMessage={errors.name?.message}
        label="Nome da matéria"
        placeholder="Informe qual será a matéria lecionada"
        variant="secondary"
        {...register('name')}
      />
      <InputField
        autoComplete="off"
        className="w-full"
        label="Descrição"
        placeholder="Digite algo breve sobre a sua matéria"
        variant="secondary"
        {...register('description')}
      />
      <SelectField
        id="school"
        label="Instituição"
        options={schoolOptions}
        placeholder="Instituição de Ensino Pertencente"
        variant="secondary"
        {...register('instituition')}
      />
      <SelectField
        id="period"
        label="Período"
        options={periodOptions}
        placeholder="Digite o período que ocorrerão as aulas"
        variant="secondary"
        {...register('period')}
      />
      <Button className="mt-6 min-w-full" type="submit">
        {isSubmitting ? <Spin /> : 'Adicionar Sala'}
      </Button>
    </form>
  )
}
