import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: 'Portafolio de Gonzalo',
        template: '%s | Portafolio de Gonzalo',
    },
}

export default function SpanishLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
