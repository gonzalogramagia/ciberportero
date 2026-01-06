'use client'

import Link from 'next/link'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/i18n/translations'

export function Header() {
  const { language } = useLanguage()
  const t = translations[language]

  const homeLink = language === 'es' ? '/es' : '/'

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href={homeLink} className="font-medium text-black dark:text-white">
          Gonzalo Gramaglia
        </Link>
        <Link href={homeLink} className="cursor-pointer block">
          <p className="text-zinc-600 dark:text-zinc-500">
            {t.role}
          </p>
        </Link>
      </div>
      <LanguageSwitch />
    </header>
  )
}
