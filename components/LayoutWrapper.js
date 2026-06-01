import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import DropMenu from './DropMenu.js'
import { useTranslation } from '@/context/LanguageContext'

const LayoutWrapper = ({ children }) => {
  const { lang, toggle, t } = useTranslation()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                ~/
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="link-underline rounded px-2 py-1 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-3 sm:py-2"
              >
                {t(`nav.${link.title.toLowerCase()}`)}
              </Link>
            ))}
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="ml-1 rounded-full bg-zinc-300 px-2.5 py-1 text-xs font-semibold text-zinc-700 ring-zinc-400 transition-all hover:bg-zinc-400 hover:ring-1 dark:bg-zinc-700 dark:text-zinc-200 dark:ring-white dark:hover:bg-zinc-600"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <ThemeSwitch />
            <DropMenu />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
