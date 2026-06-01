import AuthorLayout from '@/layouts/AuthorLayout'
import { useTranslation } from '@/context/LanguageContext'

export default function About() {
  const { t } = useTranslation()

  const frontMatter = {
    name: 'Hadhemi Ben Mansour',
    avatar: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/static/images/photosprofils.jpg`,
    occupation: 'Full Stack Web & Mobile Developer',
    company: 'CLOZINN Support',
    email: 'ben.manssour.hadhemi@gmail.com',
    linkedin: 'www.linkedin.com/in/hadhemi-ben-mansour-0241701a5',
    github: 'https://github.com/HadhemiBM',
    text1: t('about.bio'),
  }

  return <AuthorLayout frontMatter={frontMatter} />
}
