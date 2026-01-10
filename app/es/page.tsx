import { HomeContent } from '@/components/HomeContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: 'Portafolio de Gonzalo',
    },
}

export default function PersonalEs() {
    return <HomeContent />
}
