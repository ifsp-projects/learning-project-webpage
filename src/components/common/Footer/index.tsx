import { footerLinks } from '@/constants/footer'
import Link from 'next/link'
import React from 'react'
import { FooterData, FooterLink } from './types'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare
} from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="absolute w-full">
      <div className="flex min-h-[360px] w-full flex-col gap-8 border-t border-slate-100 bg-slate-50 px-8 py-16">
        <article className="mx-auto w-full max-w-6xl">
          <span className="flex w-full cursor-pointer justify-start text-lg font-[700] lg:text-3xl">
            <span>#nomeProjeto</span>
          </span>
        </article>
        <article className="mx-auto w-full max-w-6xl flex-row">
          <ul className="flex w-full flex-wrap gap-6 sm:mt-0 sm:flex-nowrap">
            {footerLinks.map((link: FooterData, index: number) => (
              <li
                key={`${link.title}-${index}`}
                className="flex w-full min-w-[140px] flex-col items-center justify-center gap-4 text-base sm:items-start sm:justify-normal"
              >
                <span className="text-xl">{link.title}</span>
                {link.links.map((link: FooterLink, index: number) => (
                  <Link
                    key={`${link.label}-${index}`}
                    href={link.href}
                    className="text-sm text-slate-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </li>
            ))}
            <div className="flex w-full min-w-[140px] flex-col items-center justify-center gap-4 sm:items-start sm:justify-normal lg:gap-8">
              <span className="text-xl">Social Media</span>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quia perferendi!
              </p>
              <div className="flex items-center justify-center gap-2">
                <FaFacebookSquare size={32} fill="#334155" />
                <FaInstagramSquare size={32} fill="#334155" />
                <FaTwitterSquare size={32} fill="#334155" />
                <FaYoutubeSquare size={32} fill="#334155" />
                <FaGithubSquare size={32} fill="#334155" />
              </div>
              <figure>
                <Image
                  src={
                    'https://vtp.ifsp.edu.br/images/CDI/Identidade_Visual/IFSP-VTP-Logo-Color-5.png'
                  }
                  alt="ifsp-logo"
                  width={160}
                  height={80}
                />
              </figure>
            </div>
          </ul>
        </article>
      </div>
    </footer>
  )
}

export default Footer
