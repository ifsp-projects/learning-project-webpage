export interface CroctComponentTemplate {
  croctHeaderComponent: {
    fruit: string
  }
}

export type CroctComponentType<K extends keyof CroctComponentTemplate> =
  CroctComponentTemplate[K]

export interface CroctComponentProps<
  CroctComponentVariant extends keyof CroctComponentTemplate
> {
  fallback: CroctComponentType<CroctComponentVariant>
  slotId: CroctComponentVariant
}
