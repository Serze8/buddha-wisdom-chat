export type Bi<T = string> = { ru: T; en: T }

export function l<T>(bilingual: Bi<T>, lang: 'ru' | 'en'): T {
  return bilingual[lang]
}
