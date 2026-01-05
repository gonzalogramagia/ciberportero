type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  youtube?: string
  github?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  description?: string
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

export const PROJECTS_EN: Project[] = [
  {
    name: 'Entrenar.app',
    description:
      'Web app for UNC students to track workouts with personalized routines and social features. Built with Go, React, and Supabase.',
    link: 'https://entrenar.app/',
    image: '/entrenar-app.png',
    github: 'https://github.com/gonzalogramagia/entrenar',
    id: 'project1',
  },
  {
    name: 'Alianza La Libertad Avanza Córdoba',
    description: 'Website for LLA admins and editors to publish resolutions and statements. Built with Nuxt 3, Tailwind CSS, and Nuxt Content.',
    link: 'https://www.alianzalalibertadavanzacordoba.com.ar/admin/secure-login/',
    youtube:
      'qX0PC89YqlY',
    github: 'https://github.com/bouchardista/alianza-la-libertad-avanza',
    id: 'project2',
  },
  {
    name: 'Moovimiento.com',
    description:
      'Modern landing page for a custom nut mix business featuring checkout integration. Built with Next.js 14, TypeScript, and Tailwind CSS.',
    link: 'https://mas.moovimiento.com',
    image: '/moovimiento-com.png',
    github: 'https://github.com/moovimiento/mas',
    id: 'project3',
  },
  {
    name: 'Algoritmos1.com',
    description:
      'Academic portal for Algoritmos I students at FAMAF UNC to access resources and exam tools. Built with Astro.js.',
    link: 'https://algoritmos1.com',
    image: '/algoritmos1-com.png',
    github: 'https://github.com/gonzalogramagia/algoritmos',
    id: 'project4',
  },
]

export const PROJECTS_ES: Project[] = [
  {
    name: 'Entrenar.app',
    description:
      'Aplicación web para estudiantes de la UNC para seguimiento de entrenamientos con rutinas personalizadas y funciones sociales. Construido con Go, React y Supabase.',
    link: 'https://entrenar.app/',
    image: '/entrenar-app.png',
    github: 'https://github.com/gonzalogramagia/entrenar',
    id: 'project1',
  },
  {
    name: 'Alianza La Libertad Avanza Córdoba',
    description: 'Sitio web para que administradores y editores de LLA puedan publicar resoluciones y declaraciones. Construido con Nuxt 3, Tailwind CSS y Nuxt Content.',
    link: 'https://www.alianzalalibertadavanzacordoba.com.ar/admin/secure-login/',
    youtube:
      'qX0PC89YqlY',
    github: 'https://github.com/bouchardista/alianza-la-libertad-avanza',
    id: 'project2',
  },
  {
    name: 'Moovimiento.com',
    description:
      'Landing page moderna para un negocio de mix de frutos secos personalizados con integración de pago. Construido con Next.js 14, TypeScript y Tailwind CSS.',
    link: 'https://mas.moovimiento.com',
    image: '/moovimiento-com.png',
    github: 'https://github.com/moovimiento/mas',
    id: 'project3',
  },
  {
    name: 'Algoritmos1.com',
    description:
      'Portal académico para estudiantes de Algoritmos I en FAMAF UNC para acceder a recursos y herramientas de examen. Construido con Astro.js.',
    link: 'https://algoritmos1.com',
    image: '/algoritmos1-com.png',
    github: 'https://github.com/gonzalogramagia/algoritmos',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE_EN: WorkExperience[] = [
  {
    company: 'Catsule Corp',
    title: 'Full Stack Developer',
    start: '2024',
    end: 'Present',
    link: '/work/full-stack-developer',
    id: 'work1',
    description: 'Software development company specializing in custom web solutions.',
  },
  {
    company: 'Stämm',
    title: 'Help Desk Specialist',
    start: '2023',
    end: '2024',
    link: '/work/help-desk-specialist',
    id: 'work2',
    description: 'Biotech startup developing next-gen biomanufacturing technologies.',
  },
]

export const WORK_EXPERIENCE_ES: WorkExperience[] = [
  {
    company: 'Catsule Corp',
    title: 'Desarrollador Full Stack',
    start: '2024',
    end: 'Presente',
    link: '/work/full-stack-developer',
    id: 'work1',
    description: 'Empresa de desarrollo de soluciones web a medida.',
  },
  {
    company: 'Stämm',
    title: 'Especialista de Help Desk',
    start: '2023',
    end: '2024',
    link: '/work/help-desk-specialist',
    id: 'work2',
    description: 'Startup de biotecnología de próxima generación.',
  },
]

export const EDUCATION_EN: WorkExperience[] = [
  {
    company: 'Universidad de la Defensa Nacional',
    title: 'Cyberdefense',
    start: '2026',
    end: 'Present',
    link: 'https://undef.edu.ar/fadena/carreras-de-grado/licciberdefensa/',
    id: 'edu1',
  },
  {
    company: 'Universidad Nacional de Córdoba',
    title: 'Computer Science',
    start: '2025',
    end: '2025',
    link: 'https://www.famaf.unc.edu.ar/academica/grado/licenciatura-en-ciencias-de-la-computaci%C3%B3n/',
    id: 'edu2',
  },
  {
    company: 'Boot.dev',
    title: 'Backend Development',
    start: '2024',
    end: '2024',
    link: 'https://boot.dev',
    id: 'edu3',
  },
  {
    company: 'Professional Google Career Certificates',
    title: 'IT Support & Cybersecurity',
    start: '2023',
    end: '2023',
    link: 'https://grow.google/certificates/',
    id: 'edu5',
  },
  {
    company: 'Scrimba.com',
    title: 'Frontend Development',
    start: '2022',
    end: '2022',
    link: 'https://scrimba.com/home',
    id: 'edu4',
  },
]

export const EDUCATION_ES: WorkExperience[] = [
  {
    company: 'Universidad de la Defensa Nacional',
    title: 'Ciberdefensa',
    start: '2026',
    end: 'Presente',
    link: 'https://undef.edu.ar/fadena/carreras-de-grado/licciberdefensa/',
    id: 'edu1',
  },
  {
    company: 'Universidad Nacional de Córdoba',
    title: 'Ciencias de la Computación',
    start: '2025',
    end: '2025',
    link: 'https://www.famaf.unc.edu.ar/academica/grado/licenciatura-en-ciencias-de-la-computaci%C3%B3n/',
    id: 'edu2',
  },
  {
    company: 'Boot.dev',
    title: 'Desarrollo Backend',
    start: '2024',
    end: '2024',
    link: 'https://boot.dev',
    id: 'edu3',
  },
  {
    company: 'Certificados Profesionales de Google',
    title: 'Soporte IT y Ciberseguridad',
    start: '2023',
    end: '2023',
    link: 'https://grow.google/certificates/',
    id: 'edu5',
  },
  {
    company: 'Scrimba.com',
    title: 'Desarrollo Frontend',
    start: '2022',
    end: '2022',
    link: 'https://scrimba.com/home',
    id: 'edu4',
  },
]

export const BLOG_POSTS_EN: BlogPost[] = [
  {
    title: 'Hacking Through the Holidays: My Advent of Cyber 2025 Experience',
    description: 'A daily journey through TryHackMe\'s cybersecurity challenges, learning new skills and solving puzzles.',
    link: '/blog/advent-of-cyber-2025',
    uid: 'blog-1',
  },
  {
    title: 'Solving One Problem a Day: My Codeforces Journey',
    description: 'Competitive Programming Meets Daily Discipline. My journey solving Codeforces problems consistently while learning Python with CS50.',
    link: '/blog/codeforces-journey',
    uid: 'blog-2',
  },
  {
    title: 'Building a Virtual Network: My Cisco Packet Tracer Journey',
    description: 'Documenting my progress in building a simulated virtual network using Cisco Packet Tracer while learning from the Cisco Networking Academy.',
    link: '/blog/cisco-packet-tracer-journey',
    uid: 'blog-3',
  },
]

export const BLOG_POSTS_ES: BlogPost[] = [
  {
    title: 'Hackeando en las Fiestas: Mi Experiencia en Advent of Cyber 2025',
    description: 'Un viaje diario a través de los desafíos de ciberseguridad de TryHackMe, aprendiendo nuevas habilidades y resolviendo acertijos.',
    link: '/blog/advent-of-cyber-2025',
    uid: 'blog-1',
  },
  {
    title: 'Resolviendo un Problema al Día: Mi Viaje en Codeforces',
    description: 'La Programación Competitiva se encuentra con la Disciplina Diaria. Mi viaje resolviendo problemas de Codeforces consistentemente mientras aprendo Python con CS50.',
    link: '/blog/codeforces-journey',
    uid: 'blog-2',
  },
  {
    title: 'Construyendo una Red Virtual: Mi Viaje con Cisco Packet Tracer',
    description: 'Documentando mi progreso en la construcción de una red virtual simulada usando Cisco Packet Tracer mientras aprendo de la Academia de Networking de Cisco.',
    link: '/blog/cisco-packet-tracer-journey',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/gonzalogramagia',
  },
  {
    label: 'Youtube',
    link: 'https://www.youtube.com/@gonzalogramagia',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gonzalogramagia',
  }
]

export const EMAIL = 'gonzalogramagia@gmail.com'

export const PROJECTS = { en: PROJECTS_EN, es: PROJECTS_ES }
export const WORK_EXPERIENCE = { en: WORK_EXPERIENCE_EN, es: WORK_EXPERIENCE_ES }
export const EDUCATION = { en: EDUCATION_EN, es: EDUCATION_ES }
export const BLOG_POSTS = { en: BLOG_POSTS_EN, es: BLOG_POSTS_ES }
