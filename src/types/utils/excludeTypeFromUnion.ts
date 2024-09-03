export type ExcludeTypeFromUnion<T, U> = T extends U ? never : T
