'use client'

import { useState, useEffect } from 'react'

type Category = 'All' | 'Math' | 'Strings' | 'Implementation' | 'Arrays'

interface ProblemData {
    id: number
    title: string
    category: Category
}

export const problems: ProblemData[] = [
    { id: 1, title: 'Watermelon', category: 'Math' },
    { id: 2, title: 'Way Too Long Words', category: 'Strings' },
    { id: 3, title: 'Team', category: 'Implementation' },
    { id: 4, title: 'Bit++', category: 'Implementation' },
    { id: 5, title: 'Next Round', category: 'Arrays' },
    { id: 6, title: 'Domino piling', category: 'Math' },
    { id: 7, title: 'Beautiful Matrix', category: 'Implementation' },
    { id: 8, title: 'Helpful Maths', category: 'Strings' },
    { id: 9, title: 'Soldier and Bananas', category: 'Math' },
]

export function CodeforcesNav() {
    const [activeCategory, setActiveCategory] = useState<Category>('All')

    useEffect(() => {
        const handleFilterChange = (e: CustomEvent) => {
            setActiveCategory(e.detail as Category)
        }
        window.addEventListener('codeforces-filter-change', handleFilterChange as EventListener)
        return () => {
            window.removeEventListener('codeforces-filter-change', handleFilterChange as EventListener)
        }
    }, [])

    const categories: Category[] = ['All', 'Math', 'Strings', 'Implementation', 'Arrays']

    const filteredProblems = activeCategory === 'All'
        ? problems
        : problems.filter(p => p.category === activeCategory)

    return (
        <div className="my-8 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-4">Problem Navigator</h3>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => {
                            window.dispatchEvent(new CustomEvent('codeforces-filter-change', { detail: cat }))
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
                {filteredProblems.map(problem => (
                    <a
                        key={problem.id}
                        href={`#problem-${problem.id}`}
                        className="flex items-center p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-sm"
                    >
                        <span className="font-mono font-bold w-8 text-blue-600 dark:text-blue-400">
                            {String(problem.id).padStart(2, '0')}
                        </span>
                        <span className="truncate text-zinc-700 dark:text-zinc-300">
                            {problem.title}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export function ProblemSection({ id, children }: { id: number, children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleFilterChange = (e: CustomEvent) => {
            const category = e.detail as Category
            const problem = problems.find(p => p.id === id)
            if (!problem) return

            if (category === 'All' || problem.category === category) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('codeforces-filter-change', handleFilterChange as EventListener)
        return () => {
            window.removeEventListener('codeforces-filter-change', handleFilterChange as EventListener)
        }
    }, [id])

    if (!isVisible) return null

    return (
        <div id={`problem-${id}`} className="scroll-mt-24 animate-in fade-in duration-500">
            {children}
        </div>
    )
}
