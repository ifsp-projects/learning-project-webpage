import { BsYoutube } from 'react-icons/bs'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import { Container } from '@/components/toolkit/Container'

export const ContactWithUs: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex flex-col gap-8 py-12 lg:gap-16 lg:py-20"
      data-cid="quem-somos-socials"
      wrapperClassName="bg-white"
    >
      <ul className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4">
        <li className="item-center flex cursor-pointer justify-between gap-3 rounded-sm bg-slate-900 p-4 transition-all duration-300 hover:brightness-125">
          <figure className="w-auto">
            <FaInstagram fill="#fff" size={24} />
          </figure>
          <p className="w-full text-sm font-semibold text-white lg:text-base">
            Instagram
          </p>
        </li>
        <li className="item-center flex cursor-pointer justify-between gap-3 rounded-sm bg-slate-900 p-4 transition-all duration-300 hover:brightness-125">
          <figure className="w-auto">
            <BsYoutube fill="#fff" size={24} />
          </figure>
          <p className="w-full text-sm font-semibold text-white lg:text-base">
            Youtube
          </p>
        </li>
        <li className="item-center flex cursor-pointer justify-between gap-3 rounded-sm bg-slate-900 p-4 transition-all duration-300 hover:brightness-125">
          <figure className="w-auto">
            <FaFacebookSquare fill="#fff" size={24} />
          </figure>
          <p className="w-full text-sm font-semibold text-white lg:text-base">
            Facebook
          </p>
        </li>
        <li className="item-center flex cursor-pointer justify-between gap-3 rounded-sm bg-slate-900 p-4 transition-all duration-300 hover:brightness-125">
          <figure className="w-auto">
            <FaXTwitter fill="#fff" size={24} />
          </figure>
          <p className="w-full text-sm font-semibold text-white lg:text-base">
            Twitter (X)
          </p>
        </li>
      </ul>
    </Container>
  )
}
