'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/toolkit/Button'

export const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Button
        className="md:text-sm"
        onClick={() => signIn('credentials', { callbackUrl: '/' })}
        variant="primaryOutline"
      >
        Entrar
      </Button>
      <Button className="md:text-sm">Criar Conta</Button>
    </div>
  )
}
