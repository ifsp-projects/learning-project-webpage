import { PdfIcon } from '@/app/(pages)/salas-de-aula/[slug]/components/icons/PDF'
import { WordIcon } from '@/app/(pages)/salas-de-aula/[slug]/components/icons/Word'

import { ArrowLeft } from '../../icons/ArrowLeft'
import { TAGS } from './data'

export const Sidebar: React.FC = () => {
  return (
    <section className="w-full max-w-[400px] overflow-y-auto border-r border-slate-200">
      <div className="flex flex-col gap-4 p-4 pt-6">
        <div className="flex cursor-pointer items-center gap-3">
          <figure>
            <ArrowLeft className="w-3 -rotate-90 text-slate-500" />
          </figure>
          <p className="text-sm text-slate-500">Voltar</p>
        </div>
        <article className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold lg:text-sm">
            Introdução a funções em C++
          </h2>
          <p className="text-sm text-slate-500">
            Módulo: Conceitos básicos de algoritmos
          </p>
        </article>
        <ul className="flex flex-wrap items-center gap-3">
          {TAGS.map((tag: string, index: number) => (
            <li
              className="rounded-sm border border-indigo-500 px-4 py-1 text-xs text-indigo-500"
              key={`${tag}-${index}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <article className="flex flex-col gap-4 border-t border-slate-200 p-4 pt-6">
        <p className="text-sm font-semibold lg:text-base">
          Materiais Complementares
        </p>
        <div className="-ml-2 flex flex-col">
          <div className="flex cursor-pointer items-center gap-3 p-2 transition-all duration-300 hover:bg-slate-100">
            <figure>
              <PdfIcon className="h-6 w-6" />
            </figure>
            <article className="flex flex-col">
              <p className="text-xs">Funções básicas do C++</p>
              <p className="text-xs text-slate-500">PDF</p>
            </article>
          </div>
          <div className="flex cursor-pointer items-center gap-3 p-2 transition-all duration-300 hover:bg-slate-100">
            <figure>
              <PdfIcon className="h-6 w-6" />
            </figure>
            <article className="flex flex-col">
              <p className="text-xs">Operadores Aritméticos em C++</p>
              <p className="text-xs text-slate-500">PDF</p>
            </article>
          </div>
          <div className="flex cursor-pointer items-center gap-3 p-2 transition-all duration-300 hover:bg-slate-100">
            <figure>
              <WordIcon className="h-6 w-6" />
            </figure>
            <article className="flex flex-col">
              <p className="text-xs">Atividades de Aula 31/07</p>
              <p className="text-xs text-slate-500">PDF</p>
            </article>
          </div>
        </div>
      </article>
    </section>
  )
}
