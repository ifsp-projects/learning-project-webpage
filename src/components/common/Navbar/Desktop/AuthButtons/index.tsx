'use client'

import { signIn } from 'next-auth/react'

import { ModalButton } from '@/components/common/ModalButton'

export const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <ModalButton
        className="md:text-sm"
        customEventData={{ action: 'close' }}
        customEventVariant="auth-modal-event"
        onClick={() => signIn('credentials', { callbackUrl: '/' })}
        variant="primaryOutline"
      >
        Entrar
      </ModalButton>
      <ModalButton
        className="md:text-sm"
        customEventData={{ action: 'close' }}
        customEventVariant="auth-modal-event"
      >
        Criar Conta
      </ModalButton>
    </div>
  )
}
