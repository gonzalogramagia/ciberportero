'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/context/LanguageContext'

export default function NotFound() {
    const { language } = useLanguage()
    const homeLink = language === 'es' ? '/es' : '/'

    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-medium">Page not found</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
                Could not find requested resource
            </p>
            <Link
                href={homeLink}
                className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
                Return Home
            </Link>
        </div>
    )
}
