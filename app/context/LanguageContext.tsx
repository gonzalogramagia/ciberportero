'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Language = 'en' | 'es'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        // Check URL first
        if (pathname?.startsWith('/es')) {
            setLanguage('es')
        } else {
            // If not /es, check localStorage or default to en
            const savedLanguage = localStorage.getItem('language') as Language
            if (savedLanguage === 'es' && !pathname?.startsWith('/es')) {
                // If saved is es but we are at /, maybe we should redirect? 
                // User said "default English", so maybe / should always be EN unless explicitly switched?
                // Let's stick to: URL dictates language if /es.
                // If / and saved is ES, maybe redirect to /es?
                // For now, let's let the URL be the source of truth for the current session if it's /es.
                // If it's /, we default to EN, unless we want to enforce persistence.
                // Let's keep it simple: /es -> ES, / -> EN.
                // But the switch should redirect.
            }
            setLanguage('en')
        }
    }, [pathname])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem('language', lang)

        // Redirect based on language
        if (lang === 'es' && !pathname?.startsWith('/es')) {
            router.push(`/es${pathname}`)
        } else if (lang === 'en' && pathname?.startsWith('/es')) {
            const newPath = pathname.replace('/es', '')
            router.push(newPath || '/')
        }
    }

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'es' : 'en'
        handleSetLanguage(newLang)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
