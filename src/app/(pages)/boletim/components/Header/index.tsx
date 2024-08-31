import Image from 'next/image'
import React from 'react'

import { Container } from '../../../../../components/toolkit/Container'
import { Card } from '../Card'

interface headerProps {
  cpf: string
  curso: string
  matricula: string
  name: string
  periodo: string
  situacao: string
}

export const Header: React.FC<headerProps> = ({
  name,
  matricula,
  cpf,
  periodo,
  curso,
  situacao
}) => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:py-20"
      data-cid="my-classes"
    >
      <header className="mt-5">
        <Card />
        <main className="mt-11 flex flex-col">
          <h3 className="ml-5 flex text-2xl">Dados Gerais</h3>
          <article className="mt-10 flex flex-row">
            <Image
              alt="Foto de perfil"
              className="ml-4 max-h-40 rounded-full border-2"
              src="https://via.placeholder.com/150"
            />
            <div className="ml-6 flex h-auto flex-col p-4">
              <table className="w-auto table-auto text-xl">
                <tbody className="p-4">
                  <tr className="justify-between">
                    <td className="mr-4 flex justify-end">Nome:</td>
                    <td className=" ">{name}</td>
                  </tr>
                  <tr>
                    <td className="mr-4 flex justify-end">Matricula:</td>
                    <td className=" ">{matricula}</td>
                  </tr>
                  <tr className="justify-between">
                    <td className="mr-4 flex justify-end">CPF:</td>
                    <td className=" ">{cpf}</td>
                  </tr>
                  <tr>
                    <td className="mr-4 flex justify-end">Período:</td>
                    <td className=" ">{periodo}</td>
                  </tr>
                  <tr className="justify-between">
                    <td className="mr-4 flex justify-end">Curso:</td>
                    <td className=" ">{curso}</td>
                  </tr>
                  <tr>
                    <td className="mr-4 flex justify-end">Situação:</td>
                    <td className="text-green-400">{situacao}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </main>
      </header>
    </Container>
  )
}
