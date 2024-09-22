'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/toolkit/Button'
import { Modal } from '@/components/toolkit/Modal'

import { FormDataProps } from './types'

export const AuthModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormDataProps>({
    email: '',
    password: ''
  })

  const handleLoginWithCredentials = async () => {
    try {
      setIsLoading(true)

      if (!formData.email) {
        toast.error('É necessário inserir um email para realizar o login!')
        return
      }

      if (!formData.password) {
        toast.error('É necessário inserir uma senha para realizar o login!')
        return
      }

      const response = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password
      })

      if (response?.error) {
        toast.error('Falha na autenticação. Verifique suas credenciais.')
      }
    } catch (error) {
      console.error(`There was an error when trying to authenticate: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const handleCustomEvent = (event: CustomEvent) => {
      const { action } = event.detail

      if (action === 'open') {
        setIsModalOpen(true)
      } else if (action === 'close') {
        setIsModalOpen(false)
      }
    }

    document.addEventListener(
      'auth-modal-event',
      handleCustomEvent as EventListener
    )

    return () => {
      document.removeEventListener(
        'auth-modal-event',
        handleCustomEvent as EventListener
      )
    }
  }, [])

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div className="flex w-full min-w-[500px] max-w-5xl justify-between bg-white">
        <figure className="h-full w-full">
          <Image
            alt="People Studying"
            className="min-h-[520px] w-full object-cover"
            height={4000}
            src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?cs=srgb&dl=pexels-lilartsy-1925536.jpg&fm=jpg"
            width={6000}
          />
        </figure>
        <section className="flex w-full flex-col gap-8 px-6 py-12">
          <article className="flex w-full flex-col">
            <h2 className="text-xl font-semibold lg:text-2xl">
              Learning Platform
            </h2>
            <p className="text-sm text-slate-500">
              Bem-vindo à nossa plataforma! Faça seu login e comece a usufruir
              de nossos serviços agora mesmo.
            </p>
          </article>
          <form className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-col gap-1">
              <label className="text-sm" htmlFor="email">
                Seu email
              </label>
              <input
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                autoComplete="off"
                className="border border-b border-slate-300 bg-white p-2 py-[0.40rem] text-sm outline-none duration-300 focus:border-indigo-500"
                id="email"
                maxLength={60}
                minLength={10}
                name="email"
                placeholder="Insira o seu email"
                type="text"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-1">
              <label className="text-sm" htmlFor="password">
                Senha do Usuário
              </label>
              <input
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
                autoComplete="off"
                className="border border-b border-slate-300 bg-white p-2 py-[0.40rem] text-sm outline-none duration-300 focus:border-indigo-500"
                id="password"
                maxLength={60}
                minLength={10}
                name="password"
                placeholder="Insira a sua senha"
                type="password"
                required
              />
            </div>
            <Button
              className="mt-2 min-w-full md:text-sm"
              isLoading={isLoading}
              onClick={() => handleLoginWithCredentials()}
            >
              Entrar
            </Button>
          </form>
          <p className="w-full text-center text-xs text-slate-500">ou</p>
          <div
            className="flex w-full cursor-pointer items-center gap-3 rounded-sm border border-slate-300 p-2 transition-all duration-300 hover:bg-slate-50"
            onClick={() => signIn('google')}
          >
            <figure className="w-auto border-r border-slate-300 pr-2">
              <Image
                alt="Google Icon"
                height={28}
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                width={28}
              />
            </figure>
            <p className="text-sm text-slate-600">Continuar com o Google</p>
          </div>
        </section>
      </div>
    </Modal>
  )
}
