export type ExtractArrayType<T> = T extends (infer U)[] ? U : never
