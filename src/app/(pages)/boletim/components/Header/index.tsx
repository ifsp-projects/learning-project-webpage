import Image from 'next/image'
import React from 'react'

import { Container } from '../../../../../components/toolkit/Container'
import { Card } from '../Card'
import { userData } from './data'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = () => {
  const cellClass = 'mr-4 flex justify-end'

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
              height={200}
              src="https://via.placeholder.com/150"
              width={130}
            />
            <div className="ml-6 flex h-auto flex-col p-4">
              <table className="w-auto table-auto text-xl">
                <tbody className="p-4">
                  {userData.map((value, index) => {
                    return (
                      <tr
                        className="justify-between"
                        key={`${value} - ${index}`}
                      >
                        <td className={cellClass}>{value.label}</td>
                        <td className={value.className || ''}>{value.value}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </article>
        </main>
      </header>
    </Container>
  )
}
