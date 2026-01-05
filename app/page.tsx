import { HomeContent } from '@/components/HomeContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Gonzalo's Portfolio",
}

export default function Personal() {
  return <HomeContent />
}
