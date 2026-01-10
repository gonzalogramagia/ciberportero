'use client'

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export function ScrollToBottom() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const toggleVisibility = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 100
            ) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        // Check initial state
        toggleVisibility()

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, 8, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.2 },
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: 'easeInOut',
                        },
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToBottom}
                    className="fixed bottom-8 right-8 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                    aria-label="Scroll to bottom"
                >
                    <ArrowDown className="h-5 w-5" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
