export interface EditableContentCardProps {
  card: Card
  handleSelectCard: (arg: number) => void
  isSelected: boolean
}

export interface Card {
  classes: number
  description: string
  id: number
  modules: number
  slug: string
  thumb?: string
  title: string
}
