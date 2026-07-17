export default function HreflangTags({ pathname }: { pathname: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://buddha-wisdom.chat'
  const locales = ['en', 'ru', 'hi', 'es', 'fr', 'de', 'zh', 'ja']

  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${baseUrl}${pathname}?lang=${locale}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${pathname}`} />
    </>
  )
}
