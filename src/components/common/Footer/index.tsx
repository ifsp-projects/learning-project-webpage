import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare
} from 'react-icons/fa'

import { footerLinks } from '@/constants/footer'

import { FooterData, FooterLink } from './types'

const Footer = () => {
  return (
    <footer className="absolute w-full">
      <div className="flex min-h-[360px] w-full flex-col gap-8 border-t border-slate-300 bg-slate-50 px-8 py-16">
        <article className="mx-auto w-full max-w-6xl">
          <span className="flex w-full cursor-pointer justify-start text-lg font-[700] lg:text-3xl">
            <span>#nomeProjeto</span>
          </span>
        </article>
        <article className="mx-auto w-full max-w-6xl flex-row">
          <div className="flex w-full flex-col gap-6 sm:mt-0 lg:flex-row">
            {footerLinks.map((link: FooterData, index: number) => (
              <div
                className="flex w-full min-w-[140px] flex-col gap-4 border-b border-slate-300 pb-4 text-base lg:border-transparent lg:pb-0"
                key={`${link.title}-${index}`}
              >
                <span className="text-base font-normal">{link.title}</span>
                {link.links.map((link: FooterLink, index: number) => (
                  <Link
                    className="text-sm text-slate-500"
                    href={link.href}
                    key={`${link.label}-${index}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex w-full min-w-[140px] flex-col gap-4 lg:gap-8">
              <span className="text-xl">Social Media</span>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quia perferendi!
              </p>
              <div className="flex items-center gap-2">
                <FaFacebookSquare fill="#334155" size={32} />
                <FaInstagramSquare fill="#334155" size={32} />
                <FaTwitterSquare fill="#334155" size={32} />
                <FaYoutubeSquare fill="#334155" size={32} />
                <FaGithubSquare fill="#334155" size={32} />
              </div>
              <figure className="w-full">
                <Image
                  src={
                    'https://vtp.ifsp.edu.br/images/CDI/Identidade_Visual/IFSP-VTP-Logo-Color-5.png'
                  }
                  alt="ifsp-logo"
                  height={80}
                  width={160}
                />
              </figure>
            </div>
          </div>
        </article>
      </div>
    </footer>
  )
}

export default Footer
