'use client'

import { useState, useEffect } from 'react'

type Category = 'All' | 'Blue Team' | 'Red Team' | 'Web Security' | 'AI Security' | 'Systems & Cloud' | 'General'

interface ChallengeData {
    day: number
    title: string
    category: Category
}

export const challenges: ChallengeData[] = [
    { day: 1, title: 'Linux CLI - Shells Bells', category: 'Systems & Cloud' },
    { day: 2, title: 'Phishing - Merry Clickmas', category: 'Red Team' },
    { day: 3, title: 'Splunk Basics - Did you SIEM?', category: 'Blue Team' },
    { day: 4, title: 'AI in Security - old sAInt nick', category: 'AI Security' },
    { day: 5, title: 'Web Security - It’s Dangerously Obvious', category: 'Web Security' },
    { day: 6, title: 'Malware Analysis - Principles', category: 'Blue Team' },
    { day: 7, title: 'Network Discovery - Scan-ta Clause', category: 'Red Team' },
    { day: 8, title: 'Prompt Injection - Sched-yule Conflict', category: 'AI Security' },
    { day: 9, title: 'Passwords - A Cracking Christmas', category: 'Red Team' },
    { day: 10, title: 'SOC Alert Triaging - Tinsel Triage', category: 'Blue Team' },
    { day: 11, title: 'XSS - Merry XSSMas', category: 'Web Security' },
    { day: 12, title: 'Phishing - Phishmas Greetings', category: 'Blue Team' },
    { day: 13, title: 'YARA Rules - YARA mean one!', category: 'Blue Team' },
    { day: 14, title: 'Containers - DoorDasher\'s Demise', category: 'Systems & Cloud' },
    { day: 15, title: 'Web Attack Forensics - Drone Alone', category: 'Blue Team' },
    { day: 16, title: 'Forensics - Registry Furensics', category: 'Blue Team' },
    { day: 17, title: 'CyberChef - Hoperation Save McSkidy', category: 'General' },
    { day: 18, title: 'Obfuscation - The Egg Shell File', category: 'General' },
    { day: 19, title: 'ICS/Modbus - Claus for Concern', category: 'Systems & Cloud' },
    { day: 20, title: 'Race Conditions - Toy to The World', category: 'Web Security' },
    { day: 21, title: 'Malware Analysis - Malhare.exe', category: 'Blue Team' },
    { day: 22, title: 'C2 Detection - Command & Carol', category: 'Blue Team' },
    { day: 23, title: 'AWS Security - S3cret Santa', category: 'Systems & Cloud' },
    { day: 24, title: 'Exploitation with cURL - Hoperation Eggsploit', category: 'Red Team' },
]

export function AdventNav() {
    const [activeCategory, setActiveCategory] = useState<Category>('All')

    useEffect(() => {
        const handleFilterChange = (e: CustomEvent) => {
            setActiveCategory(e.detail as Category)
        }
        window.addEventListener('advent-filter-change', handleFilterChange as EventListener)
        return () => {
            window.removeEventListener('advent-filter-change', handleFilterChange as EventListener)
        }
    }, [])

    const categories: Category[] = ['All', 'Blue Team', 'Red Team', 'Web Security', 'AI Security', 'Systems & Cloud', 'General']

    const filteredChallenges = activeCategory === 'All'
        ? challenges
        : challenges.filter(c => c.category === activeCategory)

    return (
        <div className="my-8 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-4">Navegador de Desafíos</h3>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => {
                            // Dispatch event to sync all Navs and Sections
                            window.dispatchEvent(new CustomEvent('advent-filter-change', { detail: cat }))
                        }}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${activeCategory === cat
                            ? 'bg-blue-600 text-white'
                            : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Index Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {filteredChallenges.map(challenge => (
                    <a
                        key={challenge.day}
                        href={`#day-${challenge.day}`}
                        className="flex items-center p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-sm"
                    >
                        <span className="font-mono font-bold w-8 text-blue-600 dark:text-blue-400">
                            {String(challenge.day).padStart(2, '0')}
                        </span>
                        <span className="truncate text-zinc-700 dark:text-zinc-300">
                            {challenge.title.split(' - ')[1] || challenge.title}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export function DaySection({ day, children }: { day: number, children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleFilterChange = (e: CustomEvent) => {
            const category = e.detail as Category
            const challenge = challenges.find(c => c.day === day)
            if (!challenge) return

            if (category === 'All' || challenge.category === category) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('advent-filter-change', handleFilterChange as EventListener)
        return () => {
            window.removeEventListener('advent-filter-change', handleFilterChange as EventListener)
        }
    }, [day])

    if (!isVisible) return null

    return (
        <div id={`day-${day}`} className="scroll-mt-24 animate-in fade-in duration-500">
            {children}
        </div>
    )
}
