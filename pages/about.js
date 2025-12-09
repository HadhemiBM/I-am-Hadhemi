import AuthorLayout from '@/layouts/AuthorLayout'

export default function About() {
  const frontMatter = {
    name: 'Hadhemi Ben Mansour',
    avatar: '/static/images/photosprofils.jpg',
    occupation: 'Full Stack Web & Mobile Developer',
    company: '4ina Technology',
    email: 'ben.manssour.hadhemi@gmail.com',
    linkedin: 'www.linkedin.com/in/hadhemi-ben-mansour-0241701a5',
    github: 'https://github.com/HadhemiBM',
    text1:
      'I am a Tunisian Full Stack Developer with a strong background in web and mobile development. I am passionate about building modern applications with clean design, efficient code, and meaningful user experiences.',
  }

  return <AuthorLayout frontMatter={frontMatter} />
}
