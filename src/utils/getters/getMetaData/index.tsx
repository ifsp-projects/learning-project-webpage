import { Metadata } from 'next'
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'

interface GetMataDataProps {
  type?: OpenGraphType
  opengraph: string
  title: string
  description: string
}

export const getMetaData = ({
  title,
  description,
  opengraph,
  type = 'website'
}: GetMataDataProps): Metadata => {
  const images = [opengraph]

  return {
    title,
    description,
    openGraph: {
      type,
      images,
      title,
      description
    }
  }
}
