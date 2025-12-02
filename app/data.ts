type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  youtube?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Entrenar.app',
    description:
      'Web app for UNC students to track workouts with personalized routines and social features. Built with Go, React, and Supabase.',
    link: 'https://entrenar.app/',
    image: '/entrenar-app.png',
    id: 'project1',
  },
  {
    name: 'Alianza La Libertad Avanza Córdoba',
    description: 'Website for LLA admins and editors to publish resolutions and statements. Built with Nuxt 3, Tailwind CSS, and Nuxt Content.',
    link: 'https://www.alianzalalibertadavanzacordoba.com.ar/admin/secure-login/',
    youtube:
      'qX0PC89YqlY',
    id: 'project2',
  },
  {
    name: 'Moovimiento.com',
    description:
      'Modern landing page for a custom nut mix business featuring checkout integration. Built with Next.js 14, TypeScript, and Tailwind CSS.',
    link: 'https://moovimiento.com',
    image: '/moovimiento-com.png',
    id: 'project3',
  },
  {
    name: 'Algoritmos1.com',
    description:
      'Academic portal for Algoritmos I students at FAMAF UNC to access resources and exam tools. Built with Astro.js.',
    link: 'https://algoritmos1.com',
    image: '/algoritmos1-com.png',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Catsule Corp',
    title: 'Full Stack Web Developer',
    start: '2024',
    end: 'Present',
    link: '/work/full-stack-web-developer',
    id: 'work1',
  },
  {
    company: 'Stämm Biotech',
    title: 'Help Desk Specialist',
    start: '2023',
    end: '2024',
    link: '/work/help-desk-specialist',
    id: 'work2',
  },
  {
    company: 'Molecule Protocol',
    title: 'Video and Podcast Editor',
    start: '2022',
    end: '2023',
    link: '/work/video-and-podcast-editor',
    id: 'work3',
  },
]

export const EDUCATION: WorkExperience[] = [
  {
    company: 'Universidad de la Defensa Nacional',
    title: 'Cyberdefense',
    start: '2025',
    end: 'Present',
    link: '/education/cyberdefense',
    id: 'edu1',
  },
  {
    company: 'Universidad Nacional de Córdoba',
    title: 'Computer Science',
    start: '2024',
    end: '2025',
    link: '/education/computer-science',
    id: 'edu2',
  },
  {
    company: 'Professional Google Career Certificates',
    title: 'IT Support & Cybersecurity',
    start: '2022',
    end: '2023',
    link: '/education/it-support-and-cybersecurity',
    id: 'edu3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Hacking Through the Holidays: My Advent of Cyber 2025 Experience',
    description: 'A daily journey through TryHackMe\'s cybersecurity challenges, learning new skills and solving puzzles.',
    link: '/blog/advent-of-cyber-2025',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/gonzalogramagia',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/ciberportero',
  },
  {
    label: 'Youtube',
    link: 'https://www.youtube.com/@ciberportero',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gonzalogramagia',
  }
]

export const EMAIL = 'ciberportero@gmail.com'
