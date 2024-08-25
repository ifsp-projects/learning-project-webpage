export interface CollaboratorProps {
  company: string
  description: string
  github: string
  linkedin: string
  name: string
  profilePicture: string
  technologies: string[]
}

export type CompanyLogosProps = {
  [key: string]: string
}
